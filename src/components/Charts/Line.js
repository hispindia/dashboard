import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import NoDataOptions from "highcharts/modules/no-data-to-display.js";
import {
  identifyChartPeriod,
  identifyChartType,
  collectDataElement,
  collectPeriod,
} from "../../utils";
import { PostUrl, StartUrl, apiKey } from "../../constants/CardType";

import { useSelector } from "react-redux";
import { ApiServices } from "../../services";

// Initialize the required Highcharts modules
HighchartsAccessibility(Highcharts);
NoDataOptions(Highcharts);

export const Line = ({ data, bgColor, labelStyle }) => {
  const { title, api, dualAxis, attributes } = data;
  const period = useSelector((state) => state.navbar.period);
  const Orgunit = useSelector((state) => state?.outree?.clickedOU?.id);
  // function calculateorg(){
  // if(Orgunit==undefined){
  //   Orgunit="USER_ORGUNIT"
  // }
  // else{
  //    Orgunit;
  // }
  // }
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);


  async function fetchRecords() {
    let seriesTypeRecords = {};

    // const url = `${items.dataElementMethod}:${collectDataElement(items.dataElements)}
    // &${items.period.method}:${collectPeriod(period, items.period.count)}
    // &${items.others}`;

    // const services = await ApiServices.fetchRecords(url);

    // const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes.others}`;
    const params = `${attributes.dataElementMethod}:${collectDataElement( attributes.dataElements)}&${attributes.period.method}:${collectPeriod( period,  attributes.period.count )}&${attributes?.org?.method}:${Orgunit}`;
    const services = await ApiServices.fetchRecords(params);

    // const { dimensions: { pe }, metaData } = services.metaData;
    const {
      dimensions: { dx, pe },
      items,
    } = services.metaData;

    const ctYear=identifyChartPeriod({ pe, items })
    setCategories(ctYear);
    // services?.rows?.forEach((item) => {
    //   seriesTypeRecords = {
    //     ...seriesTypeRecords,
    //     [item[0]]: [...(seriesTypeRecords[item[0]] ?? []), Number(item[2])],
    //   };
    // });
    services?.rows?.forEach((item) => {
      seriesTypeRecords = {
        ...seriesTypeRecords,
        [item[0]]: {
          ...(seriesTypeRecords[item[0]] ?? {}),
          [item[1]]: Number(item[2]),
        },
      };
    });

for (const dxId of Object.keys(seriesTypeRecords)) {

  for (const yr of ctYear) {
    if (!seriesTypeRecords[dxId][yr]) {
      seriesTypeRecords[dxId][yr] = null;
    }
  }
}
    setSeries(
      identifyChartType({
        dataElement: attributes.dataElements,
        seriesTypeRecords,
        dualAxis,
        items,
      })
    );
  }

  function plotChart() {
    // Create the chart

    Highcharts.chart(title, {
      chart: {
        backgroundColor: bgColor,
        borderRadius: 10,
      },
      lang: {
        noData: "No data found",
      },
      title: {
        text: title,
        style: {
          ...labelStyle,
        },
        align: "left",
        widthAdjust: "",
      },
      credits: {
        enabled: false,
      },
      legend: {
        layout: "horizontal",
        itemStyle: {
          fontWeight: "normal",
          color: labelStyle.color,
        },
      },
      plotOptions: {
        series: {
          borderRadius: "0%",
        },
      },
      exporting: { enabled: false },
      xAxis: {
        tickInterval: 1,
        type: "spline",
        crosshair: true,

        categories,
        accessibility: {
          description: "Months of the year",
        },
        labels: {
          style: {
            color: labelStyle.color,
            font: "Trebuchet MS, Verdana, sans-serif",
          },
        },
        title: {
          style: {
            color: labelStyle.color,
            fontFamily: "Trebuchet MS, Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        minorTickInterval: 1,
        labels: {
          style: {
            color: labelStyle.color,
            font: "Trebuchet MS, Verdana, sans-serif",
          },
        },
        title: {
          enabled: false,
        },
      },

      series,
    });
  }
  useEffect(() => {
    if (Orgunit) {
      fetchRecords();
    }
  }, [period, Orgunit]);

  useEffect(() => {
    plotChart();
  }, [series]);

  return <figure id={title}></figure>;
};

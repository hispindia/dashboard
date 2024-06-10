import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import NoDataOptions  from "highcharts/modules/no-data-to-display.js";

import {
  identifyChartPeriod,
  identifyChartType,
  collectDataElement, 
  collectPeriod
} from "../../utils";
import { PostUrl, StartUrl, apiKey } from "../../constants/CardType";
import { useSelector } from "react-redux";
import { ApiServices } from "../../services";
HighchartsAccessibility(Highcharts);
NoDataOptions(Highcharts)
export const LineColumn = ({ data, bgColor, labelStyle }) => {
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);
  const Orgunit= useSelector((state) => state?.outree?.clickedOU?.id);
  const { title, api, dualAxis, attributes } = data;
  const period = useSelector((state) => state.navbar.period);
  async function fetchRecords() {
    let seriesTypeRecords = {};
    const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes?.org?.method}:${Orgunit}`;
    const services = await ApiServices.fetchRecords(params);

    const {
      dimensions: { dx, pe },
      items,
    } = services.metaData;

    const ctYear=identifyChartPeriod({ pe, items })
    setCategories(ctYear);
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
    console.log("123",title,identifyChartType({ dataElement: attributes.dataElements, seriesTypeRecords, dualAxis, items }))

    setSeries(identifyChartType({ dataElement: attributes.dataElements, seriesTypeRecords, dualAxis, items }));
  }

  function plotChart() {
    Highcharts.chart(title, {
      chart: {
        zoomType: "xy",
        backgroundColor: bgColor,
        borderRadius: 10,
      },
      lang: {
        noData: "No data found"
    },
      title: {
        text: title,
        style: {
          ...labelStyle,
        },
        align: "left",
        widthAdjust: "",
      },
      exporting: { enabled: false },

      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          borderRadius: "0%",
        },
      },

      xAxis: [
        {
          categories,
          crosshair: true,
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
      ],
      yAxis: [
        {
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
        {
          // Secondary yAxis
          title: {
            enabled: false,
          },
          labels: {
            format: "{value}",
            style: {
              color: labelStyle.color,
            },
          },
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
      },
      legend: {
        layout: "horizontal",
        itemStyle: {
          fontWeight: "normal",
          color: labelStyle.color,
        },
      },
      series,
      // series: [{
      //     name: 'Precipitation',
      //     type: 'column',
      //     yAxis: 1,
      //     data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
      //         60.0, 28.6, 32.1],
      //     tooltip: {
      //         valueSuffix: ' mm'
      //     },

      // }, {
      //     name: 'Temperature',
      //     type: 'line',
      //     data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
      //     -0.7, -11.0, -16.4],
      //     tooltip: {
      //         valueSuffix: '°C'
      //     },
      //     color: 'yellow'
      // }]
    });
  }
  useEffect(() => {
    if(Orgunit){
      fetchRecords();
    }
   
  }, [period,Orgunit]);

  useEffect(() => {
    plotChart();
  }, [series]);

  return <figure id={title}></figure>;
};

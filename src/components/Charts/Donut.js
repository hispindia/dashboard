import React, { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import SolidGauge from "highcharts/modules/solid-gauge";
import Accessibility from "highcharts/modules/accessibility";
import NoDataOptions  from "highcharts/modules/no-data-to-display.js";

import { identifyChartType,collectDataElement, collectPeriod } from "../../utils";
import { PostUrl, StartUrl, apiKey } from "../../constants/CardType";
import { useSelector } from "react-redux";
import { ApiServices } from "../../services";

HighchartsMore(Highcharts);
SolidGauge(Highcharts);
Accessibility(Highcharts);
NoDataOptions(Highcharts)

export const Donut = ({ data, bgColor, labelStyle }) => {
  const { title, api, dualAxis, attributes } = data;
  const period = useSelector((state) => state.navbar.period);
  const Orgunit= useSelector((state) => state?.outree?.clickedOU?.id);
  const ref = useRef();
  const [series, setSeries] = useState([]);

  async function fetchRecords() {
    let seriesTypeRecords = {};
    const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes?.org?.method}:${Orgunit}`;
    const services = await ApiServices.fetchRecords(params);
    const {
      dimensions: { dx, pe },
      items,
    } = services.metaData;

    services?.rows?.forEach((item) => {
      seriesTypeRecords = {
        ...seriesTypeRecords,
        [item[0]]: [...(seriesTypeRecords[item[0]] ?? []), Number(item[2])],
      };
    });

    setSeries(identifyChartType({ dataElement: attributes.dataElements, seriesTypeRecords, dualAxis, items }));
  }

  function plotChart() {
    const gaugeOptions = {
      chart: {
        backgroundColor: bgColor,
        borderRadius: 10,
      },
      lang: {
        noData: "No data found"
    },
    noData: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px'
        }
    },
      title: {
        text: title,
        style: {
          ...labelStyle,
        },
        align: "left",
        widthAdjust: "",
      },
      pane: {
        center: ["50%", "85%"],
        size: "100%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },
      lineWidth: 1,
      exporting: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },

      yAxis: {
        stops: [
          [0.1, "#55BF3B"], // green
          [0.5, "#rgb(222, 121, 64)"], // yellow
          [0.9, "#DF5353"], // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
        },
        labels: {
          y: 16,
        },
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -29,
            color: labelStyle.color,
            useHTML: true,
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}%</span>' +
              "</div>",
          },
        },
      },
    };
    // The speed gauge
    Highcharts.chart(
      title,
      
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
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
        credits: {
          enabled: false,
        },
        series: series,
      })
    );
   
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

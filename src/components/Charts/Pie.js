import React, { useEffect, useState } from 'react';
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility";

import { identifyChartType, collectDataElement, collectPeriod  } from '../../utils';
import { ApiServices } from '../../services';
import { useSelector } from "react-redux";
import { PostUrl, StartUrl, apiKey } from '../../constants/CardType';
import NoDataOptions  from "highcharts/modules/no-data-to-display.js";
HighchartsAccessibility(Highcharts);
NoDataOptions(Highcharts);

export const Pie = ({ data, bgColor, labelStyle }) => {
  const { title, api, dualAxis, attributes } = data;
  const period = useSelector((state) => state.navbar.period);
  const Orgunit = useSelector((state) => state?.outree?.clickedOU?.id);
  const [series, setSeries] = useState([])

  async function fetchRecords() {
    let seriesTypeRecords = []
    const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes?.org?.method}:${Orgunit}`;
    const services = await ApiServices.fetchRecords(params);
    const { dimensions: { dx, pe }, items } = services.metaData

    services?.rows?.forEach(item => {
      seriesTypeRecords = { ...seriesTypeRecords, [item[0]]: [...seriesTypeRecords[item[0]] ?? [], Number(item[2])] }
    })

    setSeries(identifyChartType({ dataElement: attributes.dataElements, seriesTypeRecords, dualAxis, items }));
  }

  function plotChart() {

    // Build the chart
    Highcharts.chart(title, {
      chart: {
        backgroundColor: bgColor,
        borderRadius: 10,
        type: "pie",
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
      // tooltip: {
      //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      // },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors,
          borderRadius: 5,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.y}',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      series
    });
  }

  useEffect(() => {
    if(Orgunit){
      fetchRecords()
    }
    
  }, [period,Orgunit]);

  useEffect(() => {
    plotChart()
  }, [series]);


  return <figure id={title}></figure>;
};


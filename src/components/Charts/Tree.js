import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsTreemap from "highcharts/modules/treemap";
import NoDataOptions  from "highcharts/modules/no-data-to-display.js";

import { useSelector } from "react-redux";
import { PostUrl, StartUrl, apiKey } from "../../constants/CardType";
import { collectDataElement, collectPeriod } from "../../utils/DataElementFunction";
import { ApiServices } from "../../services";
HighchartsTreemap(Highcharts);
NoDataOptions(Highcharts)

export const Tree = ({ data, bgColor, labelStyle }) => {
  const [records, setRecords] = useState([]);

  const { title, api, dualAxis, attributes } = data;
  const period = useSelector((state) => state.navbar.period);
  const Orgunit = useSelector((state) => state?.outree?.clickedOU?.id);
  async function fetchRecords() {
    let seriesTypeRecords = [];
    const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes?.org?.method}:${Orgunit}`;
    const services = await ApiServices.fetchRecords(params);
    const {
      dimensions: { dx, pe },
      items,
    } = services.metaData;

    services?.rows?.forEach((item) => {
      seriesTypeRecords.push(
        {
          id: item[1],
          color: "#141732",
        },
        {
          parent: item[1],
          value: Number(item[2]),
          name: item[2],
        }
      );
    });
    setRecords(seriesTypeRecords);
  }

  function plotChart() {
    const options = {
      chart: {
        backgroundColor: "#141732",
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
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: "treemap",
          color: bgColor,
          alternateStartingDirection: true,
          borderRadius: 10,
          borderWidth: 0,
          dataLabels: {
            style: {
              textOutline: "none",
              fontSize: "30px",
            },
          },
          levels: [
            {
              level: 1,
              layoutAlgorithm: "sliceAndDice",
              dataLabels: {
                enabled: true,
                align: "left",
                style: {
                  fontSize: "15px",
                  fontWeight: "bold",
                },
              },
            },
          ],

          data: records,
        },
      ],
      tooltip: {
        useHTML: true,
        followPointer: true,
      },
    };

    Highcharts.chart(title, options);
  }

  useEffect(() => {
    if(Orgunit){
      fetchRecords();
    }
   
  }, [period,Orgunit]);

  useEffect(() => {
    plotChart();
  }, [records]);

  return <figure id={title}></figure>;
};

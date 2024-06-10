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
import { useSelector } from "react-redux";
import { ApiServices } from "../../services";
HighchartsAccessibility(Highcharts);
NoDataOptions(Highcharts)
export const StackedColumn = ({ data, bgColor, labelStyle }) => {
    const [categories, setCategories] = useState([]);
    const [series, setSeries] = useState([]);

    const { title, api, dualAxis, attributes } = data;
    const period = useSelector((state) => state.navbar.period);
    const Orgunit = useSelector((state) => state?.outree?.clickedOU?.id);
    async function fetchRecords() {
        let seriesTypeRecords = {};
        const params = `${attributes.dataElementMethod}:${collectDataElement(attributes.dataElements)}&${attributes.period.method}:${collectPeriod(period, attributes.period.count)}&${attributes?.org?.method}:${Orgunit}`;
        const services = await ApiServices.fetchRecords(params);

        const { dimensions: { dx, pe }, items, } = services.metaData;

        setCategories(identifyChartPeriod({ pe, items }));

        services?.rows?.forEach((item) => {
            seriesTypeRecords = {
                ...seriesTypeRecords,
                [item[0]]: [...(seriesTypeRecords[item[0]] ?? []), Number(item[2])],
            };
        });

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
                column: {
                    stacking: 'percent',
                    dataLabels: {
                        enabled: true,
                        // format: '{point.percentage:.0f}%'
                    }
                }
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

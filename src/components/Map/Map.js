import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HCMapMarkerClusters from "highcharts/modules/marker-clusters";
import { destructureCordinates } from "../../utils/Mapfunctions";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HichartExport from "highcharts/modules/exporting";

import Theme from "highcharts/themes/dark-unica";

HighchartsMap(Highcharts);
HCMapMarkerClusters(Highcharts);
HighchartsAccessibility(Highcharts);
HichartExport(Highcharts);
Theme(Highcharts);
// Theme(Highcharts)
const Map = () => {
  const [geoJSON, setGeoJSON] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const newTheme = isDarkTheme ? getDarkTheme() : getLightTheme();
    Highcharts.setOptions(newTheme);
    plotMap();
  }, [isDarkTheme]);
  function fetchLatLng() {
    fetch(
      `https://links.hispindia.org/timor/api/geoFeatures?includeGroupSets=false&ou=ou:Fn51zf6ifbm;LEVEL-3;LEVEL-4;LEVEL-5&displayProperty=NAME`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) return alert("without lat lng ghnta chlega MAP");
        console.log("destructureCordinates(data)", destructureCordinates(data));
        setGeoJSON(destructureCordinates(data));
      })
      .catch((error) => {});
  }
  console.log("geoJSON", geoJSON);
  function plotMap() {
    const theme = isDarkTheme ? Highcharts.theme.dark : Highcharts.theme.light;
    Highcharts.mapChart("map", {
      ...theme,
      chart: {
        map: geoJSON,
      },
      exporting: {
        enabled: true,
      },
      title: {
        text: "",
      },

      navigation: {
        buttonOptions: {
          enabled: true,
        },
      },
      plotOptions: {
        mappoint: {
          cluster: {
            enabled: true,
            allowOverlap: false,
            animation: {
              duration: 450,
            },
            layoutAlgorithm: {
              type: "grid",
              gridSize: 70,
            },
            zones: [
              {
                from: 1,
                to: 4,
                marker: {
                  radius: 13,
                },
              },
              {
                from: 5,
                to: 9,
                marker: {
                  radius: 15,
                },
              },
              {
                from: 10,
                to: 15,
                marker: {
                  radius: 17,
                },
              },
              {
                from: 16,
                to: 20,
                marker: {
                  radius: 19,
                },
              },
              {
                from: 21,
                to: 100,
                marker: {
                  radius: 21,
                },
              },
            ],
          },
        },
      },

      tooltip: {
        headerFormat: "",
        pointFormat:
          "<b>{point.name}</b><br>Lat: {point.lat:.2f}, Lon: {point.lon:.2f}",
      },

      series: [
        {
          name: "Europe",
          accessibility: {
            exposeAsGroupOnly: true,
          },
          borderColor: "#A0A0A0",
          nullColor: "rgba(177, 244, 177, 0.5)",
          showInLegend: false,
        },
        {
          type: "mappoint",
          enableMouseTracking: true,
          accessibility: {
            point: {
              descriptionFormat:
                "{#if isCluster}" +
                "Grouping of {clusterPointsAmount} points." +
                "{else}" +
                "{name}, country code: {country}." +
                "{/if}",
            },
          },
          colorKey: "clusterPointsAmount",
          name: "",
          data: [],
          color: Highcharts.getOptions().colors[5],
          marker: {
            lineWidth: 1,
            lineColor: "#fff",
            symbol: "mapmarker",
            radius: 8,
          },
          dataLabels: {
            verticalAlign: "top",
          },
        },
      ],
    });
  }

  useEffect(() => {
    fetchLatLng();
  }, []);

  useEffect(() => {
    plotMap();
  }, [geoJSON]);

  function toggleTheme() {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }

  function getDarkTheme() {
    return {
      chart: {
        backgroundColor: "#333333",
        style: {
          color: "#ffffff",
        },
      },
      // Add other dark theme options here
    };
  }

  function getLightTheme() {
    return {
      chart: {
        backgroundColor: "#ffffff",
        style: {
          color: "#000000",
        },
      },
      // Add other light theme options here
    };
  }

  // return <figure id="map"></figure>;
  return (
    <div style={{ position: "relative" }}>
      <div id="map"></div>
      <button
        onClick={toggleTheme}
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: 100 }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Map;

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import { destructureCordinates } from "../../utils/Mapfunctions";
import "./MapLeaf.css"; // Import CSS file for custom styling
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";

// Legend component
const Legend = () => {
  return (
    <div className="leaflet-bottom leaflet-right">
      <div className="leaflet-control leaflet-bar" style={{ margin: "30px" }}>
        <div
          className="maplegend"
          style={{ background: "rgba(0, 0, 0, 0.3)", maxWidth: "300px" }}
        >
          <ul
            className="list-group list-group-horizontal"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <li className="list-group-item">
              Malaria
              <span
                className="legend-circle"
                style={{ backgroundColor: "red" }}
              ></span>
            </li>
            <li className="list-group-item">
              TB
              <span
                className="legend-circle"
                style={{ backgroundColor: "purple" }}
              ></span>
            </li>
            <li className="list-group-item">
              N/A
              <span
                className="legend-circle"
                style={{ backgroundColor: "rgb(141, 138, 130)" }}
              ></span>
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              HIV
              <div>
                <span
                  className="legend-circle"
                  style={{ backgroundColor: "yellow" }}
                ></span>
                <span style={{ color: "white" }}>
                  Number of key population with known HIV
                </span>
              </div>
              <div>
                <span
                  className="legend-circle"
                  style={{ backgroundColor: "green" }}
                ></span>
                <span style={{ color: "white" }}>
                  Number of pregnant women with known HIV
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const MapLeaf = () => {
  const mapRef = useRef(null);
  const [geoJSON, setGeoJSON] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [tbData, setTbData] = useState([]);
  const [mData, setMData] = useState([]);
  const [colorState] = useState({
    inBC0qKxMD6: [
      "yellow",
      "Number of key population with known HIV status",
      5000,
    ],
    pWQLxF3o8YN: [
      "green",
      "Number of pregnant women with known HIV status",
      3000,
    ],
    EHiiQmCIZFH: ["red", "Malaria Case Distribution (Maps)", 2000],
    ArDkOfK5kCG: [
      "#800080",
      "Vulnerability Assessment Point Location(Maps)",
      1000,
    ],
  });
  var circleCheck={};
  function fetchLatLng() {
    fetch(
      `https://links.hispindia.org/timor/api/geoFeatures?includeGroupSets=false&ou=ou:Fn51zf6ifbm;LEVEL-3;LEVEL-4;LEVEL-5&displayProperty=NAME`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data.length)
          return alert("Without latitude and longitude, the map won't render.");
        // setGeoJSON(data);
        setGeoJSON(destructureCordinates(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function fetchData() {
    fetch(
      `https://links.hispindia.org/timor/api/analytics.json?dimension=dx%3AinBC0qKxMD6%3BpWQLxF3o8YN&dimension=ou%3ALEVEL-Vxc9GYZvlgm&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=pe%3A2023`
    )
      .then((response) => response.json())
      .then((data) => {
        setMapData(data.rows);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  function fetchMalariaData() {
    fetch(
      `https://links.hispindia.org/timor/api/analytics.json?dimension=dx%3AEHiiQmCIZFH%3BArDkOfK5kCG&dimension=ou%3ALEVEL-uC0z1ki18au%3BLEVEL-Vxc9GYZvlgm%3BLEVEL-MgLtOz88CMf&showHierarchy=false&hierarchyMeta=false&includeMetadataDetails=true&includeNumDen=true&skipRounding=false&completedOnly=false&outputIdScheme=UID&filter=pe%3A2022%3B2021%3B2020%3B2019%3B2018%3B2023`
    )
      .then((response) => response.json())
      .then((data) => {
        let Mrecord = [];
        let Trecord = [];
        // for (const row in data.rows) {
        data?.rows?.forEach((row) => {
          if (row[0] == "EHiiQmCIZFH") Mrecord.push(row);
          if (row[0] == "ArDkOfK5kCG") Trecord.push(row);
        });

        // }
        setMData(Mrecord);
        setTbData(Trecord);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function matchAndDrawCircles(diseaseData, mcg, map) {
    const mapItems = new Map();
    const mapMalariaItems = new Map();


    // Check if geoJSON.features is defined and is an array
    if (geoJSON && Array.isArray(geoJSON.features)) {
      geoJSON.features.forEach((item) => {
        mapItems.set(item.id, item);
        mapMalariaItems.set(item.id, item);
      });
    } else return;

    diseaseData?.forEach((data) => {
      const parentId = data[1];
      const DimensionId = data[0];
      if (mapItems.has(parentId)) {
        const matchedItem = mapItems.get(parentId);
        if (matchedItem.geometry && matchedItem.geometry.coordinates) {
          const coordinates = matchedItem.geometry.coordinates;
          const latitude = coordinates[1]; // Accessing the latitude from the second array
          const longitude = coordinates[0];
          const value = Number(data[2]);
          const countryName = matchedItem?.parentName;

          if (!isNaN(latitude) && !isNaN(longitude) && !isNaN(value)) {
            var circle = L.circle([latitude, longitude], {
              color: colorState[DimensionId][0],

              fillColor: colorState[DimensionId][0],

              fillOpacity: 1,
              radius: colorState[DimensionId][2],
            }).addTo(map);
            circleCheck[parentId] = circle;
            // You can bind popup or any other interactions with the circle here
          }

          circle.on("mouseover", function (e) {
            let popupContent;

            popupContent = `
                        <b>${countryName}</b><br>
                        value: ${value ? value : 0}<br>
                       ${colorState[DimensionId][1]}
                    `;

            this.bindPopup(popupContent).openPopup(); // Update and open popup content
          });

          circle.on("mouseout", function (e) {
            this.closePopup(); // Close popup
          });
          map.addLayer(mcg);
        }
      }
    });
  }

  function removeAllCircles(map, data) {
    data.map((item) => {
      
      if (circleCheck[item[1]]) {
        map.removeLayer(circleCheck[item[1]]);
        delete circleCheck[item[1]]; // Remove the circle reference from the circles object
      }
    });
  }

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [-8.874217, 125.727539], // Centering on Timor-Leste
      zoom: 8, // Adjust zoom level as needed
    });

    // Base layers
    const baseLayers = {
      "No Base Map": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      ).addTo(map),
      "Default Map": L.tileLayer(
        "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      ).addTo(map),
      "Satellite Map": L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
        }
      ).addTo(map),
      // "Satellite Map": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      //   maxZoom: 18,
      //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      // }).addTo(map),
      //  "Dark Map": L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
      //   maxZoom: 20,
      //   subdomains:['mt0','mt1','mt2','mt3']
      "Dark Map": L.tileLayer(
        "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 18,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      ),

      // Add more base layers as needed
    };

    // Reset button
    const resetButton = L.control({ position: "topright" });

    resetButton.onAdd = function (map) {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");

      const button = L.DomUtil.create("button", "", div);
      button.innerHTML = "Reset";
      button.title = "Reset Map View";
      button.onclick = function () {
        map.setView([-8.874217, 125.727539], 8); // Set the map view to initial state
      };

      return div;
    };

    resetButton.addTo(map);

    const topRightLayers = {
      HIV: L.tileLayer("", {
        maxZoom: 18,
      }),
      TB: L.tileLayer("", {
        maxZoom: 18,
      }),
      Malaria: L.tileLayer("", {
        maxZoom: 18,
      }),
    };
    // Overlay layers
    const overlayLayers = {};

    // Marker Cluster Group
    const mcg = L.markerClusterGroup({
      chunkedLoading: true,
      spiderfyOnMaxZoom: false,
    });

    // Add Marker Cluster Group to the map

    matchAndDrawCircles(mapData, mcg, map);

    // Add layers control
    const layersControl = L.control
      .layers(baseLayers, overlayLayers, { position: "bottomleft" })
      .addTo(map);

    const topRightLayersControl = L.control
      .layers(null, topRightLayers, { position: "topright" })
      .addTo(map);
    topRightLayers.HIV.addTo(map);
    topRightLayersControl._overlaysList.firstChild.firstChild.checked = true; // Manually set the checkbox to checked
    topRightLayersControl._map.on("overlayadd", function (eventLayer) {
      console.log("eventLayer>>>>>>>>>", eventLayer);
      // matchAndDrawCircles(
      //   mapData
      //   , mcg, map);
      if (eventLayer.name === "HIV") {
        matchAndDrawCircles(mapData, mcg, map);
      }
      if (eventLayer.name === "Malaria") {
        matchAndDrawCircles(mData, mcg, map);
      }
      if (eventLayer.name === "TB") {
        matchAndDrawCircles(tbData, mcg, map);
      }
    });
    // topRightLayersControl._map.on("overlayremove", function (eventLayer) {
    //   if (eventLayer.name === "HIV") {
    //     topRightLayersControl._overlaysList.firstChild.firstChild.checked = false;

    //   }
    // });

    topRightLayersControl._map.on("overlayremove", function (eventLayer) {
      if (eventLayer.name === "HIV") {
        // Remove HIV data from the map
        removeAllCircles(map,mapData);
      }
      if (eventLayer.name === "Malaria") {
        // Remove Malaria data from the map
        removeAllCircles(map,mData);
      }
      if (eventLayer.name === "TB") {
        // Remove TB data from the map
        removeAllCircles(map,tbData);
      }
    });

    L.control
      .fullscreen({
        position: "topleft",
        title: {
          false: "View Fullscreen",
          true: "Exit Fullscreen",
        },
        forceSeparateButton: true,
      })
      .addTo(map);

    return () => {
      map.remove();
    };
  }, [geoJSON, mapData, mData, tbData]);

  useEffect(() => {
    fetchLatLng();
    fetchData();
    fetchMalariaData();
  }, []);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "70vh" }}
        ref={mapRef}
      ></div>
      <Legend />
    </>
  );
};

export default MapLeaf;

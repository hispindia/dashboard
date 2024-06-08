import React, { useState, useEffect } from "react";
import "./styles.scss";

import { CircularLoader } from "@dhis2/ui";
import { useSelector } from "react-redux";
import { ApiService } from "../../services/api";
import Modal from "../Modal/Modal.component";

const Sheet = ({
  clickedOU,
  state,
  district,
  headList,
  categoriesList,
  subCategoriesList,
  dataElementGroups,
  subHeads,
  subCategories,
  categoryId,
  subCategoryId,
  headId,
  subHeadId,
}) => {
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [head, setHead] = useState("");
  const [subHead, setSubHead] = useState("");

  const [dataElements, setDataElements] = useState([]);
  const [facilityList, setFacilityList] = useState({});
  const [displayModal, setDisplayModal] = useState(false);
  const [availability, setAvailability] = useState("");
  const [question, setQuestion] = useState("");
  const [orgUnits, setOrgUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDisplay = (bool) => setDisplayModal(bool);

  useEffect(() => {
    if (clickedOU) {
      const path = clickedOU.path.split("/");

      const currState = state.find((ou) => ou.id == clickedOU.id);
      const currDistrict = district.find((ou) => ou.id == clickedOU.id);

      if (currState) {
        setStateName(clickedOU.name);
        setDistrictName("ALL");
      } else if (currDistrict) {
        setDistrictName(clickedOU.name);
        setStateName(currDistrict.parent.name);
      } else if (path.length) {
        setStateName(path[1] ? path[1] : "");
        setDistrictName(path[2] ? path[2] : "");
      }
    }
  }, [clickedOU]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      if (categoryId && headId && subHeadId) {

        const category = categoriesList.find(
          (category) => category.id == categoryId
        );
        if (category) setCategory(category);

        const subCategory = subCategories.find(
          (subCategory) => subCategory.id == subCategoryId
        );
        if (subCategory) setSubCategory(subCategory);
        
        const head = headList.find((head) => head.id == headId);
        if (head) setHead(head);
        const subHead = subHeads.find((subHead) => subHead.id == subHeadId);
        if (subHead) setSubHead(subHead);

        var deList = [];
        const deCodeVal = {};
        const catgoriesCode = {};
        if (subHeadId == "all") {
          deList = subHeads[0].dataElements;
        } else {
          deList = [subHead];
        }

        if(categoryId == 'all') {
          categoriesList.forEach(category => {
            if(category.code) catgoriesCode[`${category.code}_${head.code}_CODE`]  = true;
          })
        }
        else catgoriesCode[`${category.code}_${head.code}_CODE`] = true;

        deList.forEach((data) => {
          data.attributeValues.forEach((attrVal) => {
              if(catgoriesCode[attrVal.attribute.code]) {
                if(!deCodeVal[data.id]) deCodeVal[data.id]=[];
                deCodeVal[data.id].push(attrVal.value);
              }
            });
        });

        const teiList = await ApiService.trackedEntityInstance.filter(
          clickedOU.id,
          headId,
          "FuCoXAHtiTN",
          category.code
        );

        //Single ou single event, listing all the current events with facility and  orgunit.
        const events = [];        
        teiList.trackedEntityInstances.forEach((tei) => {
          var currEvent = [];
          var prevDate = "";
          var orgUnitId = "";
          const teiFacility = tei.attributes.find(attr => attr.attribute=='FuCoXAHtiTN')
          tei.enrollments.forEach((enrollment) => {
            enrollment.events.forEach((event) => {
              if (event.eventDate) {
                const eventDate = event.eventDate.split("T")[0];
                if (!prevDate) prevDate = eventDate;

                if (
                  event.dataValues.length &&
                  new Date(prevDate) <= new Date(eventDate)
                ) {
                  orgUnitId = event.orgUnit;
                  currEvent = event.dataValues;
                  prevDate = eventDate;
                }
              }
            });
          });
          events.push({ orgUnitId, teiFacility, currEvent });
        });

        //Getting facility group ou list and dataElement available ou and ou count with facilityCode
        var deValues = {};
        var facilityGroupList = {}
        events.forEach((ev) => {
          var eventFacility = 'notFilled'; // named notFilled to check if facility is completely filled or not
          if(ev.teiFacility) eventFacility = ev.teiFacility.value;
          if(!facilityGroupList[eventFacility]) facilityGroupList[eventFacility] = [];
          facilityGroupList[eventFacility].push(ev.orgUnitId);

            ev.currEvent.forEach((dv) => {
              if (!deValues[dv.dataElement])
                deValues[dv.dataElement] = {
                  count: 0,
                  facilities: {},
                  availableOrgUnits: []
                };
              if (deCodeVal[dv.dataElement] && deCodeVal[dv.dataElement].includes(dv.value)) {
                deValues[dv.dataElement]["count"]++;
                deValues[dv.dataElement]['facilities'][eventFacility] = true;
                deValues[dv.dataElement]['availableOrgUnits'].push(ev.orgUnitId);
              } 
            })
        });

        //Inserting values of the data element in the data element list
        var modifiedDataElements = deList.map((de) => {
          if (deValues[de.id]) {
          return {
              ...de,
              ...deValues[de.id]
              }
          }
          return {
              ...de,
              count: 0,
              facilities: {},
              availableOrgUnits: []
          }
        });

        //We have facility group list and data elements with values inserted list
        setFacilityList(facilityGroupList)
        setDataElements(modifiedDataElements);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        {" "}
        <CircularLoader />{" "}
      </div>
    );
  }
  return (
    <div className="scroll">
      <table className="table">
        <thead className="header">
          <tr>
            <th
              style={{
                background: "rgb(44, 102, 147)",
                color: "white",
                border: "0",
              }}
              className="text-center"
              colSpan={6}
            >
              IPHS Dashboard
            </th>
          </tr>
          <tr>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              State Name:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {stateName}
            </th>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              District:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {districtName}
            </th>
          </tr>
          <tr>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              Category:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {category ? category.name : ""}
            </th>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              Sub Category:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {subCategory ? subCategory.name : ""}
            </th>
          </tr>
          <tr>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              Main Head:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {head ? head.name : ""}
            </th>
            <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
              Sub Head:
            </th>
            <th
              style={{ background: "rgb(178, 223, 219)", border: "0" }}
              colSpan={2}
            >
              {subHead ? subHead.name : "ALL"}
            </th>
          </tr>
          <tr>
            <th colSpan={6} style={{ border: "0" }}></th>
          </tr>
          <tr>
            <th style={{ background: "#d1d1d1", border: "0" }}>S.No.</th>
            <th style={{ background: "#d1d1d1", border: "0" }}>Questions</th>
            <th
              style={{ background: "#d1d1d1", border: "0" }}
              className="text-center"
            >
              Total Facilities Assessed
            </th>
            <th
              style={{ background: "#d1d1d1", border: "0" }}
              className="text-center"
            >
              Available
            </th>
            <th
              style={{ background: "#d1d1d1", border: "0" }}
              className="text-center"
            >
              Gap
            </th>
            <th
              style={{ background: "#d1d1d1", border: "0" }}
              className="text-center"
            >
              % Gap
            </th>
          </tr>
        </thead>
        <tbody>
          {dataElements.map((de, index) => {
            var totalFacilities = 0;
            var availableFacility = de.availableOrgUnits;
            var unAvailableFacility = []
            for(let facility in de.facilities) {
              totalFacilities += facilityList[facility].length;
              facilityList[facility].map(orgUnit => {
                if(!de.availableOrgUnits.includes(orgUnit)) {
                  unAvailableFacility.push(orgUnit);
                }
              })
            }
            const gap = de.count
              ? totalFacilities - de.count
              : totalFacilities
              ? totalFacilities
              : 0;
            const gapPercent =
              gap &&
              totalFacilities &&
              gap / totalFacilities &&
              gap / totalFacilities !== "Infinity"
                ? ((gap / totalFacilities) * 100).toFixed(2)
                : "";
            const colorCodes = {
              green: "#B2FBA5",
              orange: "#FF964F",
              red: "#FF746C",
            };
            var currColor = "";
            if (gapPercent <= 20) currColor = colorCodes["green"];
            else if (gapPercent > 20 && gapPercent <= 50)
              currColor = colorCodes["orange"];
            else if (gapPercent > 50) currColor = colorCodes["red"];

            if (gapPercent == 100 && gap) currColor = colorCodes["red"];
            else if (gapPercent == 100 && !gap) currColor = colorCodes["green"];

            return (
              <tr>
                <td>{index + 1}</td>
                <td>{de.name}</td>
                <td className="text-center">{totalFacilities}</td>
                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      setQuestion(de.name);
                      setAvailability("Available");
                      setOrgUnits(availableFacility);
                      setDisplayModal(true);
                    }}
                  >
                    {de.count ? de.count : 0}
                  </button>
                </td>

                <td className="text-center">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      setQuestion(de.name);
                      setAvailability("Not available");
                      setOrgUnits(unAvailableFacility);
                      setDisplayModal(true);
                    }}
                  >
                    {gap}
                  </button>
                </td>
                <td
                  className="text-center"
                  style={{ background: `${currColor}` }}
                >
                  {gapPercent}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {displayModal && (
        <Modal
          category={category}
          subCategory={subCategory}
          head={head}
          subHead={subHead}
          question={question}
          orgUnits={orgUnits}
          availability={availability}
          handleDisplay={handleDisplay}
        />
      )}
    </div>
  );
};

export default Sheet;

import React, { useState, useEffect } from "react";
import "./styles.scss";

import { CircularLoader } from "@dhis2/ui";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal.component";
import { ValueColorChecker } from "../../utils/calculateLogic";
import { COLOR_PARAMETER, falseyValues } from "../../utils/constant";

const Sheet = React.memo(() => {
  const [districtName, setDistrictName] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [popupData, setPopupData] = useState({});

  const { clickedOU, state, district, block } = useSelector((state) => state.outree);
  const { categoryId, subCategoryId, headId, subHeadId, status, subGroupId } = useSelector((state) => state.main);


  const handleDisplay = (bool) => setDisplayModal(bool);
  const { dashboardList = [] } = useSelector((state) => state.main)

  if (status) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <CircularLoader />
      </div>
    );
  }

  return (
    <>
      <div class="card text-center position-static" id = "printing">
        <div class="card-header">IPHS Dashboard</div>
        <div class="card-body p-0" >
          <table class="table table-bordered mb-0">
            <tbody>
              <tr>
                <th style={{ textAlign: 'left' }} scope="row">State</th>
                <td style={{ textAlign: 'left' }}> <small>{clickedOU?.name || ''}</small></td>
                <th style={{ textAlign: 'left' }} scope="row">District</th>
                <td style={{ textAlign: 'left' }}> <small>{districtName}</small></td>
                <th style={{ textAlign: 'left' }} scope="row">Category</th>
                <td style={{ textAlign: 'left' }}> <small>{categoryId?.name || ""}</small></td>
                <th style={{ textAlign: 'left' }} scope="row">Sub Category</th>
                <td style={{ textAlign: 'left' }}> <small>{subCategoryId?.name || ""}</small></td>
              </tr>
              <tr>
                <th style={{ textAlign: 'left' }} scope="row">Main Head</th>
                <td style={{ textAlign: 'left' }}> <small>{headId?.name || ""}</small></td>
                <th style={{ textAlign: 'left' }} scope="row">Sub Group</th>
                <td style={{ textAlign: 'left' }}> <small>{subGroupId?.name || ''}</small></td>
                <th style={{ textAlign: 'left' }} scope="row">Sub Head</th>
                <td style={{ textAlign: 'left' }} colspan="3"> <small>{subHeadId?.name || ""}</small></td>
              </tr>
            </tbody>
          </table>
          <div  className="">
            <table class="table table-bordered mt-2">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Questions</th>
                  <th scope="col">Total Facilities Assessed</th>
                  <th scope="col">Available</th>
                  {/* <th scope="col">Gap</th> */}
                  <th scope="col">% Gap</th>
                </tr>
              </thead>
              <tbody>
                {dashboardList ? dashboardList?.map((list, i) => {
                  const avalable = parseFloat(list.total - list.gap)
                  const checker = new ValueColorChecker({ ...COLOR_PARAMETER, gap: !falseyValues.includes(list.gap) });
                  const percent = ((list.gap / list.total) / 100).toFixed(2)

                  return <tr id={list.id}>
                    <td><small>{i + 1}</small></td>
                    <td style={{ textAlign: 'left' }}><small>{list.name}</small></td>
                    <td><small>{list.total}</small></td>
                    <td><button
                      type="button"
                      onClick={() => {
                        setPopupData({
                          question: list.name,
                        })
                        setDisplayModal(true);
                      }}
                      className="btn btn-outline-success btn-sm"><small>{avalable}</small>
                    </button>
                    </td>
                    <td><button
                      type="button"
                      onClick={() => {
                        setPopupData({
                          question: list.name,
                        })
                        setDisplayModal(true);
                      }}
                      className="btn btn-outline-warning btn-sm"><small>{list.gap}</small>
                    </button>
                    </td>

                    <td style={{ background: checker.getColor(percent) }}><small>{percent}</small></td>

                  </tr>
                }) : ''}
              </tbody>

            </table>
          </div >
          {dashboardList?.length == 0 ? <div colSpan={6} class="text-center " style={{ background: '#fff3cd' }} role="alert">
            No records found!
          </div> : ''}
        </div>

        <div class="card-footer text-muted">....</div>
      </div>

      {displayModal && (
        <Modal
          popupData={popupData}
          // orgUnits={orgUnits}
          handleDisplay={handleDisplay}
        />
      )}
    </>


  )

  // return (
  //   <div className="scroll">
  //     <table className="table">
  //       <thead className="header">
  //         <tr>
  //           <th
  //             style={{
  //               background: "rgb(44, 102, 147)",
  //               color: "white",
  //               border: "0",
  //             }}
  //             className="text-center"
  //             colSpan={6}
  //           >
  //             IPHS Dashboard
  //           </th>
  //         </tr>
  //         <tr>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             State Name:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {stateName}
  //           </th>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             District:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {districtName}
  //           </th>
  //         </tr>
  //         <tr>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             Category:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {category ? category.name : ""}
  //           </th>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             Sub Category:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {subCategory ? subCategory.name : ""}
  //           </th>
  //         </tr>
  //         <tr>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             Main Head:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {head ? head.name : ""}
  //           </th>
  //           <th style={{ background: "rgb(178, 223, 219)", border: "0" }}>
  //             Sub Head:
  //           </th>
  //           <th
  //             style={{ background: "rgb(178, 223, 219)", border: "0" }}
  //             colSpan={2}
  //           >
  //             {subHead ? subHead.name : "ALL"}
  //           </th>
  //         </tr>
  //         <tr>
  //           <th colSpan={6} style={{ border: "0" }}></th>
  //         </tr>
  //         <tr>
  //           <th style={{ background: "#d1d1d1", border: "0" }}>S.No.</th>
  //           <th style={{ background: "#d1d1d1", border: "0" }}>Questions</th>
  //           <th
  //             style={{ background: "#d1d1d1", border: "0" }}
  //             className="text-center"
  //           >
  //             Total Facilities Assessed
  //           </th>
  //           <th
  //             style={{ background: "#d1d1d1", border: "0" }}
  //             className="text-center"
  //           >
  //             Available
  //           </th>
  //           <th
  //             style={{ background: "#d1d1d1", border: "0" }}
  //             className="text-center"
  //           >
  //             Gap
  //           </th>
  //           <th
  //             style={{ background: "#d1d1d1", border: "0" }}
  //             className="text-center"
  //           >
  //             % Gap
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {dataElements.map((de, index) => {
  //           var totalFacilities = 0;
  //           var availableFacility = de.availableOrgUnits;
  //           var unAvailableFacility = []
  //           if (!Object.keys(de.facilities).length) {
  //             for (let facility in facilityList) {
  //               totalFacilities += facilityList[facility].length;
  //               facilityList[facility].map(orgUnit => {
  //                 if (!de.availableOrgUnits.includes(orgUnit)) {
  //                   unAvailableFacility.push(orgUnit);
  //                 }
  //               })
  //             }
  //           } else {
  //             for (let facility in de.facilities) {
  //               totalFacilities += facilityList[facility].length;
  //               facilityList[facility].map(orgUnit => {
  //                 if (!de.availableOrgUnits.includes(orgUnit)) {
  //                   unAvailableFacility.push(orgUnit);
  //                 }
  //               })
  //             }
  //           }
  //           const gap = de.count
  //             ? totalFacilities - de.count
  //             : totalFacilities
  //               ? totalFacilities
  //               : 0;
  //           const gapPercent =
  //             gap &&
  //               totalFacilities &&
  //               gap / totalFacilities &&
  //               gap / totalFacilities !== "Infinity"
  //               ? ((gap / totalFacilities) * 100).toFixed(2)
  //               : "";
  //           const colorCodes = {
  //             green: "#B2FBA5",
  //             orange: "#FF964F",
  //             red: "#FF746C",
  //           };
  //           var currColor = "";
  //           if (gapPercent <= 20) currColor = colorCodes["green"];
  //           else if (gapPercent > 20 && gapPercent <= 50)
  //             currColor = colorCodes["orange"];
  //           else if (gapPercent > 50) currColor = colorCodes["red"];

  //           if (gapPercent == 100 && gap) currColor = colorCodes["red"];
  //           else if (gapPercent == 100 && !gap) currColor = colorCodes["green"];

  //           return (
  //             <tr>
  //               <td>{index + 1}</td>
  //               <td>{de.name}</td>
  //               <td className="text-center">{totalFacilities}</td>
  //               <td className="text-center">
  //                 <button
  //                   type="button"
  //                   className="btn btn-success"
  //                   onClick={() => {
  //                     setQuestion(de.name);
  //                     setAvailability("Available");
  //                     setOrgUnits(availableFacility);
  //                     setDisplayModal(true);
  //                   }}
  //                 >
  //                   {de.count ? de.count : 0}
  //                 </button>
  //               </td>

  //               <td className="text-center">
  //                 <button
  //                   type="button"
  //                   className="btn btn-warning"
  //                   onClick={() => {
  //                     setQuestion(de.name);
  //                     setAvailability("Not available");
  //                     setOrgUnits(unAvailableFacility);
  //                     setDisplayModal(true);
  //                   }}
  //                 >
  //                   {gap}
  //                 </button>
  //               </td>
  //               <td
  //                 className="text-center"
  //                 style={{ background: `${currColor}` }}
  //               >
  //                 {gapPercent}
  //               </td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //     {displayModal && (
  //       <Modal
  //         category={category}
  //         subCategory={subCategory}
  //         head={head}
  //         subHead={subHead}
  //         question={question}
  //         orgUnits={orgUnits}
  //         availability={availability}
  //         handleDisplay={handleDisplay}
  //       />
  //     )}
  //   </div>
  // );
})

export default Sheet;

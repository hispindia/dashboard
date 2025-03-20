import React, { memo, useEffect, useState } from "react";
import "./Modal.style.scss";
import { useSelector } from "react-redux";
import { downloadPDF, exportToExcel } from "../../utils/export";
import { excelIcon, pdfIcon } from "../../imgicon";
import { Button } from "../Button";
import { fetchAvalableRecords } from "../../store/main/main.action";
import { CircularLoader } from "@dhis2-ui/loader";


const Modal = ({ orgUnits = [], handleDisplay, popupData }) => {
  const { question, subOu, type } = popupData;

  const { clickedOU, state, district, block } = useSelector((state) => state.outree);

  const { categoryId, subCategoryId, headId, subHeadId, status, subGroupId } = useSelector((state) => state.main);
  const { programStageId = null } = headId;

  const [avalableRecords, setAvalableRecords] = useState([])
  const [loder, setLoder] = useState(false)

  useEffect(() => {
    (async () => {
      let categorys = "";

      if (categoryId.value != "all") {
        if (Object.keys(categoryId).length) {
          categorys = `&dimension=${programStageId}.FuCoXAHtiTN:IN:${categoryId.code}`;
          if (Object.keys(subCategoryId).length && subCategoryId.value != "all") categorys += `&dimension=${programStageId}.MvZuYsmwW1k:IN:${subCategoryId.code}`;
        }
      }

      setLoder(true)
      const listRes = await fetchAvalableRecords(
        headId.value,
        type,
        clickedOU.id,
        { [subOu]: {} },
        programStageId,
        categorys
      );

      setAvalableRecords(listRes);
      setLoder(false)
    })()
  }, [])



  var date = new Date();
  date = `${('00' + date.getDate()).slice(-2)}-${('00' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;

  return (
    <div className="modal-container">
      <div className="modal-info border border-2 ">
        <div id="printing1" className="scroll">

          <table className="table table-font-size" >
            <thead className="header">
              <tr>
                <th className={"text-center"} style={{ background: "rgb(178, 223, 219)", border: "0px" }} colSpan={4}>
                  IPHS Line Listing - {type} <br />
                  Report as on {date}
                </th>
              </tr>
              <tr>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Category: {categoryId.name || ''}</th>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Sub-Category: {subCategoryId.name || ''}</th>
              </tr>
              <tr>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Head: {headId.name || ''}</th>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Head: {subGroupId.name || ''}</th>
              </tr>
              <tr>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Sub-Head: {subHeadId.name || ''}</th>
                <th style={{ background: "rgb(209, 209, 209)", border: '0px' }} colSpan={2}>Question: {question}</th>
              </tr>
              <tr>
                <th >S.No.</th>
                <th >State-District-Block</th>
                <th >Facility Name</th>
                <th > Value</th>
              </tr>
            </thead>
            <tbody>
              {loder ?
                <div className="d-flex align-items-center justify-content-center">
                  <CircularLoader />
                </div>

                : avalableRecords.map((aval, index) => {
                  return <tr id={aval.id}>
                    <td>{index + 1}</td>
                    <td>{aval.ounamehierarchy || ''}</td>
                    <td>{aval.ounamehierarchy.split(' / ')[aval.ounamehierarchy.split(' / ').length - 1] || ''}</td>
                    <td>{aval.value || ''}</td>
                  </tr>

                })
              }
            </tbody>
          </table>

        </div>
        <div className="modal-foot d-flex justify-content-between align-items-center mx-2 gap-2">

          {/* <Button
            className="btn btn-secondary btn-light btn-sm mx-2"
            data-dismiss="modal"
            onClick={() => downloadPDF("printing1")}
          >
            <img width="30" height="30"
              src={pdfIcon}
              alt="pdf"
            />
          </Button> */}
          <Button
            data-dismiss="modal"
            onClick={() => exportToExcel("printing1")}
          >
            <img width="30" height="30"
              src={excelIcon}
              alt="ms-excel"
            />
          </Button>

          <Button
            data-dismiss="modal"
            onClick={() => handleDisplay(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );

};

export default memo(Modal);


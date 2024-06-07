import React from "react";
import "./Modal.style.scss";
import { useSelector } from "react-redux";

const Modal = ({category, subCategory, head, subHead, question, orgUnits, availability, handleDisplay }) => {

  var date = new Date();
  date = `${('00' + date.getDate()).slice(-2)}-${('00' +date.getMonth()).slice(-2)}-${date.getFullYear()}`;
  const ouList = useSelector((state) => state.outree.ouList);

  return (
    <div className="modal-container">
    <div className="modal-info border border-2 ">
      <div className="scroll">
        <table className="table">
          <thead className="header">
            <tr>
              <th className={"text-center"} style={{background: "rgb(178, 223, 219)", border: "0px"}} colSpan={4}>
                IPHS Line Listing <br/>
                Report as on {date}
                </th>
            </tr>
            <tr>
              <th  style={{background: "rgb(209, 209, 209)", border: "0px"}} colSpan={2}>Category: {category && category.name}</th>
              <th  style={{background: "rgb(209, 209, 209)", border: "0px"}} colSpan={2}>Sub-Category: {subCategory && subCategory.name}</th>
            </tr>
            <tr>
              <th  style={{background: "rgb(209, 209, 209)", border: "0px"}} colSpan={2}>Head: {head && head.name}</th>
              <th  style={{background: "rgb(209, 209, 209)", border: "0px"}} colSpan={2}>Sub-Head: {subHead && subHead.name}</th>
            </tr>
            <tr>
            <th  style={{background: "rgb(209, 209, 209)", border: "0px"}} colSpan={4}>Question: {question}</th>
            </tr>
            <tr>
            <th >S.No.</th>
            <th >State-District-Block</th>
            <th >Facility Name</th>
            </tr>
          </thead>
          <tbody>
            {
              orgUnits.map((orgUnit, index) => {
                const ouData = ouList.find(ou => ou.id == orgUnit);

                return <tr>
                <td>{index+1}</td>
                <td>{ouData ? ouData.path: ''}</td>
                <td>{ouData ? ouData.name: ''}</td>
                </tr>
              
              })
            }
          </tbody>
        </table>

      </div>
      <div className="modal-foot">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={() => handleDisplay(false)}
        >
          Close
        </button>
      </div>
    </div>

    </div>
  );
};

export default Modal;

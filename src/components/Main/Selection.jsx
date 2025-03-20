import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  setCategoryId,
  setStatus,
  setSubCategoryId,
  setSubHeadId,
  setHeadId,
  setHeadGroupId,
  fetchDashboardRecords,
  createAction,
} from "../../store/main/main.action";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {
  setSubCategoriesList,
  setSubGroup,
  setSubHead,
} from "../../store/metaData/metaData.action";
import { MAIN_ACTION_TYPES } from "../../store/main/main.reducer";
import { downloadPDF, exportToExcel } from "../../utils/export";
import { excelIcon, pdfIcon } from "../../imgicon";
import { Button } from "../Button";
import { CUSTOM_SERVICE_FILTER, MAIN_HEAD_FILTER } from "../../utils/constant";


const Selection = () => {
  const dispatch = useDispatch();

  const { clickedOU, state, district, block } = useSelector((state) => state.outree);
  const {
    subHeadList,
    headList,
    subGroupList,
    categoriesList,
    subCategoriesList,
    dataElementGroups,
  } = useSelector((state) => state.metadata);

  const { categoryId, subCategoryId, headId, subHeadId, status, subGroupId } = useSelector((state) => state.main);
  const { programStageId = null } = headId;

  const handleCategory = (e) => {
    const [value, name, code] = e.target.value.split("_");
    dispatch(setCategoryId({ name, value, code }));
    dispatch(setSubCategoryId({ name: "All", value: "all", code: null }));

    const category = categoriesList.find((data) => data.id == value);

    if (category && category?.options?.length) {
      const options = [{ id: "all", name: "ALL" }, ...category.options];
      dispatch(setSubCategoriesList(options));
    } else dispatch(setSubCategoriesList([]));


    const head = headList.find((head) => head.id == headId.value);
    const headCodePart = head.code;

    let dataElements = dataElementGroups.filter((group) => {
      return group?.code
        ?.toLowerCase()
        ?.includes(headCodePart?.toLowerCase());
    });

    dataElements = dataElements.sort((a, b) => a?.name?.localeCompare(b?.name));


    if (MAIN_HEAD_FILTER.includes(headId.value)) {
      if (value == 'all') {
        dispatch(setSubGroup([...dataElements]));
        dispatch(setSubHeadId({}));
        dispatch(setSubHead([]));
      } else {
        let filtered = []
        if (CUSTOM_SERVICE_FILTER.includes(headId.value)) filtered = dataElements.filter((data) => data.code.split('_')[0] == code);
        else filtered = dataElements.filter((data) => data.name.split('-').at(-1) == code);
        dispatch(setSubGroup([...filtered]));
        dispatch(setSubHeadId({}));
        dispatch(setSubHead([]));
      }
    } else {
      let filtered = []
      if (CUSTOM_SERVICE_FILTER.includes(value)) dataElements.filter(item => item.code.split('_')[0] == headCodePart);
      else filtered = dataElements.filter(item => item.name.split('_')[0].toLowerCase().includes(headCodePart.toLowerCase()));
      dispatch(setSubGroup([...filtered]));
      dispatch(setSubHeadId({}));
      dispatch(setSubHead([]));
    }
  };

  const handleSubCategory = (e) => {
    const [value, name, code] = e.target.value.split("_");
    dispatch(setSubCategoryId({ name, value, code }));
  };

  const handleHead = (e) => {
    const [value, name, programStageId] = e.target.value.split("_");
    dispatch(setHeadId({ name, value, programStageId }));
    dispatch(setHeadGroupId({ name: "", value: null }));
    dispatch(setSubHeadId({ name: "", value: null }));

    if (dataElementGroups.length) {
      const head = headList.find((head) => head.id == value);
      if (head) {
        const headCodePart = head.code;

        let dataElements = dataElementGroups.filter((group) => {
          return group?.code
            ?.toLowerCase()
            ?.includes(headCodePart?.toLowerCase());
        });

        dataElements = dataElements.sort((a, b) => a?.name?.localeCompare(b?.name));


        if (categoryId?.value !== 'all') {
          if (MAIN_HEAD_FILTER.includes(value)) {
            const filtered = dataElements.filter((data) => data.name.split('-').at(-1) == categoryId?.code);
            dispatch(setSubGroup([...filtered]));
            dispatch(setSubHeadId({}));
            dispatch(setSubHead([]));
          } else {
            let filtered = []
            if (CUSTOM_SERVICE_FILTER.includes(value)) filtered = dataElements.filter(item => item.code.split('_')[0] == headCodePart);
            else filtered = dataElements.filter(item => item.name.split('_')[0].toLowerCase().includes(headCodePart.toLowerCase()));

            dispatch(setSubGroup([...filtered]));
            dispatch(setSubHeadId({}));
            dispatch(setSubHead([]));
          }
        } else {
          let filtered = []
          if (CUSTOM_SERVICE_FILTER.includes(value)) filtered = dataElements.filter(item => item.code.split('_')[0] == headCodePart);
          else filtered = dataElements.filter(item => item.name.split('_')[0].toLowerCase().includes(headCodePart.toLowerCase()));

          // const filtered = dataElements.filter(item => item.name.split('_')[0].toLowerCase().includes(headCodePart.toLowerCase()));
          dispatch(setSubGroup([...filtered]));
          dispatch(setSubHeadId({}));
          dispatch(setSubHead([]));
        }
        // dispatch(setSubHead([]));
      } else {
        dispatch(setSubGroup([]));
        dispatch(setSubHead([]));
      }
    }
  };



  const handleSubGroup = (e) => {
    const [value, name] = e.target.value.split("*");
    dispatch(setHeadGroupId({ name, value }));
    dispatch(setSubHeadId({ name: "ALL", value: "all" }));

    if (subGroupList.length) {
      for (const group of subGroupList) {
        if (group.id == value) {
          dispatch(
            setSubHead([
              { id: "all", name: "ALL", dataElements: group.dataElements },
              ...group.dataElements,
            ])
          );
          return;
        }
      }
    } else dispatch(setSubHead([]));

  };

  const handleSubHead = (e) => {
    const [value, name] = e.target.value.split(/_(.+)/);
    dispatch(setSubHeadId({ name, value }));
  };

  const handleFormSubmit = async () => {
    if (subGroupId.value == "all") return alert("Please select a sub group field");
    if (Object.keys(subHeadId).length == 0) return alert("Please select a sub head field");

    dispatch(setStatus(true));
    let subProgramIds = {};
    let categorys = "";
    console.trace(categoryId);

    // if (MAIN_HEAD_FILTER.includes(headId.value)) {
    if (categoryId.value != "all") {
      if (Object.keys(categoryId).length) {
        categorys = `&dimension=${programStageId}.FuCoXAHtiTN:IN:${categoryId.code}`;
        if (Object.keys(subCategoryId).length && subCategoryId.value != "all") categorys += `&dimension=${programStageId}.MvZuYsmwW1k:IN:${subCategoryId.code}`;
      }
    }
    // }

    if (subHeadId?.value == "all") {
      const headEle = [...subHeadList]; // Removes the first element
      headEle?.shift();

      subProgramIds = headEle?.reduce((acc, item) => {
        acc[item.id] = {
          name: item.name,
          total: 0,
          gap: 0,
        }; // Use `item.id` as the key
        return acc;
      }, {});
    } else subProgramIds[subHeadId.value] = {
      total: 0,
      gap: 0,
      name: subHeadId.name,
    };

    const listRes = await fetchDashboardRecords(
      headId.value,
      clickedOU.id,
      subProgramIds,
      programStageId,
      categorys
    );
    dispatch(createAction(MAIN_ACTION_TYPES.FETCH_DASHBOARD_LIST, listRes));

    dispatch(setStatus(false));
  };

  return (
    <div className="">
      {clickedOU && clickedOU.level != 5 && clickedOU.level != 6 ? (
        <Row>
          <Col md={9} lg={4} className="pt-2">
            Category
            <Form.Select
              value={
                categoryId?.value +
                "_" +
                categoryId?.name +
                "_" +
                categoryId?.code
              }
              onChange={handleCategory}
            >
              {categoriesList.map((attr, i) => (
                <option
                  key={attr.id}
                  value={attr.id + "_" + attr.name + "_" + attr.code}
                >
                  {attr.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={9} lg={4} className="pt-2">
            Sub Category
            <Form.Select
              value={
                subCategoryId?.value +
                "_" +
                subCategoryId?.name +
                "_" +
                subCategoryId?.code
              }
              onChange={handleSubCategory}
            >
              {subCategoriesList.map((subAttr, i) => (
                <option
                  key={subAttr.id}
                  value={subAttr.id + "_" + subAttr.name + "_" + subAttr.code}
                >
                  {subAttr.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={9} lg={4} className="pt-2">
            Main Head
            <Form.Select
              value={
                headId.value + "_" + headId.name + "_" + headId.programStageId
              }
              onChange={handleHead}
            >
              <option value="">Select</option>
              {headList.map((head) => (
                <option
                  key={head.id}
                  value={
                    head.id + "_" + head.name + "_" + head.programStages[0].id
                  }
                >
                  {head.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      ) : (
        ""
      )}

      <Row>
        <Col md={9} lg={4} className="py-2">
          Sub Group
          <Form.Select
            value={subGroupId.value + "*" + subGroupId.name}
            onChange={handleSubGroup}
          >
            <option value="">Select</option>
            {subGroupList.map((de, i) => (
              <option key={de.id} value={de.id + "*" + de.name}>
                {de.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={9} lg={4} className="py-2">
          Sub Head
          <Form.Select
            value={subHeadId.value + "_" + subHeadId.name}
            onChange={handleSubHead}
          >
            {subHeadList?.map((de, i) => (
              <option key={de.id} value={de.id + "_" + de.name}>
                {de.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={9} lg={4} className="pt-4 pb-2">
          <Row className="text-center">
            <Col md={6} lg={6}>
              <Button
                disabled={status}
                onClick={() => handleFormSubmit()}
              >
                {"Submit"}
              </Button>
            </Col>

            {/* <Col md={4} lg={4}>
              <Button
                disabled={status}
                onClick={() => downloadPDF("printing")}
              >
                <img
                  width="30"
                  height="28"
                  src={pdfIcon}
                  alt="pdf"
                />
              </Button>
            </Col> */}

            <Col md={6} lg={6}>
              <Button
                disabled={status}
                onClick={() => exportToExcel("printing")}
              >
                <img
                  width="30"
                  height="28"
                  src={excelIcon}
                  alt="ms-excel"
                />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  );
};

export default Selection;

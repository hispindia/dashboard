import React, { useState, useEffect } from "react";
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
import { setSubCategoriesList, setSubGroup, setSubHead } from "../../store/metaData/metaData.action";
import { MAIN_ACTION_TYPES } from "../../store/main/main.reducer";

const Selection = () => {
  const dispatch = useDispatch();
  const { clickedOU, state, district, block } = useSelector((state) => state.outree);
  const { subHeadList, headList, subGroupList, categoriesList, subCategoriesList, dataElementGroups } = useSelector((state) => state.metadata);
  const { categoryId, subCategoryId, headId, subHeadId, status, subGroupId } = useSelector((state) => state.main);
  const { programStageId = null } = headId


  const [modifiedCategories, setModifiedCategories] = useState([]);

  useEffect(() => {
    if (clickedOU && block) {
      const orgUnit = block.find((ou) => ou.id == clickedOU.id);
      if (orgUnit) {
        setModifiedCategories(
          categoriesList.filter(
            (category) => category.code != "SDH" && category.code != "DH"
          )
        );
      } else setModifiedCategories(categoriesList);
    }
  }, [clickedOU]);

  const handleCategory = (e) => {
    const [value, name, code] = e.target.value.split('_')
    dispatch(setCategoryId({ name, value, code }));
    dispatch(setSubCategoryId({ name: 'All', value: 'all', code: null }));

    const category = categoriesList.find((data) => data.id == value);

    if (category && category?.options?.length) {
      const options = [{ id: 'all', name: 'ALL' }, ...category.options]
      dispatch(setSubCategoriesList(options));
    } else dispatch(setSubCategoriesList([]));

  };

  const handleSubCategory = (e) => {
    const [value, name, code] = e.target.value.split('_')
    dispatch(setSubCategoryId({ name, value, code }));
  };

  const handleHead = (e) => {
    const [value, name, programStageId] = e.target.value.split('_')
    dispatch(setHeadId({ name, value, programStageId }));
    dispatch(setHeadGroupId({ name: '', value: null }));
    dispatch(setSubHeadId({ name: '', value: null }));

    if (dataElementGroups.length) {
      const head = headList.find((head) => head.id == value);
      if (head) {
        const headCodePart = head.code

        let dataElements = dataElementGroups.filter((group) => {
          return group?.code?.toLowerCase()?.includes(headCodePart.toLowerCase());
        });

        dataElements = dataElements.sort((a, b) => a.name.localeCompare(b.name));
        // dispatch(setSubGroup([{ id: 'all', name: 'ALL', dataElements }, ...dataElements]));
        dispatch(setSubGroup([...dataElements]));
        dispatch(setSubHead([]))
      } else {
        dispatch(setSubGroup([]))
        dispatch(setSubHead([]))
      }
    }
  };

  const handleSubGroup = (e) => {
    const [value, name] = e.target.value.split('_')
    dispatch(setHeadGroupId({ name, value }));
    dispatch(setSubHeadId({ name: 'ALL', value: 'all' }));

    if (subGroupList.length) {
      for (const group of subGroupList) {
        if (group.id == value) {
          dispatch(setSubHead([{ id: 'all', name: 'ALL', dataElements: group.dataElements }, ...group.dataElements]))
          return
        }
      }
    }
    else dispatch(setSubHead([]))
  }

  const handleSubHead = (e) => {
    const [value, name] = e.target.value.split(/_(.+)/);
    dispatch(setSubHeadId({ name, value }));
  };

  const handleFormSubmit = async () => {

    if (subGroupId.value == 'all') return alert('Please select a sub group field');

    dispatch(setStatus(true))
    let subProgramIds = {};
    let categorys = '';

    if (categoryId.value != 'all') {
      categorys = `&dimension=${programStageId}.FuCoXAHtiTN:IN:${categoryId.code}`
      if (subCategoryId.value != 'all') categorys += `&dimension=${programStageId}.MvZuYsmwW1k:IN:${subCategoryId.code}`
    }

    if (subHeadId.value == 'all') {
      const headEle = [...subHeadList]; // Removes the first element
      headEle?.shift()

      subProgramIds = headEle?.reduce((acc, item) => {
        acc[item.id] = {
          name: item.name,
          total: 0,
          gap: 0,
        } // Use `item.id` as the key
        return acc;
      }, {});
    } else subProgramIds[subHeadId.value] = {
      total: 0,
      gap: 0,
      name: subHeadId.name
    }

    const listRes = await fetchDashboardRecords(headId.value, clickedOU.id, subProgramIds, programStageId, categorys)
    dispatch(createAction(MAIN_ACTION_TYPES.FETCH_DASHBOARD_LIST, listRes))

    dispatch(setStatus(false))
  }

  return (
    <div className="">
      {clickedOU && clickedOU.level != 5 && clickedOU.level != 6 ? (
        <Row>

          <Col md={9} lg={4} className="pt-2">
            Category
            <Form.Select
              value={categoryId?.value + '_' + categoryId?.name + '_' + categoryId?.code}
              onChange={handleCategory}
            >
              {modifiedCategories.map((attr, i) => (
                <option key={attr.id} value={attr.id + "_" + attr.name + "_" + attr.code}>
                  {attr.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={9} lg={4} className="pt-2">
            Sub Category
            <Form.Select
              value={subCategoryId?.value + '_' + subCategoryId?.name + '_' + subCategoryId?.code}
              onChange={handleSubCategory}
            >
              {subCategoriesList.map((subAttr, i) => (
                <option key={subAttr.id} value={subAttr.id + "_" + subAttr.name + "_" + subAttr.code}>
                  {subAttr.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={4} lg={4} className="pt-2">
            Main Head
            <Form.Select
              value={headId.value + '_' + headId.name + "_" + headId.programStageId}
              onChange={handleHead}
            >
              <option value="">Select</option>
              {headList.map((head) => (
                <option key={head.id} value={head.id + "_" + head.name + "_" + head.programStages[0].id}>
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

        <Col md={4} lg={4} className="py-2">
          Sub Group
          <Form.Select
            value={subGroupId.value + '_' + subGroupId.name}
            onChange={handleSubGroup}
          >
            <option value="">Select</option>
            {
              subGroupList.map((de, i) => (
                <option key={de.id} value={de.id + "_" + de.name}>
                  {de.name}
                </option>
              ))
            }
          </Form.Select>
        </Col>

        <Col md={4} lg={4} className="py-2">
          Sub Head
          <Form.Select
            value={subHeadId.value + "_" + subHeadId.name}
            onChange={handleSubHead}
          >
            {
              subHeadList?.map((de, i) => (
                <option key={de.id} value={de.id + "_" + de.name}>
                  {de.name}
                </option>
              ))
            }
          </Form.Select>
        </Col>

        <Col md={4} lg={4} className="pt-4 pb-2">
          <div className="text-center">
            <button
              disabled={status}
              type="button"
              className={"btn btn-md"}
              style={{
                borderColor: "rgb(13, 71, 161)",
                background: "linear-gradient(rgb(21, 101, 192) 0%, rgb(6, 80, 163) 100%) rgb(43, 97, 179)",
                color: "rgb(255, 255, 255)",
                fill: "rgb(255, 255, 255)",
                fontWeight: "500",
                width: '100%'
              }}
              // onClick={() => dispatch(setStatus(true))}
              onClick={() => handleFormSubmit()}
            >
              {'Submit'}
            </button>

            <button
              disabled={status}
              type="button"
              className={"btn btn-md"}
              onClick={() => handleDownloadPdf()}
            >
            {<img width="46" height="46" src="https://img.icons8.com/color/46/pdf.png" alt="pdf"/>}
            </button>
            <button
              disabled={status}
              type="button"
              className={"btn btn-md"}
              onClick={() => handleDownloadExcel()}
            >
            {<img width="48" height="48" src="https://img.icons8.com/color/48/ms-excel.png" alt="ms-excel"/>}
            </button>

          </div>
        </Col>
      </Row>
      {/* <div className="text-center">
        <button
          type="button"
          className={"btn btn-md"}
          style={{
            borderColor: "rgb(13, 71, 161)",
            background: "linear-gradient(rgb(21, 101, 192) 0%, rgb(6, 80, 163) 100%) rgb(43, 97, 179)",
            color: "rgb(255, 255, 255)",
            fill: "rgb(255, 255, 255)",
            fontWeight: "500"
          }}
          onClick={() => dispatch(setStatus(true))}
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default Selection;

import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setStatus,
  setSubCategories,
  setSubCategoryId,
  setSubHeadId,
  setSubHeads,
  setHeadId,
} from "../../store/main/main.action";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Selection = ({
  clickedOU,
  block,
  headList, 
  categoriesList,
  subCategoriesList,
  dataElementGroups,
  subHeads,
  subCategories,
  categoryId,
  subCategoryId,
  headId,
  subHeadId
}) => {
  const dispatch = useDispatch();


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

  useEffect(() => {
    if (categoryId && headId && dataElementGroups.length) {
      if (categoryId== "all") {
        const hasDe = {}
        var dataElements = [];
        dataElementGroups.forEach(group => group.dataElements.forEach(de => {
          if(!hasDe[de.id]) {
            dataElements.push(de);
            hasDe[de.id] = true;
          }
        }))
        dataElements = dataElements.sort((a,b)=> a.name.localeCompare(b.name))
        dispatch(setSubHeads([{id:'all',name: 'ALL', dataElements}, ...dataElements]));
        dispatch(setSubHeadId('all'));
        dispatch(setSubCategoryId(''));
        dispatch(setSubCategories([]));
      } else {
        const category = categoriesList.find(category => category.id == categoryId);
        const head = headList.find(head => head.id == headId);
        var dataElementGroup = dataElementGroups.find(
          (deGroups) => deGroups.code == `${category.code}_${head.code}`
        );
        if (dataElementGroup) {
          dataElementGroup['dataElements'] = dataElementGroup.dataElements.sort((a,b)=> a.name.localeCompare(b.name))
          dispatch(setSubHeads([{id:'all',name: 'ALL', dataElements: dataElementGroup.dataElements},...dataElementGroup.dataElements]));
          dispatch(setSubHeadId('all'));
          
        }
        else dispatch(setSubHeads([]));
        
      }
    }
  }, [categoryId, headId, dataElementGroups]);

 const handleCategory = (e) => {
    const { value } = e.target;
    dispatch(setCategoryId(value));

    const category= categoriesList.find((data) => data.id == value);
    const subCategory = subCategoriesList.find((subCategory) => subCategory.code == category.code);
    if (subCategory && subCategory.options.length) {
      const options = [{id: 'all', name: 'ALL'}, ...subCategory.options]
      dispatch(setSubCategories(options));
      dispatch(setSubCategoryId('all'));
    } else {
      dispatch(setSubCategories([]));
      dispatch(setSubCategoryId(''));
    }
  };

  const handleSubCategory = (e) => {
    const { value } = e.target;
    dispatch(setSubCategoryId(value));
  };

  const handleHead = (e) => {
    const { value } = e.target;
    dispatch(setHeadId(value));
  };

  const handleSubHead = (e) => {
    const { value } = e.target;
    dispatch(setSubHeadId(value));
  };

  return (
    <>
      {clickedOU && clickedOU.level != 5 && clickedOU.level != 6 ? (
        <Row>
          <Col md={3} lg={1} className="py-3">
            Category:{" "}
          </Col>
          <Col md={9} lg={5} className="py-3">
            <Form.Select
            value={categoryId} 
            onChange={handleCategory}
            >
              {modifiedCategories.map((attr) => (
                <option key={attr.id} value={attr.id}>
                  {attr.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col md={3} lg={1} className="py-3">
            Sub Category:{" "}
          </Col>
          <Col md={9} lg={5} className="py-3">
            <Form.Select 
            value={subCategoryId}
            onChange={handleSubCategory}
            >
              {subCategories.map((attr) => (
                <option key={attr.id} value={attr.id}>
                  {attr.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      ) : (
        ""
      )}

      <Row>
        <Col md={3} lg={1} className="py-3">
          Main Head:
        </Col>
        <Col md={9} lg={5} className="py-3">
          <Form.Select 
          value={headId}
          onChange={handleHead}
          >
            {headList.map((head) => (
              <option key={head.id} value={head.id}>
                {head.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={3} lg={1} className="py-3">
          Sub Head:{" "}
        </Col>
        <Col md={9} lg={5} className="py-3">
          <Form.Select 
          value={subHeadId}
          onChange={handleSubHead}
          >
            {
              subHeads.map((de) => (
                <option key={de.id} value={de.id}>
                  {de.name}
                </option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>
      <div className="text-center">
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
      </div>
    </>
  );
};

export default Selection;

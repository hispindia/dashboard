import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Sheet from "./Sheet";
import Selection from "./Selection";
import Header from "../Header/Header.component";
import '../Header/Header.style.scss';

const Main = () => {
  const { clickedOU, state, district, block } = useSelector((state) => state.outree);

  const { subHeadList, headList, subGroupList, categoriesList, subCategoriesList, dataElementGroups } = useSelector((state) => state.metadata);

  const { categoryId, subCategoryId, headId, subHeadId, status, subGroupId } = useSelector((state) => state.main);

  return (
    <div className="ms-2 w-100">
      <Header />
      <div className="mt-3 input-section-content">
        <Selection
          subGroupId={subGroupId}
          subGroupList={subGroupList}
          clickedOU={clickedOU}
          block={block}
          headList={headList}
          categoriesList={categoriesList}
          subCategoriesList={subCategoriesList}
          dataElementGroups={dataElementGroups}
          subHeadList={subHeadList}
          categoryId={categoryId}
          subCategoryId={subCategoryId}
          headId={headId}
          subHeadId={subHeadId}
        />
      </div>
      {/* {status ? ( */}
      <Sheet
        status={status}
      // subGroupList={subGroupList}
      // clickedOU={clickedOU}
      // state={state}
      // district={district}
      // headList={headList}
      // categoriesList={categoriesList}
      // subCategoriesList={subCategoriesList}
      // dataElementGroups={dataElementGroups}
      // categoryId={categoryId}
      // subCategoryId={subCategoryId}
      // headId={headId}
      // subHeadId={subHeadId}
      // subGroupId={subGroupId}
      // subHeadList={subHeadList}
      />
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default Main;

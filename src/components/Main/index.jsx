import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Sheet from "./Sheet";
import Selection from "./Selection";
import Header from "../Header/Header.component";

const Main = () => {
  const clickedOU = useSelector((state) => state.outree.clickedOU);
  const state = useSelector((state) => state.outree.state);
  const district = useSelector((state) => state.outree.district);
  const block = useSelector((state) => state.outree.block);

  const headList = useSelector((state) => state.metadata.headList);
  const categoriesList = useSelector((state) => state.metadata.categoriesList);
  const subCategoriesList = useSelector(
    (state) => state.metadata.subCategoriesList
  );
  const dataElementGroups = useSelector(
    (state) => state.metadata.dataElementGroups
  );

  const subHeads = useSelector((state) => state.main.subHeads);
  const subCategories = useSelector((state) => state.main.subCategories);
  const categoryId = useSelector((state) => state.main.categoryId);
  const subCategoryId = useSelector((state) => state.main.subCategoryId);
  const headId = useSelector((state) => state.main.headId);
  const subHeadId = useSelector((state) => state.main.subHeadId);
  const status = useSelector((state) => state.main.status);

  return (
    <div className="ms-2 w-100">
      <Header />
      <div className="my-3">
        <Selection
          clickedOU={clickedOU}
          block={block}
          headList={headList}
          categoriesList={categoriesList}
          subCategoriesList={subCategoriesList}
          dataElementGroups={dataElementGroups}
          subHeads={subHeads}
          subCategories={subCategories}
          categoryId={categoryId}
          subCategoryId={subCategoryId}
          headId={headId}
          subHeadId={subHeadId}
        />
      </div>
      {status ? (
        <Sheet
          clickedOU={clickedOU}
          state={state}
          district={district}
          headList={headList}
          categoriesList={categoriesList}
          subCategoriesList={subCategoriesList}
          dataElementGroups={dataElementGroups}
          subHeads={subHeads}
          subCategories={subCategories}
          categoryId={categoryId}
          subCategoryId={subCategoryId}
          headId={headId}
          subHeadId={subHeadId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;

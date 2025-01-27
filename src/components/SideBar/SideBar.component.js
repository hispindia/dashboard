import React, { useState, useEffect } from "react";
import "./sideBar.style.scss";

import OrganisationUnitTree from "../OrganisationUnitTree";

import { useDispatch, useSelector } from "react-redux";
import {
  setBlock,
  setClickedOU,
  setDistrict,
  setOUList,
  setState,
  setUserOU,
} from "../../store/outree/outree.action";
import { setCategoriesList, setDataElementGroups, setHeadList, setSubCategoriesList } from "../../store/metaData/metaData.action";
import { setCategoryId, setStatus } from "../../store/main/main.action";
import { headListTiHode } from "../constants";

const SideBar = ({ data }) => {
  const dispatch = useDispatch();

  const selectedOU = useSelector((state) => state.outree.clickedOU);

  useEffect(() => {
    if (data) {
      if (data.ouList) {
        const ouName = {};
        data.ouList.organisationUnits.forEach(ou => ouName[ou.id] = ou.name);
        data.ouList.organisationUnits.forEach(orgUnit => orgUnit.path = orgUnit.path.split('/').map(ou => (ou ? ouName[ou] : '')).slice(1, orgUnit.path.split('/').length - 1).join('/'))

        dispatch(setOUList(data.ouList.organisationUnits));
      }
      if (data.me) {
        if (data.me.organisationUnits.length >= 2)
          data.me.organisationUnits = data.me.organisationUnits.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        dispatch(setUserOU(data.me.organisationUnits));
        dispatch(setClickedOU(data.me.organisationUnits[0]));
      }
      // if (data.programList) dispatch(setHeadList(data.programList?.programs?.filter(head=>!headListTiHode.includes(head.id))));
      if (data.programList) dispatch(setHeadList(data.programList?.programs?.filter(head=>!headListTiHode.includes(head.id))));
      if (data.state) dispatch(setState(data.state.organisationUnits));
      if (data.block) dispatch(setBlock(data.block.organisationUnits));
      if (data.district) dispatch(setDistrict(data.district.organisationUnits));
      if (data.dataElementGroupList) {
        dispatch(setDataElementGroups(data.dataElementGroupList.dataElementGroups))
      }
      if (data.cateogoryOptionSets) {
        const categories = data.cateogoryOptionSets.optionGroups;
        if (categories.length) {
          categories.unshift({ id: 'all', name: 'ALL', code: '' })
          dispatch(setCategoriesList(categories));
        }
      }
      // if (data.subCategoriesGroupList) {
      //   dispatch(setSubCategoriesList(data.subCategoriesGroupList?.options || []));
      // }
    }
  }, [data]);

  useEffect(() => {
    if (selectedOU) {
      dispatch(setStatus(false))
      // dispatch(setCategoryId('all'))
    }
  }, [selectedOU])

  return (
    <div className="side-bar stick-content mt-3">
      {selectedOU && (
        <>
          <input
            className="form-control"
            id="organisation-unit"
            disabled
            value={selectedOU.name}
          />
          <div>
            <OrganisationUnitTree />
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;

import { METADATA_ACTION_TYPES } from "./metaData.reducer";

export const setHeadList = (headList) => ({
  type: METADATA_ACTION_TYPES.SET_HEAD_LIST,
  payload: headList,
});

export const setCategoriesList = (categoriesList) => ({
  type: METADATA_ACTION_TYPES.SET_CATEGORIES_LIST,
  payload: categoriesList,
});

export const setSubCategoriesList = (subCategoriesList) => ({
  type: METADATA_ACTION_TYPES.SET_SUB_CATEGORIES_LIST,
  payload: subCategoriesList,
});

export const setDataElementGroups = (deGroups) => ({
  type: METADATA_ACTION_TYPES.SET_DATAELEMENT_GROUPS,
  payload: deGroups,
});


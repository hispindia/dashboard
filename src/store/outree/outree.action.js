import { OUTREE_ACTION_TYPES } from "./outree.reducer";

export const setUserOU = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_USER_OU,
  payload: ou,
});
export const setOUList = (ouList) => ({
  type: OUTREE_ACTION_TYPES.SET_OU_LIST,
  payload: ouList,
});

export const setClickedOU = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_CLICKED_OU,
  payload: ou,
});

export const setSearchedOU = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_SEARCHED_OU,
  payload: ou,
});

export const setFilteredOU = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_FILTERED_OU,
  payload: ou,
});

export const setSearchedOUList = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_SEARCHED_OU_LIST,
  payload: ou,
});

export const setState = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_STATE,
  payload: ou,
});

export const setDistrict = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_DISTRICT,
  payload: ou,
});

export const setBlock = (ou) => ({
  type: OUTREE_ACTION_TYPES.SET_BLOCK,
  payload: ou,
});

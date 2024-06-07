import { MAIN_ACTION_TYPES } from "./main.reducer";

export const setSubCategories = (subCategories) => ({
  type: MAIN_ACTION_TYPES.SET_SUB_CATEGORIES,
  payload: subCategories,
});

export const setSubHeads = (subHeads) => ({
  type: MAIN_ACTION_TYPES.SET_SUB_HEADS,
  payload: subHeads,
});

export const setStatus = (bool) => ({
  type: MAIN_ACTION_TYPES.SET_STATUS,
  payload: bool,
});

export const setCategoryId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_CATEGORY_ID,
  payload: id,
});

export const setSubCategoryId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_SUB_CATEGORY_ID,
  payload: id,
});

export const setHeadId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_HEAD_ID,
  payload: id,
});

export const setSubHeadId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_SUB_HEAD_ID,
  payload: id,
});

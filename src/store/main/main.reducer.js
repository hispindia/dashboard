export const MAIN_ACTION_TYPES = {
  SET_SUB_CATEGORIES: "SET_SUB_CATEGORIES",
  SET_SUB_HEADS: "SET_SUB_HEADS",
  SET_STATUS: "SET_STATUS",
  SET_CATEGORY_ID: "SET_CATEGORY_ID",
  SET_SUB_CATEGORY_ID: "SET_SUB_CATEGORY_ID",
  SET_HEAD_ID: "SET_HEAD_ID",
  SET_HEAD_GROUP_ID: "SET_HEAD_GROUP_ID",
  SET_SUB_HEAD_ID: "SET_SUB_HEAD_ID",
  FETCH_DASHBOARD_LIST: "FETCH_DASHBOARD_LIST",
};

export const INITIAL_STATE = {
  subHeads: [],
  subCategories: [],
  status: false,
  categoryId: {
    name: "All",
    value: "all"
  },
  subCategoryId: {
    name: "All",
    value: "all"
  },
  headId: {
    name: "All",
    value: "all"
  },
  subHeadId: {
    name: "All",
    value: "all"
  },
  subGroupId: {
    name: "All",
    value: "all"
  },
  dashboardList: {},
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAIN_ACTION_TYPES.SET_SUB_CATEGORIES:
      return { ...state, subCategories: payload, status: false };
    case MAIN_ACTION_TYPES.SET_SUB_HEADS:
      return { ...state, subHeads: payload, status: false };
    case MAIN_ACTION_TYPES.SET_CATEGORY_ID:
      return { ...state, categoryId: payload, status: false };
    case MAIN_ACTION_TYPES.SET_SUB_CATEGORY_ID:
      return { ...state, subCategoryId: payload, status: false };
    case MAIN_ACTION_TYPES.SET_HEAD_ID:
      return { ...state, headId: payload, status: false };
    case MAIN_ACTION_TYPES.SET_HEAD_GROUP_ID:
      return { ...state, subGroupId: payload, status: false };
    case MAIN_ACTION_TYPES.SET_SUB_HEAD_ID:
      return { ...state, subHeadId: payload, status: false };
    case MAIN_ACTION_TYPES.SET_STATUS:
      return { ...state, status: payload };
    case MAIN_ACTION_TYPES.FETCH_DASHBOARD_LIST:
      return { ...state, dashboardList: payload, status: false };
    default:
      return state;
  }
};

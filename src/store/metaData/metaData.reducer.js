export const METADATA_ACTION_TYPES = {
  SET_HEAD_LIST: "SET_HEAD_LIST",
  SET_CATEGORIES_LIST: "SET_CATEGORIES_LIST",
  SET_SUB_CATEGORIES_LIST: "SET_SUB_CATEGORIES_LIST",
  SET_DATAELEMENT_GROUPS: "SET_DATAELEMENT_GROUPS"
};

export const INITIAL_STATE = {
  categoriesList: [],
  subCategoriesList: [],
  headList: [],
  dataElementGroups: []
};

export const metaDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case METADATA_ACTION_TYPES.SET_HEAD_LIST:
      return { ...state, headList: payload };
      case METADATA_ACTION_TYPES.SET_CATEGORIES_LIST:
        return { ...state, categoriesList: payload };
        case METADATA_ACTION_TYPES.SET_SUB_CATEGORIES_LIST:
          return { ...state, subCategoriesList: payload };
          case METADATA_ACTION_TYPES.SET_DATAELEMENT_GROUPS:
            return { ...state, dataElementGroups: payload };
    default:
      return state;
  }
};

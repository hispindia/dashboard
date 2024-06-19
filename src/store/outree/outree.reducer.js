export const OUTREE_ACTION_TYPES = {
  SET_USER_OU: "SET_USER_OU",
  SET_CLICKED_OU: "SET_CLICKED_OU",
  SET_OU_CHILDREN: "SET_OU_CHILDREN",
  SET_ORGUNITS: "SET_ORGUNITS",
};

export const INITIAL_STATE = {
  userOU: null,
  clickedOU: null,
  ouChildren: [],
  orgUnits: [],
};

export const outreeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OUTREE_ACTION_TYPES.SET_USER_OU:
      return { ...state, userOU: payload };
    case OUTREE_ACTION_TYPES.SET_CLICKED_OU:
      return { ...state, clickedOU: payload };
    case OUTREE_ACTION_TYPES.SET_OU_CHILDREN:
      return { ...state, ouChildren: payload };
    case OUTREE_ACTION_TYPES.SET_ORGUNITS:
      return { ...state, orgUnits: payload };
    default:
      return state;
  }
};

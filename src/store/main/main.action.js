import { dashboardServices } from "../../services/api";
import { MAIN_ACTION_TYPES } from "./main.reducer";

export const createAction = (type, payload) => ({ type, payload });

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
export const setHeadGroupId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_HEAD_GROUP_ID,
  payload: id,
});

export const setSubHeadId = (id) => ({
  type: MAIN_ACTION_TYPES.SET_SUB_HEAD_ID,
  payload: id,
});

export const fetchDashboardRecords = async (type, ou, subProgramIds, programId, filter) => {
  const subIdKeys = [...Object.keys(subProgramIds)]
  let updateSubIds = subIdKeys.map(id => '&dimension=' + programId + '.' + id)

  let res = await dashboardServices.fetchRecords(type, ou, updateSubIds, programId, filter)

  if (res.status != 'ERROR') {
    let headerIndex = {}
    res.headers.forEach((head, index) => headerIndex[head.name] = index)

    res.rows.forEach(row => {
      subIdKeys.forEach(id => {
        subProgramIds[id] = {
          ...subProgramIds[id],
          total: res.height,
          // total: (subProgramIds[id].total + 1),
          gap: row[headerIndex[programId + '.' + id]] == '' ? (subProgramIds[id].gap + 1) : subProgramIds[id].gap,
        }
      })
    })
    return subProgramIds
  } else {
    alert(res.message)
    return {}
  }
}

export const fetchAvalableRecords = async (type, ou, subProgramIds, programId, filter) => {
  const subIdKeys = [...Object.keys(subProgramIds)]
  let updateSubIds = subIdKeys.map(id => '&dimension=' + programId + '.' + id)

  let res = await dashboardServices.fetchRecords(type, ou, updateSubIds, programId, filter)

  if (res.status != 'ERROR') {
    let id = subIdKeys[0]
    let headerIndex = {
      [programId + '.' + id]: 1,
      'ounamehierarchy': 1,

    }
    let collectedData = []

    res.headers.forEach((head, index) => {
      if (headerIndex[head.name]) {
        headerIndex[head.name] = index
      }
    })
    res.rows.forEach(row => {
      if (row[headerIndex[programId + '.' + id]] != '') {
        collectedData.push({
          ounamehierarchy: row[headerIndex['ounamehierarchy']],
          value: row[headerIndex[programId + '.' + id]],
        })
      }
    })
    return collectedData
  } else {
    alert(res.message)
    return []
  }
}

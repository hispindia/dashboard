
export const InitialQuery = {
  me: {
    resource: "me.json",
    params: {
      fields: ["id", "organisationUnits[id,name,level,code,path,children[id,name]]"],
    },
  },
  orgUnitGroup: {
    resource: "organisationUnitGroups/NsvQiBH9aUB.json",
    params: {
      fields: ["id",'name','organisationUnits[id,name,level,children]'],
      paging:false
    },
  }
};
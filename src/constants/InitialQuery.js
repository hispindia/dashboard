export const InitialQuery = {
    me: {
      resource: "me.json",
      params: {
        fields: ["id", "organisationUnits[id,name,code,path]"],
      },
    },
    ouList: {
      resource: "organisationUnits.json",
      params: {
        fields: ["id,name,code,path,children[id,name]"],
        withinUserHierarchy: true,
        paging: false,
      },
    },
    ouGroups: {
      resource: "organisationUnitGroups.json",
      params: {
        fields:["id,name"],
        paging:false,
      }
    }
  };
  
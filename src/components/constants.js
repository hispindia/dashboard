export const defCategoryId = 'all'; //Facility
export const defHeadId = 'Kj26Tqc9NS5'; //Program
export const defSubHeadId = 'all'; // DataElements
export const headListTiHode = ["Hn9YUipbpZO", "purL4HnFKnv"]

export const InitialQuery = {
  me: {
    resource: "me.json",
    params: {
      fields: ["id", "organisationUnits[id,name,code,path,level]"],
    },
  },
  ouList: {
    resource: "organisationUnits.json",
    params: {
      fields: ["id,name,level,code,path,children[id,name]"],
      withinUserHierarchy: true,
      paging: false,
    },
  },
  state: {
    resource: "organisationUnitGroups/KO0CnwvtCB4.json",
    params: {
      fields: ["id,name,organisationUnits[id,name]"],
      paging: false,
    },
  },
  block: {
    resource: "organisationUnitGroups/rbjeQ9eXAPS.json",
    params: {
      fields: ["id,name,organisationUnits[id,name,parent[id,name]]"],
      paging: false,
    },
  },
  district: {
    resource: "organisationUnitGroups/dPG50yJgplQ.json",
    params: {
      fields: ["id,name,organisationUnits[id,name,parent[id,name]]"],
      paging: false,
    },
  },
  // programList: {
  //   resource: "programs.json",
  //   params: {
  //     fields: [
  //       "id,name,code,trackedEntityType,programTrackedEntityAttributes[id,valueType,trackedEntityAttribute[id,name,optionSetValue,optionSet[options[name,code]]]],programStages[id,name,programStageDataElements[compulsory,dataElement[id,name,valueType,optionSetValue,optionSet[options[name,code]]]]]",
  //     ],
  //     paging: false,
  //   },
  // },
  programList: {
    resource: "programs.json",
    params: {
      fields: ['id,name,code, programStages'],
      paging: false,
    },
  },
  dataElementGroupList: {
    resource: "dataElementGroups.json",
    params: {
      fields: ["id,name,code,dataElements[id,name,attributeValues[attribute[code,name],value]"],
      paging: false,
    },
  },
  // cateogoryOptionSets: {
  //   resource: "optionSets/loTOOvMFvnX.json",
  //   params: {
  //     fields: ["name,options[id,name,code]"],
  //     paging: false,
  //   },
  // },
  cateogoryOptionSets: {
    resource: "optionGroups.json",
    params: {
      fields: ["id,name,code,options[id,name,code]"],
      paging: false,
    },
  },

  // subCategoriesGroupList: {
  //   resource: "optionGroups.json",
  //   params: {
  //     fields: ["id,name,code,options[id,name]"],
  //     paging: false,
  //   },
  // },

  // subCategoriesGroupList: {
  //   resource: "optionSets/hSeiKbynzoP.json",
  //   params: {
  //     fields: ["options[id,name]"],
  //     paging: false,
  //   },
  // }
};
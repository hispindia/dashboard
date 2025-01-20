export const trackedEntityInstance = {
  put: async (id, data) => {
    var url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/trackedEntityInstances/${id}`;
    let response = await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      url: url,
      body: JSON.stringify(data),
    });
    let resData = await response.json();

    if (resData.response.status == "SUCCESS") {
      return {
        conflict: "",
        status: resData.response.status,
        reference: id,
      };
    }
    if (resData.status == "ERROR") {
      return {
        conflict: JSON.stringify(resData.response.importSummaries[0].conflicts),
        status: resData.status,
        reference: "",
      };
    }
  },
  enroll: async (data) => {
    var url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/enrollments`;
    let response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      url: url,
      body: JSON.stringify(data),
    });
    let resData = await response.json();

    if (resData.response.status == "SUCCESS") {
      return {
        conflict: "",
        status: resData.response.status,
        reference: resData.response.importSummaries[0].reference,
      };
    }
    if (resData.status == "ERROR") {
      return {
        conflict: JSON.stringify(resData.response.importSummaries[0].conflicts),
        status: resData.status,
        reference: "",
      };
    }
  },
  post: async (data) => {
    var url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/trackedEntityInstances`;
    let response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      url: url,
      body: JSON.stringify(data),
    });
    let resData = await response.json();

    if (resData.response.status == "SUCCESS") {
      return {
        conflict: "",
        status: resData.response.status,
        reference: resData.response.importSummaries[0].reference,
      };
    }
    if (resData.status == "ERROR") {
      return {
        conflict: JSON.stringify(resData.response.importSummaries[0].conflicts),
        status: resData.status,
        reference: "",
      };
    }
  },
  filter: async (orgUnitId,subProgramIds, programId) => {
    let url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/analytics/events/query/Kj26Tqc9NS5.json?dimension=ou:gyhpw5myNim&dimension=${subProgramIds}&stage=${programId}&displayProperty=NAME&totalPages=false&outputType=EVENT&desc=eventdate&outputIdScheme=UID&paging=false`
    // let url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/analytics/events/query/Kj26Tqc9NS5.json?dimension=ou:${orgUnitId}&dimension=${programId}.MvZuYsmwW1k&dimension=${programId}.FuCoXAHtiTN&stage=${programId}&displayProperty=NAME&totalPages=false&outputType=EVENT&desc=eventdate&paging=false&outputIdScheme=UID`
    // if (value) url += `&filter=${attr}:eq:${value}`;

    let response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    let data = await response.json();

    return data;
  },
  // filter: async (orgUnitId, programId, attr, value) => {
  //   var url = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/trackedEntityInstances.json?skipPaging=true&fields=orgUnit,trackedEntityInstance,trackedEntityType,attributes[attribute,value],enrollments[events[program,orgUnit,programStage,event,eventDate,dataValues[dataElement,value]]&ouMode=DESCENDANTS&ou=${orgUnitId}&program=${programId}`;
  //   if(value) url += `&filter=${attr}:eq:${value}`;

  //   let response = await fetch(url, {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   let data = await response.json();

  //   return data;
  // },
};

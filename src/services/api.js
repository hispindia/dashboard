import { trackedEntityInstance } from "./trackedEntityInstance";
import { events } from "./events";

export const ApiService = {
  trackedEntityInstance,
  events
};

export class dashboardServices {
  static fetchRecords = async (type, ou, subProgramIds, stage, filter) => {
    const requestOptions = { method: 'GET' }
    let preUrl = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/analytics/events/query/${type}.json?`
    let response = await fetch(preUrl + `dimension=ou:${ou + subProgramIds.join('') + filter}&stage=${stage}` + '&displayProperty=NAME&totalPages=false&outputType=EVENT&desc=eventdate&outputIdScheme=UID&paging=false', requestOptions);
    return response.json();
  } 
}
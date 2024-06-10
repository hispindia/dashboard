export class ApiServices {
  static fetchRecords = async (params) => {
    const requestOptions = { method: 'GET' }
    let response = await fetch(`${process.env.REACT_APP_DHIS2_BASE_URL}/api/analytics.json?${params}`, requestOptions);
    return response.json();
  }
}
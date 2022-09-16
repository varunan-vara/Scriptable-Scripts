/* Variables: Define the following... */
//Fill in the list with up to 3 bus routes as ints
const busRoutes = [1];




/* Simple Class to handle API Requests in a neat way. */
class APIRequest {
  constructor(url) {
    this.url = url;
    this.request = new Request(this.url);
    this.params = {}
  }
  
  //Add a parameter to the Request
  addParameter(pramName, paramVal) {
    this.request.addParameterToMultipart(paramName, paramVal);
    this.params[paramName] = paramVal;
  }
  
  //Get the JSON output of the API Request
  async getJSONData () {
    return await this.request.loadJSON();
  }
  
}
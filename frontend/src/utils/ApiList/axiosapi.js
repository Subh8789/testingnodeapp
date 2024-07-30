 
/*
 const  baseurl = "https://buildingsbt.stage.honeywell.com";
 const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
 */

/*
const contactApi = corsAnywhere + baseurl + "/pif/api/account/v1/get-contact-details?appId=239";
const detailsApi = corsAnywhere + baseurl + "/pif/api/session/details?appId=239";
const toolsApi = corsAnywhere + baseurl + "/pif/api/tools/v1/get-tools?appId=239"; 
const refreshApi = corsAnywhere + baseurl + "/pif/api/session/refresh?appId=239";
const userApi = corsAnywhere + baseurl + "/pif/api/user/v1/get-user?appId=239";
const statusApi = corsAnywhere + baseurl + "/pif/api/status/v1/get-status?appId=239";
*/
const  baseurl = "http://localhost:8888";
const contactApi = baseurl + "/.netlify/functions/apis/pif/api/account/v1/get-contact-details?appId=239"
const detailsApi = baseurl + "/.netlify/functions/apis/pif/api/session/details?appId=239";
const toolsApi = baseurl + "/.netlify/functions/apis/pif/api/tools/v1/get-tools?appId=239";
const refreshApi = baseurl + "/.netlify/functions/apis/pif/api/session/refresh?appId=239";
const userApi = baseurl + "/.netlify/functions/apis/pif/api/user/v1/get-user?appId=239";
const statusApi = baseurl + "/.netlify/functions/apis/pif/api/status/v1/get-status?appId=239";


export { contactApi, detailsApi, toolsApi, refreshApi, userApi, statusApi };



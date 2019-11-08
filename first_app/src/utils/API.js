import axios from "axios";

const BASEURL = "https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-ratings%40public&rows=10&sort=number_of_reviews&facet=city&refine.state=IL&refine.host_has_profile_pic=True&refine.zipcode=";
const APIKEY = "&apikey=4b75efb5f8a9dd5164a16a1d095142e91479f897f56a948e83042d9e";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};


import * as APIConfig from '../../config/APIConfig';
import * as EnvConfig from '../../config/EnvConfig';

class FetchRegionListService {
    async fetchRegionList () {

           return fetch(`${EnvConfig.API_URI}` + `${APIConfig.API_FRANCE_REGION_LIST}`)
                  .then(response => {
                        return response.json();
                  })
                  .catch(error => {
                      console.log("Error fetching region list -----------", error);
                  });
    }
}

export default FetchRegionListService;
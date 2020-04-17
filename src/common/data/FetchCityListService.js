import * as APIConfig from '../../config/APIConfig';
import * as EnvConfig from '../../config/EnvConfig';

class FetchCityListService {
    async fetchCityList(department) {
        return fetch(`${EnvConfig.API_URI}` + `${APIConfig.API_FRANCE_CITY_LIST_BY_DEPARTMENT}` + department)
              .then(response => {
                    return response.json();
              })
              .catch(error => {
                  console.log("Error fetching City list -----------", error);
              });
    }
}
export default FetchCityListService
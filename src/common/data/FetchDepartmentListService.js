import * as APIConfig from '../../config/APIConfig';
import * as EnvConfig from '../../config/EnvConfig';

class FetchDepartmentListService {
    async fetchDepartmentList(region) {
        return fetch(`${EnvConfig.API_URI}` + `${APIConfig.API_FRANCE_DEPARTMENT_LIST_BY_REGION}` + region)
              .then(response => {
                    return response.json();
              })
              .catch(error => {
                  console.log("Error fetching department list -----------", error);
              });
    }
}
export default FetchDepartmentListService
/* Behance service */
import fetch from "node-fetch";

class BehanceService {

 constructor(username, api_key) {
    this.username = username;
    this.api_key = api_key;
    this.projectsApiUrl;
    this.projectApiUrl;
  }

  getProjects() {
   this.projectsApiUrl = 'https://www.behance.net/v2/users/'
     + this.username + '/projects?api_key='
     + this.api_key;

   return this.projectsApiUrl;
 }

  getProject(project_id) {
   this.projectApiUrl = 'https://www.behance.net/v2/projects/' + project_id
     + '?api_key=' + this.api_key;

   return this._jsonp.get(this.projectApiUrl).map(response => response.json());
 }


 get() {
  fetch('https://www.behance.net/v2/users/gotpop/projects?api_key=H2rbXT84MudGzvzQtdbRWCgnBpeTvVmj')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);

        return data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

 }

}

export default BehanceService;

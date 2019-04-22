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

     return this.projectApiUrl;
 }

}

export default BehanceService;

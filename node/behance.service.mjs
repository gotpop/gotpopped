// Behance service 

class BehanceService {

 constructor(env) {
    this.username = env.BE_USERNAME;
    this.api_key = env.BE_API_KEY;
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

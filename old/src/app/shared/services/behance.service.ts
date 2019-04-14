/* Behance service */

import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BehanceService {

  private username = 'gotpop';
  private api_key = 'H2rbXT84MudGzvzQtdbRWCgnBpeTvVmj';

  private projectsApiUrl;
  private projectApiUrl;

  constructor(private _jsonp: Jsonp) { }

  public getProjects() {
    this.projectsApiUrl = 'https://www.behance.net/v2/users/'
      + this.username + '/projects?api_key='
      + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.projectsApiUrl).map(res => res.json());
  }

  public getProject(project_id) {
    this.projectApiUrl = 'https://www.behance.net/v2/projects/' + project_id
      + '?api_key=' + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.projectApiUrl).map(response => response.json());
  }

}

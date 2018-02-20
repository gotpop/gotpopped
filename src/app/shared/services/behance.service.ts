
/* Behance service */

import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BehanceService {

  private username = 'gotpop';
  private api_key = 'H2rbXT84MudGzvzQtdbRWCgnBpeTvVmj';

  private projectsApiUrl;
  private projectApiUrl;

  constructor(private _jsonp: Jsonp) { }

  public getProjects() {
    this.projectsApiUrl = 'http://www.behance.net/v2/users/'
      + this.username + '/projects?api_key='
      + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.projectsApiUrl).map(res => res.json());
  }

  public getProject(project_id) {
    this.projectApiUrl = 'http://www.behance.net/v2/projects/' + project_id
      + '?api_key=' + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.projectApiUrl).map(response => response.json());
  }

}

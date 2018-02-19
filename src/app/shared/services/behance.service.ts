
/* Behance service */

import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BehanceService {

  private username = 'gotpop';
  private api_key = 'nMLvtkO7CdwZg0ld8S1lcWrLzRiW3nRQ';
  private key;
  private projectKey;

  constructor(private _jsonp: Jsonp) { }

  getProjects() {
    this.key = 'http://www.behance.net/v2/users/'
      + this.username + '/projects?api_key='
      + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.key).map(res => res.json());
  }

  getProject(project_id) {
    this.projectKey = 'http://www.behance.net/v2/projects/' + project_id
      + '?api_key=' + this.api_key + '&callback=JSONP_CALLBACK';

    return this._jsonp.get(this.projectKey).map(res => res.json());
  }

}

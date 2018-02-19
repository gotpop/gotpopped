import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BehanceService {

  private username = 'liam@gotpop.net';
  private api_key = 'nMLvtkO7CdwZg0ld8S1lcWrLzRiW3nRQ';

  constructor(private _Jsonp: Jsonp) { }

  getProjects() {
    return this._Jsonp.get('http://www.behance.net/v2/users/' + this.username + '/projects');
    // console.log('Get projects!');

  }
}

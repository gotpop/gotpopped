import { Injectable } from '@angular/core';

@Injectable()
export class SiteService {

  private _width;

  constructor() { }

  public checkSiteWidth() {

    const queries = {
      small: window.matchMedia('(min-width: 0px) and (max-width: 500px)').matches,
      medium: window.matchMedia('(min-width: 500px) and (max-width: 900px)').matches,
      large: window.matchMedia('(min-width: 900px) and (max-width: 1200px)').matches,
      huge: window.matchMedia('(min-width: 1600px)').matches
    };

    if (queries.small) {
      this._width = 'small';
    } else if (queries.medium) {
      this._width = 'mediun';
    } else if (queries.large) {
      this._width = 'large';
    } else if (queries.huge) {
      this._width = 'huge';
    }

    return this._width;
  }

}

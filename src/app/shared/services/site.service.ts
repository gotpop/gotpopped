import { Injectable } from '@angular/core';

@Injectable()
export class SiteService {

  constructor() { }

  public checkSiteWidth() {

    const queries = {
      mobile: window.matchMedia('(min-width: 0px) and (max-width: 479px)').matches,
      tablet: window.matchMedia('(min-width: 480px) and (max-width: 767px)').matches,
      laptop: window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches,
      desktop: window.matchMedia('(min-width: 1200px)').matches
    };

    if (queries.tablet) {
      console.log('Tablet');
    } else if (queries.laptop) {
      console.log('Laptop');
    } else if (queries.desktop) {
      console.log('Desktop');
    }
  }

}

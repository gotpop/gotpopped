import { Component, HostListener } from '@angular/core';
import { SiteService } from './shared/services/site.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _site: SiteService) { }

  @HostListener('window:resize')
  onResize() {
    this._site.checkSiteWidth();
  }

}

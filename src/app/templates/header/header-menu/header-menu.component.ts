import { Component, OnInit, HostListener } from '@angular/core';
import { SiteService } from '../../../shared/services/site.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  public menuOpen = true;
  private _width;

  constructor(private _site: SiteService) {
  }

  ngOnInit() {
  }

  @HostListener('window:resize')
  onResize() {
    this._width = this._site.checkSiteWidth();

    if (this._width === 'small') {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }
  }

  handleToggleUpdated(event: boolean) {
    this.menuOpen = event;
  }

}

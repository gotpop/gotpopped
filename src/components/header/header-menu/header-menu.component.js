import { Component, OnInit, HostListener } from './node_modules/@angular/core';
import { SiteService } from '../../../shared/services/site.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  public menuOpen = true;
  private _width;

  constructor(private _site: SiteService) { }

  ngOnInit() {
    this._checkWidth();
  }

  private _checkWidth() {
    this._width = this._site.checkSiteWidth();
    if (this._width === 'small' || this._width === 'medium') {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this._checkWidth();
  }

  public closeMenu() {
    if (this._width === 'small' || this._width === 'medium') {
      this.menuOpen = !this.menuOpen;
    }
  }

  public handleMenuToggle() {
    this.menuOpen = !this.menuOpen;
  }

}

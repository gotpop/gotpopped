import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  public menuOpen = false;

  constructor() {
    const mq = window.matchMedia('screen and (min-width:900px)');
    if (mq.matches) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }

  ngOnInit() {
  }

  handleToggleUpdated(event: boolean) {
    this.menuOpen = event;
    console.log('Logged! ', this.menuOpen);
  }

}

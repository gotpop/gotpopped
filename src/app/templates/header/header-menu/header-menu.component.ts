import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  public menuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  handleToggleUpdated(event: boolean) {
    this.menuOpen = event;
    console.log('Logged! ', this.menuOpen);
  }

}

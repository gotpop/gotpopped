import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleToggleUpdated(event: boolean) {
    this.menuOpen = event;
    console.log('Logged! ', this.menuOpen);
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public toggleMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleToggleUpdated(event) {
    console.log('Logged! ', event);
  }

}

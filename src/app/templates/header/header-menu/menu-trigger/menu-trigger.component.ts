import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-trigger',
  templateUrl: './menu-trigger.component.html',
  styleUrls: ['./menu-trigger.component.scss']
})
export class MenuTriggerComponent implements OnInit {

  public toggleClick = false;

  @Output() toggleUpdated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    this.toggleClick = !this.toggleClick;
    this.toggleUpdated.emit(this.toggleClick);
  }

}




import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-trigger',
  templateUrl: './menu-trigger.component.html',
  styleUrls: ['./menu-trigger.component.scss']
})
export class MenuTriggerComponent implements OnInit {

  @Output() userUpdated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    console.log('Testing !!!!!!!!');
    this.userUpdated.emit('Hello');

  }

}




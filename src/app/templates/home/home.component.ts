import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('slideIn', [

      state('in', style({ transform: 'translateX(0)' })),

      transition('void => *', [
        style({ transform: 'translateX(-60px)', opacity: '0' }),
        animate('800ms ease-out')
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  state = 'inactive';

  @HostBinding('class') class = 'view-item';

  constructor() { }

  ngOnInit() {
  }

}



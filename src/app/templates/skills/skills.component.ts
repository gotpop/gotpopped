import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

import { skillsObject } from '../../shared/data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100px)', opacity: '0' }),
        animate('400ms ease-out')
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {

  public state = 'inactive';
  public skills;

  @HostBinding('class') class = 'view-item';

  constructor() { }

  ngOnInit() {
    this.skills = skillsObject;
  }

}

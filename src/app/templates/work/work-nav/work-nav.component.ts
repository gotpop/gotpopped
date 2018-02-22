import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-work-nav',
  templateUrl: './work-nav.component.html',
  styleUrls: ['./work-nav.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})

export class WorkNavComponent implements OnInit {

  public projects: any;

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
    });
  }

}

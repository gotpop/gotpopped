import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { BehanceService } from '../../shared/services/behance.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100px)', opacity: '0' }),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class WorkComponent implements OnInit {

  state = 'inactive';

  @HostBinding('class') class = 'view-item';

  private subscribeToRouteParams: any;
  public id;
  public projects: any;
  public project: any;

  constructor(
    private route: ActivatedRoute,
    private _behanceService: BehanceService) { }

  ngOnInit() {
    // First grab the Id from the route params.
    this.subscribeToRouteParams = this.route.params.subscribe(params => {
      this.id = + params['id'];
      // Once we have the Id we can request the project.
      this._behanceService.getProject(this.id).subscribe(projects => {
        this.project = projects.project;
      });
      // Get the projects for next/prev btns
      this._behanceService.getProjects().subscribe(projects => {
        this.projects = projects;
        this.next(this.id);
        console.log('hello', this.projects.projects);
      });
    });

  }

  public next(id) {

    const mappedArrayOfProjects = this.projects.map(obj => {
      const rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    });
    console.log('ma index', mappedArrayOfProjects);
  }

}

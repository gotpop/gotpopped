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
import { last } from '@angular/router/src/utils/collection';

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

  public state = 'inactive';

  @HostBinding('class') class = 'view-item';

  private subscribeToRouteParams: any;
  public id: number;
  public idIndexPrev;
  public idIndexnext;
  public idIndex;
  public projects: any;
  public project: any;
  public nextId;
  public error;

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
      }, error => console.log('Project error: ', error));
      this._behanceService.getProjects().subscribe(projects => {
        // Set projects
        this.projects = projects.projects;
        this.next(this.id);
      }, error => console.log('Projects error: ', error)
      );

    });

  }

  public next(id) {

    const proj = this.projects;
    let currentIndex;
    let currentProjId;
    let nextIndex;

    // Get
    proj.map((obj, index) => {
      // Get current project
      if (obj.id === id) {
        currentIndex = index;
        currentProjId = obj.id;
      }
      // Check if last project & set index
      if (index === (proj.length - 1)) {
        nextIndex = 0;
      }
    });

    // Set
    proj.map((obj, index) => {
      // Set project id based on index
      if (index === nextIndex) {
        this.nextId = obj.id;
      } else if (index === (currentIndex + 1)) {
        this.nextId = obj.id;
      }
    });

  }

}

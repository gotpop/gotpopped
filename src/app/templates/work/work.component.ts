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
  public id;
  public idIndexPrev;
  public idIndexnext;
  public idIndex;
  public projects: any;
  public project: any;
  public nextId;

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
        this.projects = projects.projects;
        this.next(this.id);
      });
      this._behanceService.getProjects().subscribe(projects => {
        // Set projects
        this.projects = projects.projects;
      });
    });

  }

  public next(id) {

    // Setup
    const proj = this.projects;

    let currentIndex;

    // Project Id
    let currentProjId;
    let nextId;

    proj.map((obj, index) => {

      // Get current project
      if (obj.id === id) {
        currentIndex = index;
        currentProjId = obj.id;
        console.log('currentIndex:', currentIndex);
        console.log(index);
        // console.log('Next ID:', nextId);
      }

      if ((index + 1) === currentIndex) {
        this.nextId = obj.id;
        nextId = obj.id;
        console.log('yay');

      }


      // // Check if last project
      // if (index === (proj.length - 1)) {
      //   // console.log('Last: ', obj.id);
      //   // Set next to be the first project in array
      //   nextId = obj.id;
      // }


    });

  }

}

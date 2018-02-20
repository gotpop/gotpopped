import { Component, OnInit } from '@angular/core';
import { Router, Route, RouterLink, ActivatedRoute } from '@angular/router';
import { BehanceService } from '../../shared/services/behance.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

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
    });
  }

}

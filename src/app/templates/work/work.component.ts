import { Component, OnInit } from '@angular/core';
import { Router, Route, RouterLink } from '@angular/router';
import { BehanceService } from '../../shared/services/behance.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public projects: any;
  public state = 'inactive';

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
      console.log(this.projects, 'this.projects');
    });
  }

}

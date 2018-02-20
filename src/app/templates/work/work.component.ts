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
  public project: any;
  public state = 'inactive';

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
      console.log(this.projects, 'this.projects');
    });

    this._behanceService.getProject(62283705).subscribe(projects => {
      this.project = projects.project;
      console.log(this.project, 'this.project');
    });
  }

}

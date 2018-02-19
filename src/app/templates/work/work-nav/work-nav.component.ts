import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-work-nav',
  templateUrl: './work-nav.component.html',
  styleUrls: ['./work-nav.component.scss']
})

export class WorkNavComponent implements OnInit {

  public projects: any;

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
      console.log(this.projects, 'this.projects');
    });
  }

}

import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit, OnChanges {

  private subscribeToRouteParams: any;
  public id: number;
  public project: any;
  public projects: any;

  constructor(
    private _behanceService: BehanceService,
    private route: ActivatedRoute
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this._behanceService.getProject(this.id).subscribe(projects => {
      this.project = projects.project;
      console.log(this.projects, 'Work Item Component');
    });
  }

  ngOnInit() {

    this.subscribeToRouteParams = this.route.params.subscribe(params => {
      this.id = + params['id'];
    });

    this._behanceService.getProject(this.id).subscribe(projects => {
      this.project = projects.project;
      console.log(this.projects, 'Work Item Component');
    });

  }

}

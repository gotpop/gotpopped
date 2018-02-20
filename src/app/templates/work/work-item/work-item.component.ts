import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {

  public project: any;
  public id: number;
  private subscribeToRouteParams: any;

  constructor(
    private _behanceService: BehanceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscribeToRouteParams = this.route.params.subscribe(params => {
      this.id = + params['id'];
    });
    this._behanceService.getProject(this.id).subscribe(projects => {
      this.project = projects.project;
      console.log(this.project, 'this.project');
    });
  }

}

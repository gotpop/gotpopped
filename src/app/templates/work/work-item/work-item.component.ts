import { Component, OnInit, OnChanges } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {

  private subscribeToRouteParams: any;
  public id: number;
  public project: any;

  public testy: any;

  constructor(
    private _behanceService: BehanceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.subscribeToRouteParams = this.route.params.subscribe(params => {
      this.id = + params['id'];
    });

  }

}

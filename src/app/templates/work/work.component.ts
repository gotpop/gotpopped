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

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {

  }

}

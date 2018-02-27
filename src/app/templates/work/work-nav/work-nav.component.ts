import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

import { BehanceService } from '../../../shared/services/behance.service';

@Component({
  selector: 'app-work-nav',
  templateUrl: './work-nav.component.html',
  styleUrls: ['./work-nav.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-80px)', opacity: '0' }),
        animate('400ms ease-out')
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, [
            animate('1.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})

export class WorkNavComponent implements OnInit {

  public projects: any;
  private workRoute: string;
  public workRouteParsed: string;
  public state = 'inactive';
  public apiOk = false;

  constructor(
    private _behanceService: BehanceService,
    private location: Location,
    private router: Router
  ) {
    // Set parent route location
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        // Get location
        this.workRoute = location.path();
        // Break into segments
        const tree: UrlTree = router.parseUrl(this.workRoute);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        // Set the parsed segment
        this.workRouteParsed = s[0].path;
      } else {
        this.workRoute = 'home';
        // Break into segments
        const tree: UrlTree = router.parseUrl(this.workRoute);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        // Set the parsed segment
        this.workRouteParsed = s[0].path;
      }
    });
  }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      // Set projects
      this.projects = projects.projects;
      console.log(this.projects);
      // First iteration of error handling
      if (this.projects.length > 0) {
        this.apiOk = true;
      }
    });
  }

}

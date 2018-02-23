import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../../../shared/services/behance.service';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

import { Location } from '@angular/common';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-work-nav',
  templateUrl: './work-nav.component.html',
  styleUrls: ['./work-nav.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100px)', opacity: '0' }),
        animate('400ms ease-out')
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('.5s', style({ opacity: 1 }))
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

  constructor(
    private _behanceService: BehanceService,
    private location: Location,
    private router: Router
  ) {
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
      this.projects = projects.projects;
    });
  }

}

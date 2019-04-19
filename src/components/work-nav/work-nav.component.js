import React, { Component } from 'react';

import "./work-nav.component.scss";

class WorkNavComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<div class="loading" *ngIf="!apiOk && workRouteParsed === 'work'">
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</div>
<div *ngIf="projects && workRouteParsed === 'work' && apiOk">
  <div [@slideIn]='state'>
    <div class="work-buttons" [@listAnimation]="projects.length">
      <div class="work-button" [routerLink]="['/work', project.id]" routerLinkActive="active" *ngFor="let project of projects">{{project.name}}</div>
    </div>
  </div>
</div>

    );
  }
}

export default WorkNavComponent;

import React, { Component } from 'react';

import "./work.component.scss";

class WorkComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<section class="work-item" *ngIf="project" [@slideIn]='state'>
  <div class="work-title-bar">
    <h1>{{ project.name }}</h1>
    <small>Project ID: {{ project.id }}</small>
  </div>
  <div class="work-text" *ngIf="project.modules[1]">
    <div [innerHTML]="project.modules[1].text"></div>
  </div>
  <div class="work-image" *ngIf="project.modules[0]">
    <img src="{{ project.modules[0].src }}" alt="Hackett" width="1001" height="569">
  </div>
  <app-pagination [projects]="projects" [id]="id"></app-pagination>
</section>

    );
  }
}

export default WorkComponent;

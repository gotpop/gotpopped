import React, { Component } from 'react';

import "./skills.component.scss";

class SkillsComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };

  render() {
    return (
<section class="skills-title-bar" [@slideIn]='state'>
  <h2>Skills</h2>
  <p>Here's a quick overview of my skillset.</p>
</section>
<div [@listAnimation]="skills.length">
  <ul class="skills-list">
    <li *ngFor="let skill of skills">{{skill.name}}</li>
  </ul>
</div>

    );
  }
}

export default SkillsComponent;

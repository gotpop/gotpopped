import React, { Component } from 'react';
import skills from '../../data/skills';

import "./skills.component.scss";

class SkillsComponent extends Component {

  // state = {
  //   text: "React Grid",
  //   altText: "Click here to see this project on Github",
  // };


  render() {
    const listItems = skills.map((link) =>
    <li key={link.name}>{link.name}</li> 
    );
		// console.log("TCL: SkillsComponent -> render -> listItems", listItems)
    return (
      <section className="skills-title-bar">
        <h2>Skills</h2>
        <p>Skills go here</p>
      <div className="navigation">
        <ul>
          {listItems}
        </ul>
      </div>
      
      </section>
    );
  }
}

export default SkillsComponent;

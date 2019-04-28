import React, { Component } from 'react';
import skills from '../../data/skills';
import "./skills.component.scss";

class SkillsComponent extends Component {

  render() {
    const listItems = skills.map((link) =>
      <li key={link.name}>{link.name}</li> 
    );

    return (
      <section className="ma__view ma__view--skills">
        <h2>Skills</h2>
        <p>Skills go here</p>
        <div>
          <ul className="skills__list">
            {listItems}
          </ul>
        </div>
      </section>
    );
  }
}

export default SkillsComponent;

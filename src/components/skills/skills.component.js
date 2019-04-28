import React, { Component } from 'react';
import skills from '../../data/skills';
import "./skills.component.scss";

class SkillsComponent extends Component {

  render() {
    const listItems = skills.map((link) =>
      <li key={link.name}>{link.name}</li> 
    );

    return (
      <main className="ma ma--skills">
        <section className="skills">
          <h2>Skills</h2>
          <div>
            <ul className="skills__list">
              {listItems}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default SkillsComponent;

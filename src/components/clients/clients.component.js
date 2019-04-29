import React, { Component } from 'react';
import skills from '../../data/skills';
import "./clients.component.scss";

class SkillsComponent extends Component {

  render() {
    const listItems = skills.map((link) =>
      <li key={link.name}>{link.name}</li> 
    );

    return (
      <main className="ma ma--clients">
        <section className="clients">
          <h2>clients</h2>
          <div>
            <ul className="clients__list">
              {listItems}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default SkillsComponent;

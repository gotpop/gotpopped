import React, {Component} from 'react';
import ListItem from '../List/List';
import skills from '../../data/skills';
import "./Skills.scss";

class SkillsComponent extends Component {
    render() {
        const List = ({list}) => (
            <div className="skills__grid">
                {list.map(item => (<ListItem key={item.name} item={item}/>))}
            </div>
        );
        return (
            <main className="ma ma--skills">
                <section className="skills__intro">
                    <h2 className="skills__title">Skills</h2>
                    <p className="skills__text">Here's a few of the skills I've used professionally.</p>
                </section>
                <List list={skills}/>
            </main>
        );
    }
}

export default SkillsComponent;

import React, {Component} from 'react';
import ListItem from '../List/List';
import Footer from '../Footer/Footer';
import skills from '../../data/skills';
import "./Skills.scss";

class SkillsComponent extends Component {

    render() {
        const List = ({list}) => (
            <ul className="skills__list">
                {list.map(item => (<ListItem key={item.name} item={item}/>))}
            </ul>
        );
        return (
            <div>
                <main className="ma ma--skills">
                    <section className="skills">
                        <h2>Skills</h2>
                        <List list={skills}/>
                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default SkillsComponent;

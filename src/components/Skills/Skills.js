import React, {Component} from 'react';
import ListItem from '../List/List';
import Footer from '../Footer/Footer';
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
            <section className="si">
                <main className="ma ma--skills">
                    <section className="skills__wrap">
                        <section className="skills__intro">
                            <h2 className="skills__title">Skills</h2>
                            <p className="skills__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </section>
                        <List list={skills}/>
                    </section>
                </main>
                <Footer/>
            </section>
        );
    }
}

export default SkillsComponent;

import React, {Component} from './node_modules/react';
import ListItem from '../List/List';
import Footer from '../Footer/Footer.js/index.js';
import clients from '../../data/clients';
import "./clients.component.scss";

class ClientsComponent extends Component {
    render() {
        const List = ({list}) => (
            <ul className="clients__list">
                {list.map(item => (<ListItem key={item.name} item={item}/>))}
            </ul>
        );
        return (
            <div>
                <main className="ma ma--clients">
                    <section className="clients">
                        <h2>Clients</h2>
                        <List list={clients}/>
                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default ClientsComponent;

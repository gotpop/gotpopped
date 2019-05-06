import React, {Component} from 'react';
import clients from '../../data/clients';
import Footer from '../footer/footer.component.js';
import "./clients.component.scss";

const List = ({list}) => (
    <ul className="clients__list">
        {list.map(item => (<ListItem key={item.name} item={item}/>))}
    </ul>
);

const ListItem = ({item}) => (
    <li>
        <div>{item.name}</div>
    </li>
);

class ClientsComponent extends Component {
    render() {
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

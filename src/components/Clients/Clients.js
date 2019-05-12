import React, {Component} from 'react';
import ListItem from '../List/List';
import Footer from '../Footer/Footer';
import clients from '../../data/clients';
import "./Clients.scss";

class ClientsComponent extends Component {
    render() {
        const List = ({list}) => (
            <div className="clients__grid">
                {list.map(item => (<ListItem key={item.name} item={item}/>))}
            </div>
        );
        return (
            <section className="si">
                <main className="ma ma--clients">
                    <section className="clients__wrap">
                        <section className="clients__intro">
                            <h2 className="clients__title">Clients</h2>
                            <p className="clients__text">Here a brief overview of the clients that I've worked with.</p>
                        </section>
                        <List list={clients}/>
                    </section>
                </main>
                <Footer/>
            </section>
        );
    }
}

export default ClientsComponent;

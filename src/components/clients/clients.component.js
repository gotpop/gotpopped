import React, {Component} from 'react';
import clients from '../../data/clients';
import Footer from '../footer/footer.component.js';
import "./clients.component.scss";

class ClientsComponent extends Component {
    render() {
        const listItems = clients.map((link) => <li key={link.name}>{link.name}</li>);

        return (
            <div>
                <main className="ma ma--clients">
                    <section className="clients">
                        <h2>Clients</h2>
                        <div>
                            <ul className="clients__list">
                                {listItems}
                            </ul>
                        </div>
                    </section>

                </main>
                <Footer/>
            </div>
        );
    }
}

export default ClientsComponent;

import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="row">
                <h2 className="column-6">Dit is een footer! </h2>
                <h2 className="column-6">&#169; copyright {new Date().getFullYear()}</h2>
            </footer>
        );
    }
}

export default Footer;

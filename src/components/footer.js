import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <h3>&#169; copyright {new Date().getFullYear()}</h3>
            </footer>
        );
    }
}

export default Footer;

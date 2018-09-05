import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <h3>&#169; copyright {new Date().getFullYear()}</h3>
            </footer>
        );
    }
}

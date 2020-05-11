import React from 'react';
import './App.css';

export default class App extends React.Component {
    render() {
        const message = 'Hello React';
        return (
            <h1 className='Header'>Hello React!</h1>
        );
    }
}

export { App };
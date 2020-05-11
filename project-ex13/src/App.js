import React from 'react';
import Greeter from './Greeter';

export default class App extends React.Component {
    render() {
        const message = 'Hello React';
        return (
            <div className='App'>
                <Greeter name='둘리' />
                <Greeter name='마이콜' />
                <Greeter />
            </div>
        );
    }
}

export { App };
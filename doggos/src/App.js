import React from 'react';
import axios from 'axios';
import Dogs from './Dogs';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            dogs : "",
        }
    }
    render() {
        
        return (
            <div>
                <h1>Hello Doggos</h1>
                <Dogs />
            </div>
        )
    }
}
import React from 'react';
import axios from 'axios';
import Dogs from './Dogs';
import DogForm from './DogForm';

async function fetchData(breed = "husky") {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    try {
        return res.data;
    } catch {
        console.log(new Error);
    }
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            breed: "",
        }
    }
    componentDidMount() {
        if (!this.state.breed) {
            fetchData().then(res => {
                console.log(res)
                this.setState({ ...this.state, dogs: res.message })
            })
        } else {
            fetchData(this.state.breed).then(res => {
                console.log(res)
                this.setState({ ...this.state, dogs: res.message })
            })
        }
    }
    change = e => {
        const { value } = e.target;
        this.setState({ ...this.state, breed: value })
    }
    submit = e => {
        e.preventDefault();
        fetchData(this.state.breed).then(res => this.setState({ ...this.state, dogs: res.message }))
            .finally(() => this.setState({ ...this.state, breed: "" }))
    }
    render() {
        return (
            <div>
                <h1>Hello Doggos</h1>
                <DogForm change={this.change}
                    submit={this.submit} breed={this.state.breed} />
                <Dogs dogs={this.state.dogs} />
            </div>
        )
    }
}
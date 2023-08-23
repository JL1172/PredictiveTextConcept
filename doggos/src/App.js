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
async function fetchBreed() {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all")
    try {
        return res.data;
    } catch {
        console.log(new Error)
    }
}


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            breed: "",
            data : [],
            select : [],
            placeholder : "",
        }
    }
    componentDidMount() {
        if (!this.state.breed) {
            fetchData().then(res => {
                this.setState({ ...this.state, dogs: res.message })
            })
            fetchBreed().then(res=> {
                this.setState({...this.state, data : Object.keys(res.message)})
            })
        } else {
            fetchData(this.state.breed).then(res => {
                this.setState({ ...this.state, dogs: res.message })
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("runs when updated")
    }
    changeSelect = e => {
        this.setState({...this.state, select : e.target.value})
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
    filter = () => {
        const term = this.state.breed.trim().toLowerCase();
        if (!term) return [];
        return this.state.data.filter(n=> {
            return n.toLowerCase().includes(term);
        })}
    auto = e => {
        this.setState({...this.state, placeholder : this.state.select})
    }
    render() {
        return (
            <div>
                <h1>Hello Doggos</h1>
                <DogForm 
                placeholder = {this.state.placeholder}
                    selectedVal = {this.state.select}
                    changeSelect = {this.changeSelect}
                    auto = {this.auto}
                    types = {this.filter()}
                    change={this.change}
                    submit={this.submit} breed={this.state.breed} />
                <Dogs dogs={this.state.dogs} />
            </div>
        )
    }
}
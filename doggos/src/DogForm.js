import React from "react";

export default class DogForm extends React.Component {
    render() {
        return (
            <div>
                <select onChange = {this.props.changeSelect} 
                value = {this.props.selectedVal}
                onClick={this.props.auto}>
                {this.props.types.map((n,i)=> {
                    return <option 
                    value = {n} key = {i}>{n}</option>
                })}
                </select>
                <form onSubmit={this.props.submit}>
                    <input autoComplete = "on" placeholder = {this.props.placeholder}
                        type="text" value={this.props.breed} onChange={this.props.change}
                        name="search" id="search" />
                    <input type="submit" id="submit" />
                </form>
            </div>
        )
    }
}
import React from "react";

export default class DogForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submit}>
                    <input type = "text" value = {this.props.breed} onChange={this.props.change}
                    name = "search" id = "search"/>
                    <input type = "submit" id = "submit"/>
                </form>
            </div>
        )
    }
}
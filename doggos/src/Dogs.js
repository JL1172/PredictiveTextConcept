import React from "react";

export default class Dogs extends React.Component {
    render() {
        return (
            <div>
              {this.props.dogs.map((n,i)=> {
                return <img width="200" height = "200" key = {i}src = {n}/>
              })}
            </div>
        )
    }
}
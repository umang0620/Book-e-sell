import React, { Component } from 'react'
import Title from '../component/Title'

export default class Home extends Component {
    constructor(){
        super()
        this.state =({
            title: "Near4u",
            description: "This is best car-service app in india"
        })
    }

  render() {
    return (
      <div>
           <Title title={this.state.title} desc={this.state.description}/>
      </div>
    )
  }
}

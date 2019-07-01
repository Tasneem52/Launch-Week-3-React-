import React, { Component } from 'react'
import TextField from './TextField'

class GroceryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let newName = event.target.value
    this.setState({name: newName})
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.addGrocery(this.state.name)
    this.setState({name:""})
  }

  render() {
    console.log("GroceryForm's state name value: ", this.state.name)
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name='grocery'
          content={this.state.name}
          placeholder='name of grocery'
          handlerFunction={this.handleChange}
        />
        <input type="submit" value="Add to List" />
      </form>
    )
  }
}

export default GroceryForm;

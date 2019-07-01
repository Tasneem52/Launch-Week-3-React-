import React, { Component } from 'react'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        { id: 1, name: "Oranges" },
        { id: 2, name: "Bananas" },
        { id: 3, name: "Bread" }
      ]
    }
    this.addGrocery = this.addGrocery.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  addGrocery(groceryName) {
    let oldGroceries = this.state.groceries
    let newId = oldGroceries[oldGroceries.length-1].id + 1
    let newGrocery = {
      id: newId,
      name: groceryName
    }
    let newGroceries = oldGroceries.concat(newGrocery)
    this.setState({groceries: newGroceries})
  }

  handleButtonClick(id) {
    let newGroceries = this.state.groceries.filter(grocery => {
      return grocery.id !== id
    })
    this.setState({groceries: newGroceries})
  }

  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm addGrocery={this.addGrocery} />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default App

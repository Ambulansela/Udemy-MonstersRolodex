import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    //utökar funktionaliteten till lifecyclemethods och render method
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    //vi behöver inte bind när vi använder arroe function i handleChange
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  //Arrow function automaticly bind this
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;

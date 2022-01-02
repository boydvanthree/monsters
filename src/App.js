import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //convert API into JSON
      .then(users => this.setState({ monsters: users})) //convert JSON into setState to ({ var = from… })
  }

  render(){
    const { monsters, searchField } = this.state;
    // same as 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter( monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <h1>Learn App</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}
export default App;

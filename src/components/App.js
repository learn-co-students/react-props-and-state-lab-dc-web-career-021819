import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    event.persist();
    this.setState({filters: {type: event.target.value}})
  };

  onFindPetsClick = (event) => {
    let searchAppend = "";
    this.state.filters.type === "all" ? searchAppend = "" : searchAppend = `?type=${this.state.filters.type}`;
    fetch(`/api/pets${searchAppend}`)
      .then(res => res.json())
      .then(data => {
        this.setState({pets: data})
      });
  };

  onAdoptPet = (petID) => {
    ((this.state.pets).find(pet => pet.id === petID)).isAdopted = true;
    this.setState({filters: {type: this.state.filters.type}});
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'cat'
      }
    }
  }

  updateType = (newType) => {
    this.setState({
      ...this.state,
      filters: {
        type: newType.target.value
      }
    })
  }

  listPets = () => {
    var search = "pets"
    if (this.state.filters.type !== "all") {
      search = `pets?type=${this.state.filters.type}`
    }
    fetch(`/api/${search}`).then(res=>res.json()).then(filteredPets=> {
      this.setState({
        pets: filteredPets
      })
    })
  }

  adoptPet = (id) => {

    var updatedPets = [...this.state.pets]
    updatedPets.find(pet => {
      return pet.id === id
    }).isAdopted = true
    this.setState({
      pets: updatedPets
    })
  }

  render() {
    //this.listPets()
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateType} onFindPetClick={this.listPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

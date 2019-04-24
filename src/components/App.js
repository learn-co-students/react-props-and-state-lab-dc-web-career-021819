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

  changeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  setFetchUrl = () => {
    const baseURL = '/api/pets'
    const type = this.state.filters.type
    if (type === 'all') {
      return baseURL
    } else {
      return baseURL + '?type=' + type
    }
  }

  updatePets = (pets) => {
    this.setState({pets: pets})
  }

  findPets = () => {
    const url = this.setFetchUrl()
    fetch(url).then(resp => resp.json()).then(this.updatePets)
  }

  adoptPet = (petId) => {
    const pets = [...this.state.pets]
    pets.forEach(pet => {

      if (pet.id === petId){
        pet.isAdopted = true
      }
    })
    this.setState({
      pets: pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters value={this.state.filters.type} onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

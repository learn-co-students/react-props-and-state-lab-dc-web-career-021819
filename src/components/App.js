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

  changeType = e => {
    this.setState({
      // ...this.state,
      filters: {
        type: e.target.value
      }
    })
  }

  findPets = e => {
    const targetType = this.state.filters.type
    // console.log(targetType)
    // console.log(this.state.pets)
    const url = targetType === 'all' ? '/api/pets' : `/api/pets?type=${targetType}`
    // console.log(url)
    fetch(url)
      .then(r => r.json())
      .then(d => this.setState({ pets: d}))
    // if (targetType === 'all') {
    //   console.log('Hi')
    //   fetch('/api/pets')
    //     .then(r => r.json())
    //     .then(d => this.changePets(d))
    // } else {
    //   console.log('hello')
    //   fetch(`/api/pets?type=${targetType}`)
    //     .then(r => r.json())
    //     .then(d => console.log(d))
    // }
    // console.log(this.state.pets)
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p
    })
    this.setState({pets})
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
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
              />
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

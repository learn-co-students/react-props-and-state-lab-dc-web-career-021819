import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let petComponents = [];
    this.props.pets.forEach(pet => {
      let genderSymbol = "";
      pet.gender === "male" ? genderSymbol = "♂" : genderSymbol = "♀";
      petComponents.push(<Pet key={pet.id} id={pet.id} name={pet.name} type={pet.type} age={pet.age} weight={pet.weight} genderSymbol={genderSymbol} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)
    })
    return (
      <div className="ui cards">
        {petComponents}
      </div>
    )
  }
}

export default PetBrowser

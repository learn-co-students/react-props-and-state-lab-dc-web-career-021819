import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
    {this.props.pets.map((pet, index) => {
        return(
          <Pet key={index}pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={pet.isAdopted}/>
        )
      })
    }
    </div>
  }
}

export default PetBrowser
// class PetBrowser extends React.Component {
//   render() {
//     return (
//       this.props.pets.map((pet, indx) => {
//         return(
//         <div className="ui cards" key={indx}>
//           <div >{pet.name}</div>
//         </div>
//         )
//       })
//     )
//   }
// }

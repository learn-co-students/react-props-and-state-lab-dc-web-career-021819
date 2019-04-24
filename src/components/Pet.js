import React from 'react'

class Pet extends React.Component {

  buttonOnClickEventHandler = (event) => {this.props.onAdoptPet(this.props.id) }

  render() {
    let buttonComponent = this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.buttonOnClickEventHandler}>Adopt pet</button> ;
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.genderSymbol}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {buttonComponent}
        </div>
      </div>
    )
  }
}

export default Pet

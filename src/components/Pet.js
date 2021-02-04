import React from 'react'

class Pet extends React.Component {
  state = {
    isAdopted: false
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.data.gender === 'female' ? '♀' : '♂'}
            {this.props.data.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {(this.props.data.isAdopted ===true) ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(this.props.data.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet

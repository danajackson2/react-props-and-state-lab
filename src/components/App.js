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

  onAdoptPet = (id) =>{
    let newPets = this.state.pets.map(p => {
      if (p.id === id){p.isAdopted = true}
      return p
    })
    this.setState({
      pets: newPets
    })

    //Below patch fetch for when we're working with real server or api!
    // fetch(`/api/pets/${id}`,{
    //   method: 'PATCH',
    //   headers: {'content-type':'application/json'},
    //   body: JSON.stringify({pet})
    // })
    
  }

  onChangeType = (e) => {
    this.setState({
      filters: {[e.target.name]: e.target.value}
    })
  }

  onFindPetsClick = () => {
    let urlEnd = this.state.filters.type === 'all' ? "" : `?type=${this.state.filters.type}`
      fetch(`/api/pets${urlEnd}`)
      .then(res => res.json())
      .then(petList => this.setState({pets: petList}))
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptCallback={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

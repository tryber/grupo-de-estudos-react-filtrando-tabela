import React, { Component } from 'react';
import { animals } from '../../data';
import '../../App.css';

class Table extends Component {
  constructor() {
    super(); 
    this.state = {
      searchName: '',
      allAnimals: animals,
      mood: 'angry',
      type: 'cat',
    }
  }

  filterName() {
    const { searchName } = this.state;
    let filterAnimals = animals;

    filterAnimals = animals.filter((animal) => animal.name.includes((searchName)))
    this.setState({
      allAnimals: filterAnimals
    })
    return filterAnimals;
  }

  filterMood() {
    // console.log('filtrou')
    const { mood, type } = this.state;
    let filterMoods = animals;
    filterMoods = animals.filter((animal) => animal.mood.includes((mood)) && animal.type.includes((type)));
    this.setState({
      allAnimals: filterMoods
    })
    return filterMoods;  
  }

  render() {
    const { searchName, allAnimals } = this.state;
    return (
      <div className="App">
       <label>
        Digite nome
        <input
          type="text"
          value={ searchName }
          onChange={ (e) => this.setState({ searchName: e.target.value }, () => this.filterName())}
        />
       </label>
       <label>
         <select onChange={ (e) => this.setState({ type: e.target.value }) }>
           <option value="cat">Gato</option>
           <option value="dog">Cachorro</option>
           <option value="chicken">Galinha</option>
         </select>
       </label>
       <label>
         <select onChange={ (e) => this.setState({ mood: e.target.value }, () => console.log(e.target.value)) }>
           <option value="angry">Angry</option>
           <option value="cute">Cute</option>
           <option value="happy">Happy</option>
           <option value="lazy">Lazy</option>
         </select>
       </label>
       <button type="button" onClick={ () => this.filterMood() }>Filtrar</button>
  
       <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Humor</th>
            </tr>
          </thead>
          <tbody>
            { allAnimals.map((animal, index) => (
              <tr key={ index }>
                <td><img className="image" src={ animal.url } alt={ animal.name } /></td>
                <td>{ animal.type }</td>
                <td>{ animal.name }</td>
                <td>{ animal.mood }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

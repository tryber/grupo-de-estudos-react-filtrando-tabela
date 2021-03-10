import React, { Component } from 'react';
import '../../App.css';
import FilterContext from '../../context/FilterContext';

class Table extends Component {
  render() {
    const { searchName, allAnimals, filterName, filterMood, handleTypeOrMood } = this.context;
    return (
      <div className="App">
       <label>
        Digite nome
        <input
          type="text"
          value={ searchName }
          onChange={ filterName }
        />
       </label>
       <label>
         <select name="type" onChange={ handleTypeOrMood }>
           <option value="cat">Gato</option>
           <option value="dog">Cachorro</option>
           <option value="chicken">Galinha</option>
         </select>
       </label>
       <label>
         <select name="mood" onChange={ handleTypeOrMood }>
           <option value="angry">Angry</option>
           <option value="cute">Cute</option>
           <option value="happy">Happy</option>
           <option value="lazy">Lazy</option>
         </select>
       </label>
       <button type="button" onClick={ filterMood }>Filtrar</button>
  
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

Table.contextType = FilterContext;

export default Table;

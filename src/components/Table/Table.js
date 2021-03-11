import React, { useContext } from 'react';
import '../../App.css';
import FilterContext from '../../context/FilterContext';

 function Table()  {
  // render() {
  const { searchName, allAnimals, filterName, filterMood, setMood, setType } = useContext(FilterContext);
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
         <select name="type" onChange={ (e) => setType(e.target.value) }>
           <option value="cat">Gato</option>
           <option value="dog">Cachorro</option>
           <option value="chicken">Galinha</option>
         </select>
       </label>
       <label>
         <select name="mood" onChange={ (e) => setMood(e.target.value) }>
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
 )
  
}

// Table.contextType = FilterContext;

export default Table;

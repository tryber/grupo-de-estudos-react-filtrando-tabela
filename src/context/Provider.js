import React, { useState } from 'react';
import FilterContext from './FilterContext';
import { animals } from '../data';

function Provider(props) {
  const [searchName, setSearchName] = useState('');
  const [allAnimals , setAllAnimals ] = useState(animals);
  const [mood, setMood] = useState('angry');
  const [type, setType] = useState('cat');
  // constructor() {
  //   super(); 
  //   this.state = {
  //     searchName: '',
  //     allAnimals: animals,
  //     mood: 'angry',
  //     type: 'cat',



  const filterName = (e) => {
    setSearchName(e.target.value)
      let filterAnimals = animals;
      filterAnimals = animals.filter((animal) => animal.name.includes((searchName)))
      setAllAnimals(filterAnimals);
      return filterAnimals;
  }

  // const handleTypeOrMood = ({ target }) => {
  //   const { name, value } = target;
  //     switch(name):
  //      type: setType(value);
  //      mood: setMood(value);
  // //   this.setState({
  // //     [name]: value,
  // //   })
  // }

  

  const filterMood = () => {
    // console.log('filtrou')
    let filterMoods = animals;
    filterMoods = animals.filter((animal) => animal.mood.includes((mood)) && animal.type.includes((type)));
    setAllAnimals(filterMoods);
    return filterMoods;  
  }

  
    // const { children } = this.props;
    const data = {
      mood,
      type,
      searchName,
      allAnimals,
      setMood,
      setType,
      filterName,
      filterMood,
      // handleTypeOrMood: handleTypeOrMood,
    }
    return (
      <FilterContext.Provider value={ data }>
        { props.children }
      </FilterContext.Provider>
    );
  
}

export default Provider;

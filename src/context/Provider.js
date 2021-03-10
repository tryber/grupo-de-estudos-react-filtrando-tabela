import React, { Component } from 'react';
import FilterContext from './FilterContext';
import { animals } from '../data';

class Provider extends Component {
  constructor() {
    super(); 
    this.state = {
      searchName: '',
      allAnimals: animals,
      mood: 'angry',
      type: 'cat',
    }

    this.filterName = this.filterName.bind(this);
    this.filterMood = this.filterMood.bind(this);
    this.handleTypeOrMood = this.handleTypeOrMood.bind(this);
  }

  filterName(e) {
    this.setState({
      searchName: e.target.value,
    }, () => {
      const { searchName } = this.state;
      let filterAnimals = animals;
  
      filterAnimals = animals.filter((animal) => animal.name.includes((searchName)))
      this.setState({
        allAnimals: filterAnimals
      })
      return filterAnimals;
    })
  }

  handleTypeOrMood({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
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
    const { children } = this.props;
    const data = {
      ...this.state,
      filterName: this.filterName,
      filterMood: this.filterMood,
      handleTypeOrMood: this.handleTypeOrMood,
    }
    return (
      <FilterContext.Provider value={ data }>
        { children }
      </FilterContext.Provider>
    );
  }
}

export default Provider;

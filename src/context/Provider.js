import React, { Component } from 'react';
import FilterContext from './FilterContext';

class Provider extends Component {
  render() {
    const { children } = this.props;
    const data = 'Funciona?'
    return (
      <FilterContext.Provider data={ data }>
        { children }
      </FilterContext.Provider>
    );
  }
}

export default Provider;
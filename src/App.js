import React, { Component } from 'react';
import { Table } from './components';
import Provider from './context/Provider';

class App extends Component {

  render() {
    return (
      <Provider>
        <Table />
      </Provider>
    );
  }
}

export default App;

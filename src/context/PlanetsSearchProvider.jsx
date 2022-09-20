import React, { Component } from 'react';
import PlanetsSearchContext from './PlanetsSearchContext';

export default class PlanetsSearchProvider extends Component {
  render() {
    const { children } = this.props;
    return (
      <PlanetsSearchContext.Provider value={ { name: 'Luis' } }>
        {children}
      </PlanetsSearchContext.Provider>
    );
  }
}

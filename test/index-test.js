import { expect } from 'chai';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import React from 'react';
import RestaurantInput from '../src/components/RestaurantInput';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../src/App';
import Restaurants  from '../src/components/Restaurants';
import { addRestaurant } from '../src/actions/restaurants'
import manageRestaurants from '../src/reducers/manageRestaurants'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('redux', () => {
  it('updates the store on successful dispatch', () => {
    let store = createStore(manageRestaurants);

    store.dispatch(addRestaurant({name: 'Blooming Hill', location: 'Blooming Grove, NY'}))
    expect(store.getState().restaurants.length).to.equal(1)
    expect(store.getState().restaurants[0].name).to.equal('Blooming Hill')
    expect(store.getState().restaurants[0].location).to.equal('Blooming Grove, NY')

  })
})




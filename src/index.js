import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

const store = createStore()

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('main')
)

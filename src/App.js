import React from 'react'
import Home from "./Components/Home"
import "./App.css"
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div></Provider>
  );
}

export default App;

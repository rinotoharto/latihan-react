import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, AddPage, DetailPage, EditPage } from './pages'
import store from './store'

import  MyBar  from './components/MyBar'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MyBar/>
        </div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/addEmployee" component={AddPage}></Route>
        <Route path="/Detail/:id" component={DetailPage}></Route>
        <Route path="/Edit/:id" component={EditPage}></Route>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;

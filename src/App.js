import React, {Fragment} from 'react';
import MainApp from "./containers/MainApp/MainApp";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Products from "./components/Products/Products";
import Contacts from "./components/Contacts/Contacts";

import './App.css';

const App = () => {
  return (
      <Fragment>
        <Router>
          <div>
            <nav style={{ margin: 10 }}>
              <ul className='header'>
                <li><NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
                </li>
                <li>
                  <NavLink to='/products' activeClassName='active'>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/contacts' activeClassName='active'>
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Route path='/' exact component={MainApp} />
            <Route path='/products' component={Products} />
            <Route path='/Contacts' component={Contacts} />
          </div>
        </Router>
      </Fragment>

  );
};

export default App;



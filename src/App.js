import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Movies from './routes/Movies';
import Login from './routes/Login';
import Movie from './routes/Movie';
import Profile from './routes/Profile';
import AuthRoute from './AuthRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div> 
          <div className='header'>
            <Link className='nav-item' to='/'>Movies</Link>
            <Link className='nav-item' to='/login'>Login</Link>
            <Link className='nav-item' to='/profile'>Profile</Link>
          </div>

          <Route exact path='/' component={Movies} />
          <Route path='/login' component={Login} />
          <Route path='/movie/:id' component={Movie}/>
          <AuthRoute path='/profile' component={Profile}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

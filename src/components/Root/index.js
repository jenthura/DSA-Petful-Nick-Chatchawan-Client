import React from 'react';
import { Route, Link } from 'react-router-dom';
import VeganburgerMenu from '../VeganburgerMenu';
import Adopt from '../Adopt';
import Home from '../Home';
import './Root.css';

function Root() {
  return (
    <div id='Root'>
      <header>
        <VeganburgerMenu right={true} />
        <h1>
          <Link to='/'>
            Pet Agree{' '}
            <span aria-label='dog emoji' role='img'>
              🐕
            </span>
            <span aria-label='cat emoji' role='img'>
              🐈
            </span>
          </Link>
        </h1>
      </header>
      <main></main>
      <Route exact path='/' component={Home} />
      <Route exact path='/adopt' component={Adopt} />
    </div>
  );
}

export default Root;

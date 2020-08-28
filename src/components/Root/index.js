import React from 'react';
import { Route, Link } from 'react-router-dom';
import VeganburgerMenu from '../VeganburgerMenu';
import './Root.css';

//angry cat
//https://www.google.com/search?q=cat+adopt+me+meme&tbm=isch&source=iu&ictx=1&fir=E0JdHD-O7E2cnM%252CjGNC7rt-YZoVaM%252C_&vet=1&usg=AI4_-kS-Sqbns9q8cagnDmhPJPqW2QVjLw&sa=X&ved=2ahUKEwiE2JKQqb7rAhWFQs0KHb0BBm4Q9QF6BAgJEBc#imgrc=E0JdHD-O7E2cnM

function Root() {
  return (
    <div id="Root">
      <header>
        <VeganburgerMenu right={true} />
        <h1><Link to="/">
          Pet Agree
        </Link></h1>
      </header>
      <main>
        <div className="container">
          <img src="images/happy-cat.jpg" alt="Cat smiling"></img>
          <h3>
            Welcome to Pet Agree!
            </h3>
          <p>
            There is a unique adoption process for our clients. Anyone wishing to adopt must enter a queue. Upon reaching the front of the line, you will be able to see a description of a cat and dog, along with a picture of each. You may choose a dog or cat, but you may only adopt the cat or dog that has been in our shelter for the longest time. Once you've chosen your new furry friend, you leave the queue and the person behind you may select a pet.
          </p>
          <p>
            We sell leashes and treats at the counter as you leave! Please buy something as this adoption process is free and supported by the sale of leashes and treats.
          </p>
          <button>Get in line</button>
        </div>
      </main>
      <Route></Route>
    </div>
  );
}

export default Root;

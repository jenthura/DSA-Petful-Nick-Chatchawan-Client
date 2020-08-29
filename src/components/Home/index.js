import React from 'react';
import './Home.css';

function Home(props) {
  function getInLine() {
    props.history.push('/adopt');
  }
  return (
    <div id='Home'>
      <img src='images/happy-cat.jpg' alt='Cat smiling'></img>
      <h3>Welcome to Pet Agree!</h3>
      <p>
        There is a unique adoption process for our clients. Anyone wishing to
        adopt must enter a queue. Upon reaching the front of the line, you will
        be able to see a description of a cat and dog, along with a picture of
        each. You may choose either, but you may only adopt the one that has
        been in our shelter for the longest time. Once you've chosen your new
        furry friend, you leave the queue and the person behind you may select a
        pet.
      </p>
      <p>
        We sell leashes and treats at the counter as you leave! Please buy
        something as this adoption process is free and supported by the sale of
        leashes and treats.
      </p>
      <button onClick={getInLine}>Get in line</button>
    </div>
  );
}

export default Home;

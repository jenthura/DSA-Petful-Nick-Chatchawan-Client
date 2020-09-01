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
        each. You may choose both, or just one, but in either case, you are only
        adopting the one that is at the front of the queue. Once you've chosen
        your new furry friend, you will recieve a notification alerting you that
        the adoption was succeessful. You then leave the queue and the person
        behind you may select a pet.
      </p>
      <p>We do not sell leashes or treats.</p>
      <button onClick={getInLine}>Get in line</button>
    </div>
  );
}

export default Home;

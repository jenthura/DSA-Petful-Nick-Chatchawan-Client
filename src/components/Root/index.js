import React from 'react';
import { Route } from 'react-router-dom';
import VeganburgerMenu from '../VeganburgerMenu';

//angry cat
//https://www.google.com/search?q=cat+adopt+me+meme&tbm=isch&source=iu&ictx=1&fir=E0JdHD-O7E2cnM%252CjGNC7rt-YZoVaM%252C_&vet=1&usg=AI4_-kS-Sqbns9q8cagnDmhPJPqW2QVjLw&sa=X&ved=2ahUKEwiE2JKQqb7rAhWFQs0KHb0BBm4Q9QF6BAgJEBc#imgrc=E0JdHD-O7E2cnM

function Root() {
  return (
    <div>
      <header>
        <h1>Pet Agree</h1>
        <VeganburgerMenu right={true} />
      </header>
      <div>
        <h1>Stuff down below</h1>
      </div>
      <Route></Route>
    </div>
  );
}

export default Root;

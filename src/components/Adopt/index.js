import React, { useState, useEffect } from 'react';
import PetListItem from '../PetListItem';
import PeopleListItem from '../PeopleListItem';
import PetsService from '../../services/pet-service';
import PeopleService from '../../services/people-service';
import './Adopt.css';

function Adopt() {
  const [pets, setPets] = useState([]);
  const [people, setPeople] = useState([]);
  const [user, setUser] = useState('');
  const [buttonsActive, setButtonsActive] = useState(false);

  useEffect(() => {
    refresh();
    setInterval(refresh, 2500);
  }, []);

  function refresh() {
    generatePets();
    generatePeople();

    if (people[0] === user) {
      setButtonsActive(true);
    } else {
      setButtonsActive(false);
    }
  }

  function generatePets() {
    const pets = [];
    PetsService.getAllPets().then((data) => {
      for (const key in data) {
        pets.push(data[key]);
      }
      setPets(pets);
    });
  }

  function generatePeople() {
    PeopleService.getAllPeople().then((data) => setPeople(data));
  }

  function adoptPet(petType) {
    PetsService.deletePet(petType);
    generatePets();
  }

  function adoptBoth() {
    adoptPet('dog');
    adoptPet('cat');
  }

  function addUser(e) {
    e.preventDefault();
    const newUser = e.target.name.value;
    PeopleService.addPerson(newUser);
    setUser(newUser);
  }

  return (
    <div id='Adopt'>
      <div className='peopleList'>
        <form onSubmit={(e) => addUser(e)}>
          <label htmlFor='name'>Your Name</label>
          <input name='name' type='text'></input>
          <button type='submit'>Submit</button>
        </form>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <PeopleListItem name={person} />
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
            <PetListItem petObj={pet} />
          </li>
        ))}
      </ul>
      {buttonsActive && <div><button onClick={() => adoptPet('dog')}>Adopt dog</button>
        <button onClick={() => adoptPet('cat')}>Adopt cat</button>
        <button onClick={adoptBoth}>Adopt both!</button></div>}

    </div>
  );
}

export default Adopt;

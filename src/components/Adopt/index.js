import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import PetListItem from '../PetListItem';
import PetsService from '../../services/pet-service';
import './Adopt.css';

function Adopt() {
  useEffect(() => {
    generatePets();
  }, []);

  const [pets, setPets] = useState([]);

  function generatePets() {
    const pets = [];
    PetsService.getAllPets().then((data) => {
      for (const key in data) {
        pets.push(data[key]);
      }
      setPets(pets);
    });
  }

  function adoptPet(petType) {
    PetsService.deletePet(petType);
  }

  function adoptBoth() {
    adoptPet('dog');
    adoptPet('cat');
  }

  return (
    <div id='Adopt'>
      <ul>
        {pets.map((pet) => (
          <li>
            <PetListItem petObj={pet} />
          </li>
        ))}
      </ul>
      <button onClick={() => adoptPet('dog')}>Adopt dog</button>
      <button onClick={() => adoptPet('cat')}>Adopt cat</button>
      <button onClick={adoptBoth}>Adopt both!</button>
    </div>
  );
}

export default Adopt;

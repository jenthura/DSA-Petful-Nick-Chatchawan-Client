import React from 'react';
import './PetListItem.css';

function PetListItem(props) {
  const {
    imageURL,
    name,
    age,
    breed,
    gender,
    description,
    story,
  } = props.petObj;
  function renderPet() {
    if (props.petObj) {
      return (
        <>
          <img src={imageURL} alt={description}></img>
          <ul>
            <li>Name: {name}</li>
            <li>Breed: {breed}</li>
            <li>Age: {age}</li>
            <li>Gender: {gender}</li>
            <li>Description: {description}</li>
            <li>Story: {story}</li>
          </ul>
        </>
      );
    }
    return null;
  }
  return <>{renderPet()}</>;
}

export default PetListItem;

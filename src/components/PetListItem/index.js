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
            <li>name: {name}</li>
            <li>breed: {breed}</li>
            <li>age: {age}</li>
            <li>gender: {gender}</li>
            <li>description: {description}</li>
            <li>story: {story}</li>
          </ul>
        </>
      );
    }
    return null;
  }
  return <>{renderPet()}</>;
}

export default PetListItem;

import React from 'react';
import './PetListItem.css';

function PetListItem(props) {
  function renderPet() {
    if (props.petObj) {
      return (
        <div>
          <img src={props.petObj.imageURL} alt={props.petObj.description}></img>
          <div>
            <li>name: {props.petObj.name}</li>
            <li>breed: {props.petObj.breed}</li>
            <li>age: {props.petObj.age}</li>
            <li>gender: {props.petObj.gender}</li>
            <li>description: {props.petObj.description}</li>
            <li>story: {props.petObj.story}</li>
          </div>
        </div>
      );
    }
    return null;
  }
  return <div>{renderPet()}</div>;
}

export default PetListItem;

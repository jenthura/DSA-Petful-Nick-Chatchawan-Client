import React from 'react';
import './PeopleListItem.css';

function PeopleListItem(props) {
  function renderPeople() {
    if (props.peopleObj) {
      return <div>{props.peopleObj.name}</div>;
    }
    return null;
  }

  return <div>{}</div>;
}

export default PeopleListItem;

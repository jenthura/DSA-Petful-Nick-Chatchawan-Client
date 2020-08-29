import React from 'react';
import './PeopleListItem.css';

function PeopleListItem(props) {
  function renderPeople() {
    if (props.name) {
      return <>{props.name}</>;
    }
    return null;
  }
  return <>{renderPeople()}</>;
}

export default PeopleListItem;

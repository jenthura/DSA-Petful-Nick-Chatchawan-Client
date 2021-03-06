import React from 'react';
import PetListItem from '../PetListItem';
import PeopleListItem from '../PeopleListItem';
import PetsService from '../../services/pet-service';
import PeopleService from '../../services/people-service';
import './Adopt.css';

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      people: [],
      user: '',
      buttonsActive: false,
    };
  }

  componentDidMount() {
    this.refresh();
    setInterval(this.refresh, 2500);
  }

  refresh = () => {
    this.generatePets();
    this.generatePeople();
  };

  checkFirstPerson = () => {
    if (this.state.people[0] === this.state.user) {
      this.setState({ buttonsActive: true });
    } else {
      this.setState({ buttonsActive: false });
    }
  };

  generatePets = () => {
    const pets = [];
    PetsService.getAllPets().then((data) => {
      for (const key in data) {
        pets.push(data[key]);
      }
      this.setState({ pets: pets });
    });
  };

  generatePeople = () => {
    PeopleService.getAllPeople()
      .then((data) => this.setState({ people: data }))
      .then(() => this.checkFirstPerson());
  };

  adoptPet = (petType) => {
    PetsService.deletePet(petType);
    this.generatePets();
    this.setState({ buttonsActive: false });
    alert(`You have adopted a ${petType}!`);
  };

  adoptBoth = () => {
    this.adoptPet('dog');
    this.adoptPet('cat');
  };

  addUser = (e) => {
    e.preventDefault();
    const newUser = e.target.name.value;
    PeopleService.addPerson(newUser);
    this.setState({ user: newUser });
    e.target.name.value = '';
  };

  render() {
    return (
      <div id='Adopt'>
        <div className='peopleList'>
          <form onSubmit={(e) => this.addUser(e)}>
            <label htmlFor='name'>Your Name</label>
            <input name='name' type='text' required></input>
            <button type='submit'>Join queue</button>
          </form>
          <h3>Queue</h3>
          <ul>
            {this.state.people.map((person, index) => (
              <li key={index}>
                <PeopleListItem name={person} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {this.state.pets.map((pet, index) => (
              <li key={index} className='petList'>
                <PetListItem petObj={pet} />
              </li>
            ))}
          </ul>
        </div>
        {this.state.buttonsActive && (
          <div>
            <button onClick={() => this.adoptPet('dog')}>Adopt dog</button>
            <button onClick={() => this.adoptPet('cat')}>Adopt cat</button>
            <button onClick={this.adoptBoth}>Adopt both!</button>
          </div>
        )}
      </div>
    );
  }
}

export default Adopt;

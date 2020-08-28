import config from '../config';

const PeopleService = {
  getAllPeople() {
    return fetch(`${config.API_ENDPOINT}/people`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  addPerson(nameString) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ person: nameString }),
    });
  },
};

export default PeopleService;

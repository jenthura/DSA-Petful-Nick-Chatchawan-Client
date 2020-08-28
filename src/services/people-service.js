import config from '../config';

const PeopleService = {
  getAllPeople() {
    return fetch(`${config.API_ENDPOINT}/people`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default PeopleService;

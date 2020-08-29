import config from '../config';

const PetsService = {
  getAllPets() {
    return fetch(`${config.API_ENDPOINT}/pets`)
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .catch((error) => console.error(error));
  },
  deletePet(petType) {
    fetch(`${config.API_ENDPOINT}/pets`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ type: petType }),
    });
  },
};

export default PetsService;

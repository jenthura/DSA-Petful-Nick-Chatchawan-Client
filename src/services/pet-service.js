import config from '../config';

const PetsService = {
  getAllPets() {
    return fetch(`${config.API_ENDPOINT}/pets`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deletePet(petType) {
    console.log(petType);
    fetch(`${config.API_ENDPOINT}/pets`, {
      method: 'DELETE',
      body: { 'type': petType },
    });
  },
};

export default PetsService;

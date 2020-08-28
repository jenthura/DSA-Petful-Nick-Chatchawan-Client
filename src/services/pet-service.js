import config from '../config';

const PetsService = {
  getAllPets() {
    return fetch(`${config.API_ENDPOINT}/pets`).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deletePet(petType) {
    fetch(`${config.API_ENDPOINT}/pets`, {
      method: 'DELETE',
      body: JSON.stringify({ type: petType }),
    });
  },
};

export default PetsService;

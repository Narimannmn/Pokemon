import api from "../api/api";

export const pokemonState = {
  getPokemon: async (data) =>{

  },
  getAllPokemon: async (data) => {
    try {
      const {offset = 0, limit = 0} = data;
      const url = '/pokemon?offset=' + offset + '&limit=' + limit
      const response = await api(url, {
        method: 'get',
      });
      return response;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  },
  getRecommendedPokemon: async () =>{

  }
}

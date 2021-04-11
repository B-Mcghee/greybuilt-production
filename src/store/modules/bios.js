import axios from 'axios';

const state = {
  bios: [

  ]
};

const getters = {
  allBios : state => state.bios
};

const actions = {
   async fetchBios({ commit }){
    await axios.get('http://localhost:3000/bios')
    .then(response => {

      commit('setBios', response.data);

  });
    // console.log('setBios',response.data)

  }


};

const mutations = {
  setBios:(state, bios) => (state.bios = bios)
};

export default {
  state,
  getters,
  actions,
  mutations
}
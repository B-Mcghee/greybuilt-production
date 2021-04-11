import axios from 'axios';

const state = {
  contacts: [

  ]
};

const getters = {
  allcontacts : state => state.contacts
};

const actions = {
   async fetchcontacts({ commit }){
    await axios.get('http://localhost:3000/contacts')
    .then(response => {

      commit('setcontacts', response.data.contacts);

  });
    // console.log('setcontacts',response.data)

  }


};

const mutations = {
  setcontacts:(state, contacts) => (state.contacts = contacts)
};

export default {
  state,
  getters,
  actions,
  mutations
}
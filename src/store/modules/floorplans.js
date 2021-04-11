import axios from 'axios';

const state = {
  floorplans: [

  ]
};

const getters = {
  allFloorPlans : state => state.floorplans
};

const actions = {
   async fetchFloorPlans({ commit }){
    await axios.get('http://localhost:3000/floorplans')
    .then(response => {

      commit('setFloorPlans', response.data.floorplans);

  });
    // console.log('setFloorPlans',response.data)

  }


};

const mutations = {
  setFloorPlans:(state, floorplans) => (state.floorplans = floorplans)
};

export default {
  state,
  getters,
  actions,
  mutations
}
import axios from 'axios';

const state = {
  projects: [

  ]
};
const mutations = {
  setProjects:(state, projects) => (state.projects = projects)
};

const actions = {
   async fetchProjects({ commit }){
    await axios.get('http://localhost:3000/projects')
    .then(response => {
      console.log(response.data)
      commit('setProjects', response.data);

  });
    // console.log('setProjects',response.data)

  }


};

const getters = {
  allProjects : state => state.projects
};


export default {
  state,
  getters,
  actions,
  mutations
}
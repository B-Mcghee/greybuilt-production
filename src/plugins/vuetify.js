import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            lightestPrimary:'#ECE1D6',
            lightPrimary: '#DACCBE',
            primary: '#9D7958',
            darkPrimary: '#5b4733',
            darkestPrimary:'#342A1D',
            focus: '#616161'
          },
        },
      },
});

// just registering the component globally
// you don't need to use this if you want to register the component manually

import fitText from 'fitText.vue';

export default {
  install(Vue) {
    Vue.component('fit-text', fitText);
  }
};

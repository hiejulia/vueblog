import Vue from 'vue';

export default {
  get() {
    return Vue.axios.get('localhost:3000/api/posts')
      .catch((error) => {
        throw new Error(error);
      });
  },
};
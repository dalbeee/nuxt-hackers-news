import InfiniteLoading from "vue-infinite-loading";
import Vue from "vue";
Vue.use(InfiniteLoading, {
  /* options */
});

// export default function ({ $axios, redirect }) {
//     $axios.onError(error => {
//       if (error.response.status === 500) {
//         redirect('/sorry')
//       }
//     })
//   }

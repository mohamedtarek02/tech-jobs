import { createStore } from 'vuex';

import jobsModules from './modules/jobs/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    jobs: jobsModules,
    requests: requestsModule,
  },
  state() {
    return {
      clientId: 'c3',
    };
  },
  getters: {
    clientId(state) {
      return state.clientId;
    },
  },
});

export default store;

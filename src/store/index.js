import { createStore } from 'vuex';

import jobsModules from './modules/jobs/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    jobs: jobsModules,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;

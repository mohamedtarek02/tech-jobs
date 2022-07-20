import { createRouter, createWebHistory } from 'vue-router';

import UserAuth from './pages/auth/UserAuth.vue';
import JobsList from './pages/jobs/JobsList.vue';
import JobRegistration from './pages/jobs/JobRegistration.vue';
import ContactClient from './pages/proposals/ContactClient.vue';
import ProposalsReceived from './pages/proposals/ProposalsReceived.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/contact/:id', component: ContactClient, props: true },
    {
      path: '/create-job',
      component: JobRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/proposals',
      component: ProposalsReceived,
      meta: { requiresAuth: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isLogged) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isLogged) {
    next('/jobs');
  } else {
    next();
  }
});
export default router;

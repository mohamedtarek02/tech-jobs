import { createRouter, createWebHistory } from 'vue-router';

import JobsList from './pages/jobs/JobsList.vue';
import JobRegistration from './pages/jobs/JobRegistration.vue';
import ContactClient from './pages/requests/ContactClient.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/contact/:id', component: ContactClient },
    { path: '/register', component: JobRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;

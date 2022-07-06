import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      jobs: [
        {
          title: 'Php database web application',
          details:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem eos sit, mollitia eligendi repudiandae veritatis! Quis pariatur incidunt velit? Illo consequuntur deserunt tempora exercitationem quo velit similique, facere minima.',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          title: 'Make Up a website ',
          areas: ['frontend', 'career'],
          details:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem eos sit, mollitia eligendi repudiandae veritatis! Quis pariatur incidunt velit? Illo consequuntur deserunt tempora exercitationem quo velit similique, facere minima.',
          hourlyRate: 18,
        },
        {
          id: 'c3',
          title: 'Design landpage',
          areas: ['UI & UX Design'],
          details:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem eos sit, mollitia eligendi repudiandae veritatis! Quis pariatur incidunt velit? Illo consequuntur deserunt tempora exercitationem quo velit similique, facere minima.',
          hourlyRate: 12,
        },
        {
          id: 'c4',
          title: 'Analytics traffic sources',
          areas: ['Data Analytics'],
          details:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem eos sit, mollitia eligendi repudiandae veritatis! Quis pariatur incidunt velit? Illo consequuntur deserunt tempora exercitationem quo velit similique, facere minima.',
          hourlyRate: 25,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

export default {
  registerJob(state, payload) {
    state.jobs.unshift(payload);
  },
  setJobs(state, payload) {
    state.jobs = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};

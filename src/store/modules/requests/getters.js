export default {
  allRequests(state) {
    return state.requests;
  },
  requests(state, _, _2, rootGetters) {
    const userId = rootGetters.userId;
    return state.requests.filter((req) => req.userId === userId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

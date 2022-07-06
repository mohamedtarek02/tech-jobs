export default {
  requests(state, _, _2, rootGetters) {
    const clientId = rootGetters.clientId;
    return state.requests.filter((req) => req.clientId === clientId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};

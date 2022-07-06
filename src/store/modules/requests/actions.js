export default {
  async contactClient(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
      clientId: payload.clientId,
    };
    const response = await fetch(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const response = await fetch(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        clientId: responseData[key].clientId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};

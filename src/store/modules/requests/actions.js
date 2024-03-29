import axios from 'axios';

export default {
  async contactClient(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
      userId: payload.userId,
      jobId: payload.jobId,
    };
    // const response = await fetch(
    //   `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(newRequest),
    //   }
    // );

    const response = await axios({
      method: 'post',
      url: `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json`,
      data: {
        ...newRequest,
      },
    });

    const responseData = await response.data;

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const token = context.rootGetters.token;
    // const response = await fetch(
    //   `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json?auth=` +
    //     token
    // );

    const response = await axios.get(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/requests.json?auth=` +
        token
    );
    const responseData = await response.data;

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
        userId: responseData[key].userId,
        jobId: responseData[key].jobId,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};

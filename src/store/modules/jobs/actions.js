export default {
  async createJob(context, data) {
    const clientId = context.rootGetters.clientId;
    const jobData = {
      clientId,
      title: data.title,
      details: data.details,
      hourlyRate: data.hourlyRate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/jobs.json`,
      {
        method: 'POST',
        body: JSON.stringify(jobData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerJob', {
      ...jobData,
    });
  },

  async loadJobs(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/jobs.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const jobs = [];

    for (const key in responseData) {
      const job = {
        id: key,
        clientId: responseData[key].clientId,
        title: responseData[key].title,
        details: responseData[key].details,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      jobs.push(job);
    }

    context.commit('setJobs', jobs);
    context.commit('setFetchTimestamp');
  },
};

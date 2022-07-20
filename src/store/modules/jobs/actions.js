export default {
  async createJob(context, data) {
    const userId = context.rootGetters.userId;
    const jobData = {
      userId,
      title: data.title,
      details: data.details,
      hourlyRate: data.hourlyRate,
      experienceLevel: data.experienceLevel,
      areas: data.areas,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/jobs.json?auth=` +
        token,
      {
        method: 'POST',
        body: JSON.stringify(jobData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to create the Job.'
      );
      throw error;
    }
    console.log('mutation is wroing');

    jobData.id = responseData.name;

    context.commit('registerJob', {
      ...jobData,
    });
    console.log(jobData);
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
        userId: responseData[key].userId,
        title: responseData[key].title,
        details: responseData[key].details,
        hourlyRate: responseData[key].hourlyRate,
        experienceLevel: responseData[key].experienceLevel,
        areas: responseData[key].areas,
      };
      jobs.push(job);
    }

    context.commit('setJobs', jobs);
    context.commit('setFetchTimestamp');
  },
};

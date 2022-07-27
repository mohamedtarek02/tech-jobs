import axios from 'axios';
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

    const response = await axios({
      method: 'post',
      url:
        `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/jobs.json?auth=` +
        token,
      data: {
        ...jobData,
      },
    });

    const responseData = await response.data;

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

    const response = await axios.get(
      `https://tech-jobs-8ed3f-default-rtdb.firebaseio.com/jobs.json`
    );

    const responseData = await response.data;

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

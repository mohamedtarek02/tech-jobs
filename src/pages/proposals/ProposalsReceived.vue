<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <header>
        <h2>Proposals Received</h2>
      </header>
      <base-card class="card" v-for="job in jobs" :key="job.id">
        <div class="container">
          <base-spinner v-if="isLoading"></base-spinner>
          <div v-else>
            <ul>
              <your-jobs
                :jobTitle="job.title"
                :jobDetails="job.details"
              ></your-jobs>
            </ul>
            <h3>proposals received on that job:</h3>
            <div v-if="hasRequests">
              <ul>
                <request-item
                  v-for="req in proposals(job.id)"
                  :key="req.id"
                  :email="req.userEmail"
                  :message="req.message"
                ></request-item>
              </ul>
            </div>
            <h3 v-else>You haven't received any requests yet!</h3>
          </div>
        </div>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/proposals/RequestItem.vue';
import YourJobs from '../../components/proposals/YourJobs.vue';

export default {
  components: {
    RequestItem,
    YourJobs,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    jobs() {
      const jobs = this.$store.getters['jobs/jobs'];
      const userId = this.$store.getters.userId;
      return jobs.filter((job) => job.userId === userId);
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('jobs/loadJobs', false);
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed!';
      }
      this.isLoading = false;
    },
    proposals(jobId) {
      const requests = this.$store.getters['requests/requests'];
      return requests.filter((request) => request.jobId === jobId);
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
.container {
  padding: 15px 5px;
}
.card {
  width: 50%;
}
header {
  text-align: center;
}

h3 {
  padding-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: -20px;
}

/*media */
@media (min-width: 320px) and (max-width: 480px) {
  .card {
    width: 95%;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .card {
    width: 90%;
  }
}
@media (min-width: 769px) and (max-width: 1025px) {
  .card {
    width: 70%;
  }
}
</style>

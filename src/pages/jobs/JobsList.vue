<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div class="layout">
      <section class="filter">
        <jobs-filter @change-filter="setFilters"></jobs-filter>
      </section>
      <section class="jobs">
        <base-card>
          <div class="controls">
            <base-button mode="outline" @click="loadJobs(true)" class="refresh"
              >Refresh</base-button
            >
          </div>
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-else-if="hasJobs">
            <job-item
              v-for="job in filteredJobs"
              :key="job.id"
              :id="job.id"
              :userId="job.userId"
              :title="job.title"
              :details="job.details"
              :rate="job.hourlyRate"
              :experienceLevel="job.experienceLevel"
              :areas="job.areas"
            ></job-item>
          </ul>
          <h3 v-else>No jobs found.</h3>
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import JobItem from '../../components/jobs/JobItem.vue';
import JobsFilter from '../../components/jobs/JobsFilter.vue';

export default {
  components: {
    JobItem,
    JobsFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        security: true,
        design: true,
        dataAnalytics: true,
      },
    };
  },
  computed: {
    filteredJobs() {
      const jobs = this.$store.getters['jobs/jobs'];
      return jobs.filter((job) => {
        if (this.activeFilters.design && job.areas.includes('UI & UX Design')) {
          return true;
        }
        if (this.activeFilters.frontend && job.areas.includes('Frontend')) {
          return true;
        }
        if (this.activeFilters.backend && job.areas.includes('Backend')) {
          return true;
        }
        if (
          this.activeFilters.security &&
          job.areas.includes('Cybersecurity')
        ) {
          return true;
        }
        if (
          this.activeFilters.dataAnalytics &&
          job.areas.includes('Data Analytics')
        ) {
          return true;
        }
        return false;
      });
    },
    hasJobs() {
      return !this.isLoading && this.$store.getters['jobs/hasJobs'];
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadJobs(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('jobs/loadJobs', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadJobs();
    this.handleError();
  },
};
</script>

<style scoped>
.refresh {
  margin: 15px;
}
.layout {
  display: flex;
}
.filter {
  margin: 0 3%;
  width: 20%;
}
.jobs {
  width: 70%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

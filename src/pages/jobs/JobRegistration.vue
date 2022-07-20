<template>
  <section>
    <base-card class="card">
      <div class="container">
        <h2>Create Job</h2>
        <job-form @save-data="saveData"></job-form>
      </div>
    </base-card>
  </section>
</template>

<script>
import JobForm from '../../components/jobs/JobForm.vue';

export default {
  components: {
    JobForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('jobs/createJob', data);
      this.$router.replace('/jobs');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 15px 10px;
}
.card {
  width: 50%;
  margin: 1rem auto;
}
h2 {
  text-align: center;
  margin-top: 0;
}

/* Media */
@media (min-width: 320px) and (max-width: 480px) {
  .card {
    width: 95%;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .card {
    width: 90%;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
  .card {
    width: 80%;
  }
}
</style>

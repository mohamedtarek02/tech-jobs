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

/* media */
/*media */
@media (min-width: 440px) {
  .card {
    width: 90%;
  }
}
@media (min-width: 769px) {
  .card {
    width: 60%;
  }
}
@media (min-width: 992px) {
  .card {
    width: 50%;
  }
}


</style>

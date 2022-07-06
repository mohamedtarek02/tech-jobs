<template>
  <section>
    <base-card class="card">
      <h2>Create Job</h2>
      <job-form @save-data="saveData"></job-form>
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
.card {
  width: 50%;
  margin: 1rem auto;
}
h2 {
  text-align: center;
  margin-top: 0;
}
</style>

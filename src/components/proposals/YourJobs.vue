<template>
  <div class="container">
    <h2>{{ jobTitle }}</h2>
    <p>{{ jobDetails }}</p>
  </div>
</template>

<script>
export default {
  props: ['jobTitle', 'jobDetails'],
};
</script>

<style scoped>
h2 {
  color: #009688;
}
p {
  white-space: pre-line;
}
</style>

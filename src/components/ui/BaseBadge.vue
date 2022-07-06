<template>
  <span class="badge">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.badge {
  background-color: rgb(88 88 88);
  color: white;
  border-radius: 30px;
  padding: 0.3rem 0.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 13px;
}

/* .frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
} */
</style>

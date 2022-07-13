<template>
  <li>
    <div class="headContainer">
      <h2>{{ title }}</h2>
      <span class="rate">${{ rate }} / hour</span>
    </div>
    <div class="details">
      {{ details }}
    </div>
    <div>
      <span class="skills-required">Skills Required: </span>
      <base-badge v-for="area in areas" :key="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="`/contact/${userId}`" class="apply"
        >Contact client</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'userId', 'details', 'title', 'rate', 'areas'],
};
</script>

<style scoped>
.headContainer {
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: space-between;
}
.rate {
  font-weight: 600;
  color: green;
}
.details {
  margin-bottom: 15px;
}
li {
  border-bottom: 1px solid #424242;
  padding: 1rem;
}
li:last-child {
  border-color: transparent;
}

div {
  margin: 0.5rem 0;
}
.skills-required {
  color: #009688;
  margin-right: 5px;
  font-weight: bold;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.apply {
  border-radius: 5px;
}
</style>

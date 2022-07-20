<template>
  <div class="container">
    <router-link :to="`/contact/${userId}?jobId=` + id">
      <div class="border">
        <li>
          <div class="headContainer">
            <h2>{{ title }}</h2>
            <span class="rate">${{ rate }} / hour</span>
          </div>
          <p class="exp">
            Experiecne level: <span class="level">{{ experienceLevel }}</span>
          </p>
          <div class="details">
            <p>
              {{ details }}
            </p>
          </div>
          <div>
            <span class="skills-required">Skills Required: </span>
            <base-badge
              v-for="area in areas"
              :key="area"
              :title="area"
              class="skills"
            ></base-badge>
          </div>
          <div class="actions">
            <base-button link :to="`/contact/${userId}`" class="apply"
              >Submit a proposal</base-button
            >
          </div>
        </li>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'userId',
    'details',
    'title',
    'rate',
    'experienceLevel',
    'areas',
  ],
};
</script>

<style scoped>
.container {
  margin: 0 !important;
}
.container:hover {
  background: #dcdcdc;
}
a {
  text-decoration: none;
}
p,
h2,
span {
  color: black;
}
.headContainer {
  display: flex;
  width: 98%;
  align-items: center;
  justify-content: space-between;
}
h2 {
  margin-bottom: 0px !important;
}
.rate {
  font-weight: 600;
  color: green;
}
.exp {
  color: #727070;
  margin-top: -6px;
  font-size: 13px;
  margin-bottom: 30px;
}
.level {
  display: inline-block;
  margin-left: 5px;
  color: #009688;
  font-weight: 600;
}
.details {
  margin-bottom: 15px;
}

.border {
  border-top: 1px solid grey;
  padding: 5px 15px;
  margin: 0px !important;
}

div {
  margin: 0.5rem 0;
}
.skills-required {
  color: #009688;
  margin-right: 5px;
  font-weight: bold;
}

.skills {
  margin-bottom: 5px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
.apply {
  border-radius: 5px;
}
/* Media */
@media (min-width: 320px) and (max-width: 768px) {
  .apply {
    width: 100%;
    text-align: center;
    margin-top: 5px;
  }
  .container:hover {
    background: none;
  }
}
</style>

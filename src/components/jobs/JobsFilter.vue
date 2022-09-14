<template>
  <div class="main">
    <base-card class="card">
      <div class="container">
        <h2>Filter by:</h2>
        <div class="skills-container">
          <div class="skills-control">
            <input type="checkbox" id="design" @change="setFilter" />
            <label for="design">UI & UX Design</label>
          </div>
          <div class="skills-control">
            <input type="checkbox" id="frontend" @change="setFilter" />
            <label for="frontend">Frontend</label>
          </div>
          <div class="skills-control">
            <input type="checkbox" id="backend" @change="setFilter" />
            <label for="backend">Backend</label>
          </div>
          <div class="skills-control">
            <input type="checkbox" id="security" @change="setFilter" />
            <label for="security">Cybersecurity</label>
          </div>
          <div class="skills-control">
            <input type="checkbox" id="dataAnalytics" @change="setFilter" />
            <label for="dataAnalytics">Data Analytics</label>
          </div>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: false,
        backend: false,
        security: false,
        design: false,
        dataAnalytics: false,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
.main {
  position: fixed;
  width: 20%;
}
.container {
  margin: 15px auto;
  padding: 8px 0;
  width: 80%;
}
h2 {
  margin: 0.3rem 0rem 1rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 23px;
}
.skills-control {
  width: 100%;
  margin-bottom: 7px;
}
input,
label {
  cursor: pointer;
}

/* Media */
@media (min-width: 320px) and (max-width: 768px) {
  .main {
    position: static;
    width: 100%;
  }
  .skills-control {
    width: 50%;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .skills-control {
    width: 50%;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
}
</style>

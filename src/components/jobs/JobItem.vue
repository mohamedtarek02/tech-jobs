<template>
  <div class="container">
    <div class="border">
      <li>
        <div class="headContainer">
          <div class="title">
            <h2>{{ title }}</h2>
          </div>
          <div class="rateDiv">
            <span class="rate">${{ rate }} / hour</span>
          </div>
        </div>
        <p class="exp">
          Experiecne level: <span class="level">{{ experienceLevel }}</span>
        </p>
        <div class="details">
          <span style="white-space: pre-line">
            {{ receivedDetails }}
          </span>
          <span
            class="see-more"
            @click="showMoreDetails"
            v-if="!seeMore && manyChars"
            >See More</span
          >
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
  data() {
    return {
      seeMore: false,
    };
  },
  computed: {
    manyChars() {
      return this.details.length > 200;
    },
    receivedDetails() {
      if (this.details.length > 200 && this.seeMore === false) {
        return this.details.slice(0, 200) + '....';
      } else {
        return this.details;
      }
    },
  },
  methods: {
    showMoreDetails() {
      this.seeMore = true;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 !important;
}

a {
  text-decoration: none;
}
h2 {
  margin: 0px;
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
  flex-wrap: nowrap;
}
title {
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
.see-more {
  font-weight: bold;
  color: #009688;
  cursor: pointer;
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

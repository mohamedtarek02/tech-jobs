<template>
  <div class="container">
    <div class="border">
      <li>
        <div class="headContainer">
          <div class="titleCon">
            <h2>{{ title }}</h2>
          </div>
          <div class="rateCon">
            <span class="rate">${{ rate }} / hour</span>
          </div>
        </div>
        <div class="info">
          <span class="experience">
            Experiecne level:
            <span class="level">{{ experienceLevel }} </span>
          </span>
          <span class="proposals">
            - Proposals Received:
            <span class="level">{{ proposalsNumber(id) }}</span>
          </span>
        </div>
        <div class="details">
          <span style="white-space: pre-line">
            {{ receivedDetails }}
          </span>
          <span
            class="see"
            @click="showMoreDetails"
            v-if="!seeMore && manyChars"
            >See More</span
          >
          <span
            class="see"
            v-if="manyChars && seeMore"
            @click="seeMore = false"
          >
            See Less
          </span>
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
          <base-button link :to="`/contact/${userId}?jobId=${id}`" class="apply"
            >Submit a proposal</base-button
          >
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import longText from '../../mixins/longText';
export default {
  mixins: [longText],
  props: [
    'id',
    'userId',
    'details',
    'title',
    'rate',
    'experienceLevel',
    'areas',
  ],
  methods: {
    fetchProposals() {
      this.$store.dispatch('requests/fetchRequests');
    },
    proposalsNumber(id) {
      const requests = this.$store.getters['requests/allRequests'];
      const filteredRequests = requests.filter(
        (request) => request.jobId === id
      );
      console.log();
      return filteredRequests.length;
    },
  },
  async created() {
    await this.fetchProposals();
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
.titleCon {
  margin-bottom: 0px !important;
  width: 70%;
  margin-right: 5%;
}
.rateCon {
  float: right;
}
.rate {
  font-weight: 600;
  color: green;
}
.info {
  color: #727070;
  margin-top: -6px;
  font-size: 13px;
  margin-bottom: 30px;
}
.proposals {
  display: inline-block;
  margin-left: 5px;
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
.see {
  font-weight: bold;
  color: #6b6b6b;
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  margin-left: 1px;
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
  .proposals {
    margin-left: 2px;
  }
}
</style>

<template>
  <div class="container">
    <div class="propsals">
      <h3>proposals received for that job:</h3>
      <li v-for="proposal in proposalsReceived()" :key="proposal.email">
        <div class="from">
          <strong>From:</strong
          ><a :href="emailLink" class="email">{{ proposal.userEmail }}</a>
        </div>
        <p style="white-space: pre-line" class="message">
          {{ proposal.message }}
        </p>
      </li>
    </div>
    <h4 v-if="noProposals">
      You haven't received any proposal yet, stay tuned..
    </h4>
    <div class="actions">
      <button
        v-if="manyProposals && !seeMore"
        class="seeButton"
        @click="seeMoreFunc"
      >
        See More Prposals
      </button>
      <button
        class="seeButton"
        v-if="manyProposals && seeMore"
        @click="seeMore = false"
      >
        See less Prposals
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['proposals'],
  data() {
    return {
      seeMore: false,
    };
  },
  computed: {
    noProposals() {
      return this.proposals.length === 0;
    },
    manyProposals() {
      return this.proposals.length > 1;
    },
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
  methods: {
    proposalsReceived() {
      if (this.proposals.length > 1 && this.seeMore === false) {
        return this.proposals.slice(0, 1);
      } else {
        this.showSeeMoreButton = false;
        return this.proposals;
      }
    },
    seeMoreFunc() {
      this.seeMore = true;
    },
  },
  created() {
    console.log(this.proposals);
  },
};
</script>

<style scoped>
li {
  padding: 1rem;
  border-bottom: 1px solid grey;
}
li:last-child {
  padding: 1rem;
  border-bottom: transparent;
}

.from {
  margin-bottom: 20px;
}

a {
  color: #009688;
  text-decoration: none;
  font-weight: bold;
  background-color: #dbdbdb;
  border-radius: 53px;
  padding: 2px 10px;
  margin-left: 8px;
}

a:hover,
a:active {
  color: #02bc87;
}

p {
  margin: 0.5rem 0 0 0;
}
.message {
  color: #343434;
}

h4 {
  text-align: center;
  font-weight: 400;
  margin-top: 34px;
  color: gray;
}
.actions {
  margin-top: 10px;
}
.seeButton {
  background: white;
  border: 1px solid #aeaeae;
  margin: 0px auto;
  display: block;
  padding: 8px 39%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  color: #009184;
  font-weight: bold;
}

.seeButton:hover {
  background: rgb(237 235 235);
}
/*media */
@media (min-width: 320px) and (max-width: 480px) {
  .seeButton {
    padding: 8px 33%;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .seeButton {
    padding: 8px 36%;
  }
}
</style>

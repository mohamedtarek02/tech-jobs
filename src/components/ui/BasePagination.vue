<template>
  <div class="container">
    <div>
      <base-button
        :class="[['flat'], { disabled: pageNumber === 1 }]"
        @click="pageNumber = 1"
        >first</base-button
      >
      <base-button
        :class="[
          ['outline-flat', 'circle', 'bold'],
          { disabled: pageNumber === 1 },
        ]"
        @click="prev"
        >&lt;</base-button
      >
      <div class="pag-nums">
        <span v-for="(item, index) in Array(maxNumberPage)" :key="index">
          <base-button
            class="outline-flat circle"
            @click="pageNumber = index + 1"
            :class="{ active: pageNumber === index + 1 }"
          >
            {{ index + 1 }}
          </base-button>
        </span>
      </div>
      <base-button
        :class="[
          ['outline-flat', 'circle', 'bold'],
          { disabled: pageNumber === maxNumberPage },
        ]"
        @click="next"
        >&gt;</base-button
      >
      <base-button
        :class="[['flat'], { disabled: pageNumber === maxNumberPage }]"
        @click="pageNumber = maxNumberPage"
        >last</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['pageNumbers', 'resetPages'],
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    maxNumberPage() {
      return Math.ceil(this.pageNumbers / 5);
    },
  },
  watch: {
    pageNumber(val) {
      this.$emit('page-number', val);
    },
    resetPages() {
      console.log('workiiiing');
      this.pageNumber = 1;
    },
  },
  methods: {
    prev() {
      this.pageNumber === 1 ? '' : this.pageNumber--;
    },
    next() {
      this.pageNumber === this.maxNumberPage ? '' : this.pageNumber++;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 10px;
  text-align: center;
}

.pag-nums {
  margin: 0 5px;
  display: inline-block;
}
.circle {
  width: 27px;
  height: 27px;
  border: 1px solid gainsboro;
  border-radius: 50%;
  margin: 0px 4px;
}
.active {
  background-color: #009688;
  color: white;
}
.disabled {
  cursor: not-allowed;
  color: #9aaa97;
  border: transparent;
}
.disabled:hover {
  background-color: white;
}
</style>

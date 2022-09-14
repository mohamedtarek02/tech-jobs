<template>
  <div class="container">
    <section class="pages-number">
      <label for="itemsPerPage">Jobs Per Page: </label>
      <select name="itemsPerPage" id="itemsPerPage" v-model="itemsPerPage">
        <option value="4" selected>4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </section>
    <section class="paginations">
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
    </section>
  </div>
</template>

<script>
export default {
  props: ['pageNumbers', 'resetPages'],
  data() {
    return {
      pageNumber: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    maxNumberPage() {
      return Math.ceil(this.pageNumbers / this.itemsPerPage);
    },
  },
  watch: {
    pageNumber(val) {
      this.$emit('page-number', val, this.itemsPerPage);
    },
    itemsPerPage(val) {
      this.pageNumber = 1;
      this.$emit('page-number', this.pageNumber, val);
    },
    resetPages() {
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
  margin: 10px 0 50px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 99%;
}
label {
  font-weight: 600;
}
label + select {
  color: #009688;
}

select {
  padding: 3px 13px;
  cursor: pointer;
  border: 1px solid #bebcbc;
}
select:hover,
select:active,
select:focus {
  border: 1px solid #919090;
}
select option {
  cursor: pointer;
}
select option:hover {
  background-color: #bebcbc;
  cursor: pointer;
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
@media (min-width: 320px) and (max-width: 768px) {
  .container {
    display: block;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
}
</style>

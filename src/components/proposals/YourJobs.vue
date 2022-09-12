<template>
  <div class="container">
    <h2>{{ jobTitle }}</h2>
    <span style="white-space: pre-line">
      {{ receivedDetails }}
    </span>
    <span class="see" @click="showMoreDetails" v-if="!seeMore && manyChars"
      >See More</span
    >
    <span class="see" v-if="manyChars && seeMore" @click="seeMore = false">
      See Less
    </span>
  </div>
</template>

<script>
import longText from '../../mixins/longText';

export default {
  mixins: [longText],
  props: ['jobTitle', 'details'],
};
</script>

<style scoped>
h2 {
  color: #009688;
}
p {
  white-space: pre-line;
}
.see {
  font-weight: bold;
  color: #6b6b6b;
  cursor: pointer;
  font-size: 14px;
  margin-left: 1px;
}
</style>

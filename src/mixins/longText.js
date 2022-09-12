export default {
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
        return this.details + '...';
      }
    },
  },
  methods: {
    showMoreDetails() {
      this.seeMore = true;
    },
  },
};

<template>
  <div class="container">
    <li>
      <div class="from">
        <strong>From:</strong><a :href="emailLink" class="email">{{ email }}</a>
      </div>
      <p style="white-space: pre-line">{{ message }}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
};
</script>

<style scoped>
.container {
  border-top: 1px solid grey;
}

li {
  padding: 1rem;
}

.from {
  margin-bottom: 20px;
}

a {
  color: #009688;
  text-decoration: none;
  font-weight: bold;
  background-color: #d1d1d1;
  border-radius: 0 18px;
  padding: 2px 10px;
  margin-left: 8px;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>

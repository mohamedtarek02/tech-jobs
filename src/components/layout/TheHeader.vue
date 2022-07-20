<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Tech Jobs</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
        <li>
          <router-link :to="registerURL">Create Job</router-link>
        </li>
        <li>
          <router-link :to="requestURL">Proposals</router-link>
        </li>
        <li v-if="!isLogged">
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-else>
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    registerURL() {
      if (this.isLogged) {
        return '/create-job';
      } else {
        return '/auth?redirect=create-job';
      }
    },
    requestURL() {
      if (this.isLogged) {
        return '/proposals';
      } else {
        return '/auth?redirect=requests';
      }
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/jobs');
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #009688;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

header a {
  text-decoration: none;
  color: rgb(233 233 233);
  display: inline-block;
  padding: 0.5rem;
}

a:active,
a:hover,
a.router-link-active {
  font-weight: bold;
  color: white;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

header nav {
  width: 99%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

/*media*/
@media (min-width: 320px) and (max-width: 540px) {
  header nav {
    display: block;
  }
  h1 {
    margin-left: 7px;
  }
  header ul {
    justify-content: start;
  }
  header a {
    padding: 10px 1px;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
}
</style>

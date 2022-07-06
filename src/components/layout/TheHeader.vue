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
          <router-link to="/register">Create Job</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: #009688;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1rem;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ffffff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
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
</style>

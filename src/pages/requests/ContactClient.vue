<template>
  <base-card class="card">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">
        Please enter a valid email and non-empty message.
      </p>
      <div class="actions">
        <base-button>Send Message</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactClient', {
        email: this.email,
        message: this.message,
        userId: this.$route.params.id,
      });
      this.$router.replace('/jobs');
    },
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  margin: 1rem auto;
}
form {
  margin: 1rem;
  border-radius: 12px;
}

.form-control {
  margin: 1.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #009688;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  margin-top: 5px;
}
</style>

<template>
  <base-card class="card">
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Your E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="message">Your Propsoal</label>
          <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">
          Please enter a valid email and non-empty message.
        </p>
        <div class="actions">
          <base-button class="send">Send</base-button>
        </div>
      </form>
    </div>
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
        jobId: this.$route.query.jobId,
      });
      this.$router.replace('/jobs');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 15px 10px;
}
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
.actions {
  margin-top: 5px;
}
.send {
  padding: 6px 25px;
}
.errors {
  font-weight: bold;
  color: red;
}

/* media */
@media (min-width: 320px) and (max-width: 480px) {
  .card {
    width: 95%;
  }
  .send {
    width: 90%;
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .card {
    width: 85%;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
  .card {
    width: 60%;
  }
}
</style>

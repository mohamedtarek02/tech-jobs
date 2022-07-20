<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !title.isValid }">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        v-model.trim="title.val"
        @input="clearValidity('title')"
      />
      <span v-if="!title.isValid">This input could not be empty.</span>
    </div>
    <div class="form-control" :class="{ invalid: !details.isValid }">
      <label for="details">details</label>
      <textarea
        id="details"
        rows="5"
        v-model.trim="details.val"
        @input="clearValidity('details')"
      />
      <span v-if="!details.isValid">This input could not be empty.</span>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="hourlyrate">Hourly rate</label>
      <input
        type="number"
        id="hourlyrate"
        v-model.trim="rate.val"
        @input="clearValidity('rate')"
      />
      <span v-if="!rate.isValid">{{ rateErrors }}</span>
    </div>
    <h3>Experience Level</h3>
    <div class="skills-container">
      <div
        class="skills-control"
        v-for="experience in experiences"
        :key="experience.val"
      >
        <input
          type="radio"
          :id="experience.val"
          :value="experience.text"
          name="experiences"
          v-model="exps.val"
          @change="clearValidity('exps')"
        />
        <label :for="experience.va">{{ experience.text }}</label>
      </div>
    </div>
    <span v-if="!exps.isValid" class="areas-error"
      >You should choose one experience level.</span
    >
    <h3>Skills needed</h3>
    <div class="skills-container">
      <div
        class="skills-control"
        :class="{ invalid: !areas.isValid }"
        v-for="skill in skills"
        :key="skill.val"
      >
        <input
          type="checkbox"
          :id="skill.val"
          :value="skill.text"
          v-model="areas.val"
          @change="clearValidity('areas')"
        />
        <label for="skill.val">{{ skill.text }}</label>
      </div>
    </div>
    <span v-if="!areas.isValid" class="areas-error"
      >You should choose at least one skill.</span
    >
    <div class="actions">
      <base-button class="register">Register</base-button>
    </div>
    <p v-if="!isFormValid" class="invalidForm">
      Please fix the above errors and submit again.
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      details: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      exps: {
        val: [],
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      rateErrors: '',
      isFormValid: true,
      experiences: [
        { text: 'Entry', val: 'entry' },
        { text: 'Intermediate', val: 'int' },
        { text: 'Expert', val: 'exp' },
      ],
      skills: [
        { text: 'UI & UX Design', val: 'design' },
        { text: 'Frontend', val: 'frontend' },
        { text: 'Backend', val: 'backend' },
        { text: 'Cybersecurity', val: 'security' },
        { text: 'Data Analytics', val: 'dataAnalytics' },
      ],
    };
  },
  methods: {
    clearValidity(input) {
      if (this[input].val === '') {
        return;
      } else {
        this[input].isValid = true;
      }
    },
    validation() {
      this.isFormValid = true;
      if (this.title.val === '') {
        this.title.isValid = false;
        this.isFormValid = false;
      }
      if (this.details.val === '') {
        this.details.isValid = false;
        this.isFormValid = false;
      }
      if (!this.rate.val) {
        this.rate.isValid = false;
        this.isFormValid = false;
        this.rateErrors = 'You should insert a rate.';
      } else if (this.rate.val < 0) {
        this.rate.isValid = false;
        this.isFormValid = false;
        this.rateErrors = 'You rate should be more than zero.';
      }
      if (this.exps.val.length === 0) {
        this.exps.isValid = false;
        this.isFormValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }
    },
    submitForm() {
      this.validation();

      if (!this.isFormValid) {
        return;
      }

      const formData = {
        title: this.title.val,
        details: this.details.val,
        hourlyRate: this.rate.val,
        experienceLevel: this.exps.val,
        areas: this.areas.val,
      };
      
      this.$emit('save-data', formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 1.8rem 0;
  position: relative;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 23px;
}
.skills-control {
  width: 33%;
  margin-bottom: 5px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

textarea {
  height: 150px;
}

input[type='text'],
input[type='number'],
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #009688;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: none;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.actions {
  margin-top: 30px;
}
.actions button {
  padding: 0.5rem 1rem;
}
.invalidForm {
  color: red;
  font-weight: bold;
}
.invalid label {
  color: rgb(0, 0, 0);
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
span {
  position: absolute;
  padding-top: 2px;
  color: red;
  display: inline-block;
  border-radius: 3px;
  font-size: 12px;
}
.areas-error {
  margin-top: -26px !important;
}
</style>

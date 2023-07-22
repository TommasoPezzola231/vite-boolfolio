<script>

import axios from "axios"

export default {
  name: "ContactUs",
  components: {
  },
  data() {
    return {
      ApiUrl: "http://localhost:8000/api",
      name: "",
      email: "",
      message_subject: "",
      message: "",
      loading: false
    }
  },
  methods: {
    SendRequest() {

      this.loading = true

      let data = {
        name: this.name,
        email: this.email,
        message_subject: this.message_subject,
        message: this.message
      }

      axios.post(this.ApiUrl + "/contacts-us", data).then(result =>{
        console.log(data)
        this.loading = false
        }).catch(err => {
          console.error("Si è verificato un problema!")
        })
    }
  },
  mounted() {
  }
}
</script>

<template>
    <h2 class="text-center">Contact Us</h2>

    <form @submit.prevent="SendRequest()" class="col-8 mx-auto">

        
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>

        <div class="mb-3">
            <label for="message_subject" class="form-label">Message Subject</label>
            <input type="text" class="form-control" id="message_subject" v-model="message_subject">
        </div>

        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" name="message" id="message" v-model="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-3" :disabled="loading"> {{ loading ? "Invio in corso.." : "Invia" }} </button>
    </form>

</template>

<style scoped>

</style>
<script>
import axios from 'axios';

// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {

  },
  data() {
    return {
      ApiUrl: "http://localhost:8000/api/projects",
    }
  },
  methods: {
    getProjects() {
      axios.get(this.ApiUrl).then(result =>{
        console.log(result.data)
      })
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>

<template>

</template>

<style scoped>

</style>

<script>
import axios from "axios"

export default {
  name: "ProjectCard",
  components: {
    axios
  },
  data() {
    return {
      ApiUrl: "http://localhost:8000/api/projects",
      projects: []
    }
  },
  methods: {
    getProjects() {
      axios.get(this.ApiUrl).then(result =>{
        console.log(result.data)
        this.projects = result.data.projects
      })
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>

<template>
    <h2>Progetti</h2>
    <div class="card" v-for="project in projects">
        <h4>{{ project.title }}</h4>
        <p>{{ project.content }}</p>
    </div>
</template>

<style scoped>

h2{
    text-align: center;
    margin-top: 1rem;
}
.card{
    padding: 1rem;
    margin: 2rem 3rem;
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 6px 2px 16px -2px rgba(0,0,0,0.5);
}

</style>

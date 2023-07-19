<script>
import axios from "axios"
import ProjectCard from "../components/ProjectCard.vue"

export default {
  name: "ShowProject",
  components: {
    ProjectCard
  },
  data() {
    return {
        ApiUrl: "http://localhost:8000/api",
        project: []
    }
  },
  methods: {
    getProject() {
        axios.get(this.ApiUrl + "/projects/" + this.$route.params.id).then(result =>{
            console.log(result.data.projects)
            this.project = result.data.projects
        }).catch(err => {
            this.$router.push( { name: "not-found" } )
        })
    },
  },
  created() {
    this.getProject()
    console.log(this.project)
  }
}
</script>

<template>
    <ProjectCard :project="project" />
</template>

<style scoped>
.load{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px)!important;
    z-index: 100;
}

.load_icon{
    font-size: 5rem;
    animation: rotation 1s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
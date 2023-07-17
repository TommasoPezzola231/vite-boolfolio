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
      projects: [],
      currentPage: 0,
      lastPage: 0,
      loading: true
    }
  },
  methods: {
    getProjects(number) {

        this.loading = true
        axios.get(this.ApiUrl, {
            params: {
                page: number
            },
        }).then(result =>{
            console.log(result.data)
            this.projects = result.data.projects.data,
            this.currentPage = result.data.projects.current_page,
            this.lastPage = result.data.projects.last_page
            this.loading = false
        })
    },
    nextPage(){
        let pageNumber = this.currentPage + 1

        if( pageNumber > 0 && pageNumber <= this.lastPage ) {

            this.getProjects(pageNumber)

        }
    },
    previousPage() {
        let pageNumber = this.currentPage - 1

        if( pageNumber > 0 && pageNumber <= this.lastPage ) {

            this.getProjects(pageNumber)

        }
    }
  },
  mounted() {
    this.getProjects(this.currentPage)
  }
}
</script>

<template>
    <div v-if="loading" class="load">
        <font-awesome-icon class="load_icon" icon="fa-solid fa-spinner" />
    </div>
    <h2>Progetti</h2>
    <h5>Pagina {{ currentPage }}/{{ lastPage }}</h5>
    <div class="card" v-for="project in projects">
        <h4>{{ project.title }}</h4>
        <p>{{ project.content }}</p>
    </div>

    <div class="prova">
        <button @click="this.previousPage()">indietro</button>
        <button @click="this.nextPage()">Avanti</button>
    </div>
</template>

<style scoped>

.load{
    width: 100vw;
    max-width: 100%;
    height: 97vh;
    max-height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
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

h2{
    text-align: center;
    margin-top: 1rem;
}

h5{
    margin-left: 3rem;
}
.card{
    padding: 1rem;
    margin: 2rem 3rem;
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 6px 2px 16px -2px rgba(0,0,0,0.5);
}

.prova{
    text-align: center;
}

button{
    padding: 0.5rem;
    border-radius: 5px;
    margin: 1rem;
    background-color: greenyellow;
    cursor: pointer;
}
</style>

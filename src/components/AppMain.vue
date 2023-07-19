<script>
import axios from "axios"
import ProjectCard from "./ProjectCard.vue"

    export default {
        name: "AppMain",
        components: {
            axios,
            ProjectCard
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
                }).catch(err => {
                    this.$router.push( { name: "not-found" } )
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
        mounted () {
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
    <template v-for="project in projects">

        <ProjectCard :project="project" />
    </template>

    <div class="prova">
        <button @click="this.previousPage()">indietro</button>
        <button @click="this.nextPage()">Avanti</button>
    </div>
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

h2{
    text-align: center;
    margin-top: 1rem;
}

h5{
    margin-left: 3rem;
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
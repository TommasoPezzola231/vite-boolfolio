<script>


export default {
  name: "ProjectCard",
  props: {
    project: Object
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<template>
    <div class="card">
        <h4>{{ project.title }}</h4>
        <img class="w-50" :src=" 'http://localhost:8000/storage/' + project.image ">
        <h5>Tipo: <span class="badge text-bg-primary">{{ project.type.name ? project.type.name : 'Nessuno' }}</span></h5>

        <h6>Tecnologie:

          <template v-if="project.technologies.length > 0">
            <span class="badge text-bg-info me-2" v-for="technology in project.technologies">
              {{ technology.name }}
            </span>
          </template>
          <span v-else>
            <span class="badge text-bg-danger">Nessuna</span>
          </span>

        </h6>

        <p>{{ project.content }}</p>
    </div>
</template>

<style scoped>

.card{
    padding: 1rem;
    margin: 2rem 3rem;
    background-color: lightgray;
    border-radius: 10px;
    box-shadow: 6px 2px 16px -2px rgba(0,0,0,0.5);
}
</style>

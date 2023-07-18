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

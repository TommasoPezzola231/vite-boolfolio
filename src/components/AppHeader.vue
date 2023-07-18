<script>
    export default {
        name: "AppHeader",
        data() {
            return {

            }
        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<template>

    <nav class="navbar">
        <div class="container-fluid d-flex justify-content-between p-3">

            <span class="d-flex">
                <a class="btn btn-secondary" href="/">Home</a>
                <a class="btn btn-secondary ms-3" href="/projects">Projects</a>
            </span>

            <span class="d-flex">
                <input type="search">
                <button class="btn btn-primary" type="submit">Cerca</button>
            </span>

        </div>
    </nav>

</template>

<style scoped>

</style>
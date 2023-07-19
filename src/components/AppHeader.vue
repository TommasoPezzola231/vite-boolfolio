<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                navLinks: [
                    { routeName: '/', label: 'Home'},
                    { routeName: '/projects', label: 'Projects'}
                ]
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
                <template v-for="item in navLinks">
                    <router-link class="btn btn-secondary ms-3" :to="item.routeName">{{item.label}}</router-link>
                </template>
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
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
                <router-link class="btn btn-info" to="/contact-us">Need Help?</router-link>
            </span>

        </div>
    </nav>

</template>

<style scoped>

</style>
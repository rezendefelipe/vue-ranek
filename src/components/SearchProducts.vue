<template>
    <form>
        <input type="text" name="search" id="search" v-model="search">
        <input type="submit" value="Buscar" id="lupa" @click.prevent="handleSearch">
    </form>
</template>

<script>
export default {
    name: "SearchProducts",
    data() {
        return {
            search: ""
        }
    },
    methods: {
        handleSearch() {
            this.$router.push({ query: { id: this.search }});
        }
    }
}
</script>

<style>

</style>
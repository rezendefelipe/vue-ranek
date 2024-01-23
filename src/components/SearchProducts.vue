<template>
    <form>
        <input type="text" name="search" id="search" v-model="search" placeholder="Buscar...">
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

<style scoped>
    form {
        max-width: 600px;
        margin: 30px auto 60px auto;
        position: relative;
    }

    #search {
        width: 100%;
        padding: 20px;
        border: none;
    }

    #search:focus, #search:hover {
        transform: scale(1.1);
    }

    #lupa {
        width: 62px;
        height: 62px;
        background: url(../assets/search.svg) no-repeat center center;
        text-indent: -150px;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: none;
    }
</style>
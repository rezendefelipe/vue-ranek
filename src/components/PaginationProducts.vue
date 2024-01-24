<template>
    <div v-if="totalPages > 1" class="wrap-pagination">
        <ul>
            <li>
                <router-link :to="{ query: mountQuery(1)}">Primeira</router-link>
            </li>
            <li>
                <router-link :to="{ query: mountQuery(page)}" v-for="page in pageRange" :key="page">{{ page }}</router-link>
            </li>
            <li>
                <router-link :to="{ query: mountQuery(totalPages)}">Última</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PaginationProducts",
    props: {
        totalProducts: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 1
        },
    },
    computed: {
        totalPages() {
            const total = this.totalProducts / this.perPage;
            return total !== Infinity ? Math.ceil(total) : 0;
        },
        pageRange() {
            const current = Number(this.$route.query._page);
            const range = 6;
            const offset = Math.ceil(range / 2);
            const total = this.totalPages;
            const arrPages = [];

            for (let i = 1; i <= this.totalPages; i++) {
                arrPages.push(i)
            }

            arrPages.splice(0, current - offset);
            arrPages.splice(range, total);


            return arrPages;
        }
    },
    methods: {
        mountQuery(page) {
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },
}
</script>

<style scoped>
    .wrap-pagination {
        grid-column: 1 / -1;
    }

    li {
        display: inline-block;
    }

    li a {
        padding: 2px 8px;
        border-radius: 2px;
        margin: 4px;
    }

    li a.router-link-exact-active, li a:hover {
        background: #87f;
        color: #fff;
    }
</style>
<template>
  <main-layout page-title="My Favourites">
    <book-list v-if="books.length > 0" :books="books"></book-list>
    <h2 class="header" v-if="books.length === 0">You have no favourites</h2>
  </main-layout>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
  components: {
    BookList,
  },
  computed: {
    books() {
      console.log(this.$store.getters.favourites);
      return this.$store.getters.favourites;
    },
  },
};
</script>

<style>
.header {
    text-align: center;
    color: white;
}
</style>

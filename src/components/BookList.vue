<template>
  <ion-list>
    <book-item
      v-for="book in books"
      :key="book.key"
      :book="book"
    ></book-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import BookItem from "./BookItem.vue";

export default {
  props: ["books"],
  components: {
    IonList,
    BookItem,
  },
};
</script>
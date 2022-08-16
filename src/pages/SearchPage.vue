<template>
  <main-layout page-title="Search...">
    <ion-row>
      <ion-col>
        <ion-item>
          <ion-label>Search Category...</ion-label>
          <ion-select v-model="category" mode="ios" @ionChange="($event) => { category = $event.detail.value; term = '', getAll(category, 'a')}">
            <ion-select-option value="collection">Collection ID</ion-select-option>
            <ion-select-option value="authorname">Author</ion-select-option>
            <ion-select-option value="title">Title</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label>Search Term...</ion-label>
          <ion-input v-model="term" @ionChange="($event) => { term = $event.detail.value; getAll(category, term)}"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <book-list :books="books"></book-list>
  </main-layout>
</template>

<script>
import { getAllBooks } from "../services/api";
import { useRoute } from "vue-router";
import BookList from "../components/BookList.vue";
import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/vue";

export default {
  components: {
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInput,
    BookList,
  },
  data() {
    return {
      category: "",
      term: "",
      books: [],
    };
  },
  mounted() {
    const route = useRoute();
    const { id } = route.params;
    console.log(id);
    this.category = "collection";
    this.term = id;
    this.getAll("collection", id);
  },
  methods: {
    async getAll(category, term) {
      this.loading = true;
      let resp = await getAllBooks(category, term);
      console.log(resp);
      this.books = resp;
      this.loading = false;
    }
  },
};
</script>

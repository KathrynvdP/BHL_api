<template>
  <div>
    <template v-if="loading">
      <ion-spinner></ion-spinner>
    </template>
    <main-layout page-title="All Collections">
      <collection-list :collections="collections"></collection-list>
    </main-layout>
  </div>
</template>

<script>
import { IonSpinner } from "@ionic/vue";
import { search } from "ionicons/icons";
import CollectionList from "../components/CollectionList.vue";
import { getAllCollections } from "../services/api";

export default {
  components: {
    CollectionList,
    IonSpinner,
  },
  data() {
    return { search, loading: false, collections: [] };
  },
  mounted() {
    this.getAllColls();
  },
  methods: {
    async getAllColls() {
      this.loading = true;
      let resp = await getAllCollections();
      this.collections = resp;
      this.loading = false;
    },
  },
};
</script>

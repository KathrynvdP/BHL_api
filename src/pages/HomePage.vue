<template>
  <ion-page>
    <main-layout page-title="All Collections">
      <collection-list :collections="collections"></collection-list>
    </main-layout>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import { search } from "ionicons/icons";
import CollectionList from "../components/CollectionList.vue";
import { getAllCollections } from "../services/api";

export default {
  components: {
    CollectionList,
    IonPage,
  },
  data() {
    return { search, collections: [] };
  },
  mounted() {
    this.getAllColls();
  },
  methods: {
    async getAllColls() {
      let resp = await getAllCollections();
      this.collections = resp;
    },
  },
};
</script>

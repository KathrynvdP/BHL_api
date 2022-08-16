<template>
  <ion-list>
    <collection-item
      v-for="collection in collections"
      :key="collection.CollectionID"
      :collection="collection"
    ></collection-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import CollectionItem from "./CollectionItem.vue";

export default {
  props: ["collections"],
  components: {
    IonList,
    CollectionItem,
  },
};
</script>
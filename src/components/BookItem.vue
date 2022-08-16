<template>
  <ion-card>
    <ion-item lines="none">
      <ion-label>
        {{ book.Title }}
      </ion-label>
      <br />
      <!-- <text v-for="author in book.Authors" :key="author.Name">{{ author.Name }}</text> -->
      <ion-button fill="clear" color="primary" @click="view = !view">
        <ion-icon slot="icon-only" :icon="eye"></ion-icon>
      </ion-button>
    </ion-item>
    <div v-if="view">
      <ion-item lines="none">
        <ion-label>Genre: {{ book.Genre }}</ion-label>
      </ion-item>
      <ion-item v-for="auth of book.Authors" :key="auth.Name">
        <ion-label>Author: {{ auth.Name }}</ion-label>
      </ion-item>
    </div>
  </ion-card>
</template>

<script>
import { IonItem, IonLabel, IonButton, IonCard, IonIcon } from "@ionic/vue";
import { eye, heartOutline, heart } from "ionicons/icons";

export default {
  data() {
    return { eye, heartOutline, heart, view: false };
  },
  props: ["book"],
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonCard,
    IonIcon,
  },
  methods: {
    // async addFavourite(book) {
    //   const store = new Storage();
    //   await store.create();
    //   await store.set("favourites", book);
    //   book.favourite = true;
    // },
  },
};
</script>

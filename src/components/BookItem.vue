<template>
  <ion-card>
    <ion-item lines="none">
      <ion-label :class="view ? 'seeLabel' : ''">
        {{ book.Title }}
      </ion-label>
      <br />
      <ion-button fill="clear" color="primary" @click="view = !view">
        <ion-icon slot="icon-only" :icon="eye"></ion-icon>
      </ion-button>
      <ion-button
        v-if="!book.favourite"
        fill="clear"
        color="primary"
        @click="addFav(book)"
      >
        <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
      </ion-button>
      <ion-button
        v-if="book.favourite"
        fill="clear"
        color="primary"
        @click="removeFav(book)"
      >
        <ion-icon slot="icon-only" :icon="heart"></ion-icon>
      </ion-button>
    </ion-item>
    <div v-if="view">
      <ion-item lines="none">
        <ion-label class="seeLabel">Genre: {{ book.Genre }}</ion-label>
      </ion-item>
      <ion-item v-for="auth of book.Authors" :key="auth.Name">
        <ion-label class="seeLabel">Author: {{ auth.Name }}</ion-label>
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
    async addFav(book) {
      this.$store.dispatch("addFave", book);
      this.$router.replace("/favourites");
    },
    async removeFav(book) {
      this.$store.dispatch("removeFave", book);
      book.favourite = false;
    },
  },
};
</script>

<style>
.seeLabel {
  white-space: break-spaces !important;
}
</style>

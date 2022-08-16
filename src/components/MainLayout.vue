<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-thumbnail>
          <img src="../../public/assets/icon/logo.png" />
        </ion-thumbnail>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-row>
          <ion-col class="ion-text-center">
            <ion-button fill="clear" color="dark" router-link="/home">
              <ion-icon slot="icon-only" :icon="home"></ion-icon>
            </ion-button>
          </ion-col>
          <ion-col class="ion-text-center">
            <ion-button fill="clear" color="dark" router-link="/search/1">
              <ion-icon slot="icon-only" :icon="search"></ion-icon>
            </ion-button>
          </ion-col>
          <!-- <ion-col class="ion-text-center">
            <ion-button fill="clear" color="dark" router-link="/home">
              <ion-icon slot="icon-only" :icon="heart"></ion-icon>
            </ion-button>
          </ion-col> -->
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonThumbnail,
} from "@ionic/vue";
import { home, search, heart } from "ionicons/icons";

export default {
  data() {
    return { home, search, heart };
  },
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonThumbnail,
  },
};
</script>

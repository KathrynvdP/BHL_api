<template>
  <ion-card>
    <ion-item lines="none">
      <ion-label>
        {{ collection.CollectionName }}
      </ion-label>
      <ion-button
        fill="clear"
        color="primary"
        @click="() => router.push(`/search/${collection.CollectionID}`)"
      >
        <ion-icon slot="icon-only" :icon="eye"></ion-icon>
      </ion-button>
    </ion-item>
  </ion-card>
</template>

<script>
import { IonItem, IonLabel, IonButton, IonCard, IonIcon } from "@ionic/vue";
import { eye } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  data() {
    return { eye };
  },
  props: ["collection"],
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonCard,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
};
</script>

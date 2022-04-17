<template>
  <div class="asp-new-card-btn" @click="showAddCard = true" v-if="$q.platform.is.mobile">
    <AspIcon name="box" fill="var(--color-2)" size="4x" />
    <AspText :size="13" color="var(--color-2)" :weight="800"> New card </AspText>
  </div>
  <div class="asp-new-card-btn desktop" @click="showAddCard = true" v-if="$q.platform.is.desktop">
    <AspIcon name="box" fill="var(--color-1)" size="4x" />
    <AspText :size="13" color="var(--color-1)" :weight="800"> New card </AspText>
  </div>
  <q-dialog v-model="showAddCard" persistent full-width>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-p" :style="{ paddingLeft: '2px' }">Please enter card details</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-form
        :style="{ padding: '20px 20px 20px 20px' }"
        ref="cardform"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          v-model="firstname"
          label="Firstname"
          :dense="true"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="lastname"
          label="Lastname"
          :dense="true"
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />

        <q-card-actions align="right">
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn label="Submit" type="submit" color="primary" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { defineComponent } from "vue";

import AspIcon from "../../atoms/AspIcon.vue";
import AspText from "../../atoms/AspText.vue";

import { useCardsStore } from "stores/cards-store";
import { mapActions } from "pinia";

export default defineComponent({
  name: "AspNewcardBtn",
  components: {
    AspIcon,
    AspText
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      showAddCard: false
    };
  },
  methods: {
    ...mapActions(useCardsStore, ["addCard"]),
    onSubmit() {
      (this.$refs.cardform as any).validate().then((outcome: any) => {
        this.showAddCard = false;
        console.log(outcome);
        this.addCard(this.firstname, this.lastname);
      });
    },
    onReset() {
      this.firstname = "";
      this.lastname = "";
    }
  }
});
</script>
<style lang="scss">
div.asp-new-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &.desktop {
    background: var(--color-5);
    border-radius: 4px;
    height: 35px;
    padding: 0px 12px;
  }
}
</style>

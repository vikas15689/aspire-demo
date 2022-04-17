<template>
  <AspAccordion icon="details" label="Card details"></AspAccordion>
  <AspAccordion
    :action="true"
    actionText="View all card transactions"
    icon="recent-transactions"
    label="Recent transactions"
    :open="true"
  >
    <template #content>
      <AspTransaction
        v-for="trn in transactions"
        :key="trn.id"
        :name="trn.name"
        :amount="trn.amount"
        :colors="trn.colors"
        :type="trn.type"
        :icon="trn.icon"
        :date="trn.date"
      />
    </template>
  </AspAccordion>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspTransaction from "./../cards/AspTransaction.vue";
import AspAccordion from "./../generic/AspAccordion.vue";
import { mapState } from "pinia";

import { useTransactionStore } from "stores/transactions-store";

export default defineComponent({
  name: "AspCardAccordions",
  components: {
    AspAccordion,
    AspTransaction
  },
  computed: {
    ...mapState(useTransactionStore, ["transactions"])
  }
});
</script>

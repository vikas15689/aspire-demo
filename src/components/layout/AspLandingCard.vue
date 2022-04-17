<template>
  <AspFlex
    class="asp-landing-card"
    background="var(--color-1)"
    padding="40px"
    width="100%"
    height="100%"
    gap="46px"
  >
    <AspFlex flex="0 0 auto" height="100%" direction="column" gap="32px">
      <AspCards :noOfCards="noOfCards">
        <AspCard v-for="c in noOfCards" :key="c" />
      </AspCards>
      <AspCardActions />
    </AspFlex>
    <AspFlex flex="1 0 auto" height="100%" direction="column" gap="24px">
      <AspAccordion icon="details" label="Card details"></AspAccordion>
      <AspAccordion icon="recent-transactions" label="Recent transactions" :open="true">
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
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspFlex from "../atoms/AspFlex.vue";
import AspCards from "../molecules/cards/AspCards.vue";
import AspCard from "../molecules/cards/AspCard.vue";
import AspCardActions from "../molecules/cards/AspCardActions.vue";
import AspAccordion from "./../molecules/generic/AspAccordion.vue";
import { transactions } from "./../../boot/data";
import AspTransaction from "../molecules/cards/AspTransaction.vue";

export default defineComponent({
  name: "AspLandingCard",
  components: {
    AspFlex,
    AspCards,
    AspCard,
    AspCardActions,
    AspAccordion,
    AspTransaction
  },
  data() {
    return {
      noOfCards: 3,
      transactions
    };
  }
});
</script>
<style lang="scss">
div.asp-landing-card {
  border-radius: 8px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.08));
  border: 1px solid #fcfcfc;
}
</style>

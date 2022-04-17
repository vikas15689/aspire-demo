<template>
  <div class="asp-cards-landing-info">
    <AccountInfo />
    <AspTabs />
    <AspCards v-if="$q.platform.is.mobile" :noOfCards="noOfCards">
      <AspCard v-for="c in noOfCards" :key="c" />
    </AspCards>
    <AspFlex v-if="$q.platform.is.desktop" padding="24px" width="100%" flex="1 0 auto">
      <AspLandingCard />
    </AspFlex>
  </div>
  <AspActions v-if="$q.platform.is.mobile">
    <AspCardActions />
    <AspFlex padding="24px" gap="24px" width="100%" direction="column">
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
  </AspActions>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspLandingCard from "components/layout/AspLandingCard.vue";
import AccountInfo from "components/molecules/account/AspAccountInfo.vue";
import AspTabs from "components/molecules/account/AspTabs.vue";
import AspCard from "components/molecules/cards/AspCard.vue";
import AspCards from "components/molecules/cards/AspCards.vue";
import AspActions from "components/molecules/generic/AspActions.vue";
import AspCardActions from "components/molecules/cards/AspCardActions.vue";
import AspFlex from "components/atoms/AspFlex.vue";
import AspAccordion from "components/molecules/generic/AspAccordion.vue";
import AspTransaction from "components/molecules/cards/AspTransaction.vue";
import { transactions } from "../boot/data";

export default defineComponent({
  name: "Landing",
  components: {
    AccountInfo,
    AspTabs,
    AspCard,
    AspCards,
    AspActions,
    AspCardActions,
    AspFlex,
    AspAccordion,
    AspTransaction,
    AspLandingCard
  },
  data() {
    return {
      noOfCards: 10,
      transactions
    };
  }
});
</script>
<style lang="scss">
.asp-cards-landing-info {
  padding-bottom: 24px;
  position: sticky;
  top: 0px;

  @media only screen and (min-width: 768px) {
    flex: 1 0 auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
  }
}
</style>

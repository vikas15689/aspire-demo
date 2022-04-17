<template>
  <div class="asp-cards-landing-info">
    <AccountInfo />
    <AspTabs />
    <AspCards v-if="$q.platform.is.mobile"> </AspCards>
    <AspFlex v-if="$q.platform.is.desktop" padding="24px" width="100%" flex="1 0 auto">
      <AspCardDetails />
    </AspFlex>
  </div>
  <AspActions v-if="$q.platform.is.mobile">
    <AspCardActions />
    <AspFlex padding="24px" gap="24px" width="100%" direction="column">
      <AspCardAccordions></AspCardAccordions>
    </AspFlex>
  </AspActions>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AccountInfo from "components/molecules/account/AspAccountInfo.vue";
import AspTabs from "components/molecules/account/AspTabs.vue";
import AspCards from "components/molecules/cards/AspCards.vue";
import AspActions from "components/molecules/generic/AspActions.vue";
import AspCardActions from "components/molecules/cards/AspCardActions.vue";
import AspFlex from "components/atoms/AspFlex.vue";
import AspCardAccordions from "components/molecules/cards/AspCardAccordions.vue";
import AspCardDetails from "components/molecules/cards/desktop/AspCardDetails.vue";

export default defineComponent({
  name: "Landing",
  components: {
    AccountInfo,
    AspTabs,
    AspCards,
    AspActions,
    AspCardActions,
    AspFlex,
    AspCardDetails,
    AspCardAccordions
  },
  data() {
    return {
      noOfCards: 3
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

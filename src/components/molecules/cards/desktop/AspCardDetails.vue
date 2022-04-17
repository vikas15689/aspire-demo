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
      <AspCardAccordions />
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspFlex from "components/atoms/AspFlex.vue";
import AspCards from "components/molecules/cards/AspCards.vue";
import AspCard from "components/molecules/cards/AspCard.vue";
import AspCardActions from "components/molecules/cards/AspCardActions.vue";
import AspCardAccordions from "components/molecules/cards/AspCardAccordions.vue";

export default defineComponent({
  name: "AspCardDetails",
  components: {
    AspFlex,
    AspCards,
    AspCard,
    AspCardActions,
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
div.asp-landing-card {
  border-radius: 8px;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.08));
  border: 1px solid #fcfcfc;
}
</style>

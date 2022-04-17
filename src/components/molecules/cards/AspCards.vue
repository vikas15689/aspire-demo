<template>
  <AspFlex direction="column" gap="16px" width="100%">
    <div class="asp-cards" ref="cards-conatiner" @scroll="handleMove">
      <AspCard
        v-for="c in cards"
        :key="c.id"
        :firstname="c.firstname"
        :lastname="c.lastname"
        :number="c.number"
        :thru="c.thru"
        :cvv="c.cvv"
        :freeze="c.freeze"
      />
    </div>
    <AspFlex gap="8px" align="center" width="100%" class="asp-cards__dot-container">
      <!-- <div class="asp-cards__dot asp-cards__dot-active"></div> -->
      <div
        v-for="(d, idx) in cards"
        :key="d.id"
        class="asp-cards__dot"
        :class="{ 'asp-cards__dot-active': activeCard === idx + 1 }"
      ></div>
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspFlex from "components/atoms/AspFlex.vue";
import AspCard from "components/molecules/cards/AspCard.vue";
import { useCardsStore } from "stores/cards-store";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  name: "AspCards",
  computed: {
    ...mapState(useCardsStore, {
      cards: "cardsByaddedOn",
      noOfCards: store => store.cardsByaddedOn.length,
      activeCard: "activeCard"
    })
  },
  components: {
    AspFlex,
    AspCard
  },
  methods: {
    ...mapActions(useCardsStore, ["setActiveCard"]),
    handleMove() {
      const container = this.$refs["cards-conatiner"] as HTMLElement;
      let activeCard = +(container.scrollLeft / 350).toFixed(0) + 1;
      if (activeCard > this.noOfCards) {
        activeCard = this.noOfCards;
      }
      this.setActiveCard(activeCard);
    }
  }
});
</script>
<style lang="scss">
div.asp-cards {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
  overflow: auto;
  padding: 24px 24px 0px;
  flex: 1 0 auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  scrollbar-width: none;

  &__dot {
    height: 8px;
    width: 8px;
    border-radius: 8px;
    background-color: var(--app-primary);
    opacity: 0.1;

    &-active {
      opacity: 1;
      width: 16px;
    }
  }
  &__dot-container {
    @media only screen and (min-width: 768px) {
      max-width: 414px;
    }
  }
  @media only screen and (min-width: 768px) {
    max-width: 414px;
    padding: 24px 0px 0px 0px;
  }
}
</style>

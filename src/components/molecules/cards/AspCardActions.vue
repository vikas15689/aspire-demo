<template>
  <AspFlex
    class="asp-card-actions"
    align="space-between center"
    width="414px"
    height="116px"
    background="var(--color-8)"
    padding="0px 12px"
    gap="12px"
  >
    <AspFlex direction="column" gap="8px" align="center" width="60px" @click="toggleCardFreeze">
      <AspIcon name="freezecard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >{{ cardInstance.freeze ? "Unfreeze" : "Freeze" }} card
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="spendlimit" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Set spend limit
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="gpay" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Add to GPay
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="replacecard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Replace card
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px" @click="showConfirm = true">
      <AspIcon name="cancelcard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Cancel card
      </AspText>
    </AspFlex>
    <q-dialog v-model="showConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center" v-if="cards.length > 1">
          <span class="q-ml-sm">Are you sure you want to Cancel this card?</span>
        </q-card-section>
        <q-card-section v-if="cards.length === 1" class="row items-center">
          <span class="q-ml-sm">You must have atleast one card</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-if="cards.length > 1" flat label="No" v-close-popup />
          <q-btn
            flat
            :label="cards.length > 1 ? 'Yes' : 'Ok'"
            color="primary"
            @click="cancelActiveCard"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspFlex from "components/atoms/AspFlex.vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspText from "components/atoms/AspText.vue";

import { useCardsStore } from "stores/cards-store";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  name: "AspCardActions",
  components: {
    AspFlex,
    AspIcon,
    AspText
  },
  data() {
    return {
      showConfirm: false
    };
  },
  computed: {
    ...mapState(useCardsStore, {
      cards: "cardsByaddedOn",
      activeCard: "activeCard",
      cardInstance: state => state.cardsByaddedOn[state.activeCard - 1]
    })
  },
  methods: {
    ...mapActions(useCardsStore, ["toggleFreeze", "cancelCard"]),
    toggleCardFreeze() {
      this.toggleFreeze(this.cardInstance.id, !this.cardInstance.freeze);
    },
    cancelActiveCard() {
      if (this.cards.length > 1) {
        this.cancelCard(this.cardInstance.id);
      }
    }
  }
});
</script>
<style lang="scss">
@media only screen and (min-width: 768px) {
  .asp-card-actions {
    border-radius: 16px;
  }
}
.asp-card-actions {
  max-width: 100%;
}
</style>

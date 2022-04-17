<template>
  <div class="asp-card">
    <div class="asp-card__content" :style="style">
      <div class="asp-card__content__brand">
        <AspSvg name="aspire-card-logo" fill="var(--color-1)" :size="[74, 21]" />
      </div>
      <AspText :size="22" :weight="800">{{ firstname }} {{ lastname }}</AspText>
      <AspFlex align="flex-start center" padding="24px 0px 0px 0px" gap="24px">
        <template v-if="!showCardNumber">
          <AspText :size="52" :weight="800" class="asp-card__content__dot"
            >&#183;&#183;&#183;&#183;</AspText
          >
          <AspText :size="52" :weight="800" class="asp-card__content__dot"
            >&#183;&#183;&#183;&#183;</AspText
          >
          <AspText :size="52" :weight="800" class="asp-card__content__dot"
            >&#183;&#183;&#183;&#183;</AspText
          >
          <AspText :size="14" :weight="800" class="asp-card__content__last-four">{{
            cardNumberArray[3]
          }}</AspText>
        </template>
        <AspText
          v-else
          v-for="(num, idx) in cardNumberArray"
          :key="idx"
          :size="14"
          :weight="800"
          class="asp-card__content__last-four"
          >{{ num }}</AspText
        >
      </AspFlex>
      <AspFlex align="flex-start center" padding="17px 0px 0px 0px" gap="30px">
        <AspText :size="14" :weight="800">Thru: {{ thru }}</AspText>

        <AspFlex align="center" height="14px" gap="4px">
          <AspText :size="14" :weight="800">CVV: </AspText>
          <AspText :size="36" :weight="800" :lineHeight="'14px'" :style="{ paddingTop: '14px' }">
            ***
          </AspText>
        </AspFlex>
      </AspFlex>
      <div class="asp-card__content__logo">
        <AspSvg name="visa" :size="[59, 20]" />
      </div>
    </div>
    <div class="asp-card__show-number" @click="showCardNumber = !showCardNumber">
      <AspIcon name="eye" size="4x" />
      <AspText :size="12" :weight="500" color="var(--app-primary)"
        >{{ showCardNumber ? "Hide" : "Show" }} card number</AspText
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AspSvg from "components/atoms/AspSvg.vue";
import AspText from "components/atoms/AspText.vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspFlex from "components/atoms/AspFlex.vue";

export default defineComponent({
  name: "AspCard",
  components: {
    AspSvg,
    AspText,
    AspIcon,
    AspFlex
  },
  props: {
    background: {
      type: String,
      default: "var(--app-primary)"
    },
    firstname: String,
    lastname: String,
    number: { type: String as PropType<string>, required: true },
    thru: String,
    cvv: String
  },
  data() {
    return {
      showCardNumber: false
    };
  },
  computed: {
    style() {
      return {
        backgroundColor: this.background
      };
    },
    cardNumberArray() {
      const cardNumber = [...this.number];
      const cardNumberChunks: string[] = [];
      cardNumberChunks.push(cardNumber.slice(0, 4).join(""));
      cardNumberChunks.push(cardNumber.slice(4, 8).join(""));
      cardNumberChunks.push(cardNumber.slice(8, 12).join(""));
      cardNumberChunks.push(cardNumber.slice(12, 16).join(""));
      return cardNumberChunks;
    }
  }
});
</script>
<style lang="scss">
.asp-card {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;

  width: 414px;
  height: 220px;

  position: relative;

  // z-index: 2;
  overflow: visible;

  @media screen and (max-width: 400px) {
    width: 340px;
  }

  &__content {
    padding: 24px;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    border-radius: 12px;
    // gap: 24px;

    &__brand {
      display: flex;
      justify-content: flex-end;
      padding-bottom: 24px;
    }

    z-index: 2;

    &__dot {
      line-height: 18px !important;
      letter-spacing: -1px;
    }

    &__last-four {
      letter-spacing: 4px;
    }

    &__logo {
      display: flex;
      justify-content: flex-end;
      margin-top: auto;
    }
  }

  &__show-number {
    cursor: pointer;
    display: flex;
    padding: 6px 10px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    gap: 6px;
    align-items: flex-start;

    width: 150px;
    height: 40px;

    background-color: var(--color-1);
    top: -24px;
    right: 0px;
    position: absolute;
    z-index: 1;
  }
}
</style>

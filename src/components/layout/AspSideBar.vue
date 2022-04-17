<template>
  <AspFlex
    padding="48px"
    direction="column"
    width="340px"
    height="100%"
    gap="80px"
    background="var(--app-background)"
  >
    <AspFlex direction="column" gap="20px">
      <AspSvg name="aspire-card-logo" fill="var(--app-primary)" :size="[125, 35]" />
      <AspText :size="15" :weight="400" class="asp-subtitle">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </AspText>
    </AspFlex>
    <AspFlex gap="62px" direction="column">
      <AspFlex gap="16px" align="flex-start center">
        <AspIcon name="Logo" size="6x" fill="var(--color-4)" />
        <AspText :size="16" color="var(--color-4)" :weight="500">Home</AspText>
      </AspFlex>
      <AspFlex gap="16px" align="flex-start center">
        <AspIcon name="pay" size="6x" fill="var(--app-primary)" />
        <AspText :size="16" color="var(--app-primary)" :weight="600">Cards</AspText>
      </AspFlex>
      <AspFlex gap="16px" align="flex-start center">
        <AspIcon name="payments" size="6x" fill="var(--color-4)" />
        <AspText :size="16" color="var(--color-4)" :weight="500">Payments</AspText>
      </AspFlex>
      <AspFlex gap="16px" align="flex-start center">
        <AspIcon name="credit" size="6x" fill="var(--color-4)" />
        <AspText :size="16" color="var(--color-4)" :weight="500">Credit</AspText>
      </AspFlex>
      <AspFlex gap="16px" align="flex-start center">
        <AspIcon name="account" size="6x" fill="var(--color-4)" />
        <AspText :size="16" color="var(--color-4)" :weight="500">Profile</AspText>
      </AspFlex>
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspFlex from "../atoms/AspFlex.vue";
import AspSvg from "../atoms/AspSvg.vue";
import AspText from "../atoms/AspText.vue";
import AspIcon from "../atoms/AspIcon.vue";

export default defineComponent({
  name: "AspSideBar",
  components: {
    AspFlex,
    AspSvg,
    AspText,
    AspIcon
  }
});
</script>
<style lang="scss">
.asp-subtitle {
  opacity: 0.3;
}
</style>

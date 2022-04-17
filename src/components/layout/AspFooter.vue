<template>
  <div class="asp-footer">
    <AspFlex direction="column" gap="4px" align="center">
      <AspIcon name="Logo" size="6x" fill="var(--color-4)" />
      <AspText :size="9" color="var(--color-4)" :weight="600">Home</AspText>
    </AspFlex>
    <AspFlex direction="column" gap="4px" align="center">
      <AspIcon name="pay" size="6x" fill="var(--app-primary)" />
      <AspText :size="9" color="var(--app-primary)" :weight="600">Cards</AspText>
    </AspFlex>
    <AspFlex direction="column" gap="4px" align="center">
      <AspIcon name="payments" size="6x" fill="var(--color-4)" />
      <AspText :size="9" color="var(--color-4)" :weight="600">Payments</AspText>
    </AspFlex>
    <AspFlex direction="column" gap="4px" align="center">
      <AspIcon name="credit" size="6x" fill="var(--color-4)" />
      <AspText :size="9" color="var(--color-4)" :weight="600">Credit</AspText>
    </AspFlex>
    <AspFlex direction="column" gap="4px" align="center">
      <AspIcon name="account" size="6x" fill="var(--color-4)" />
      <AspText :size="9" color="var(--color-4)" :weight="600">Profile</AspText>
    </AspFlex>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspIcon from "../atoms/AspIcon.vue";
import AspFlex from "../atoms/AspFlex.vue";
import AspText from "../atoms/AspText.vue";

export default defineComponent({
  name: "AspFooter",
  components: {
    AspIcon,
    AspFlex,
    AspText
  }
});
</script>
<style lang="scss">
div.asp-footer {
  background-color: var(--app-footer-background);
  display: flex;
  flex: 0 0 auto;
  height: 56px;
  align-items: center;
  filter: drop-shadow(0 -3pt 6pt rgba(0, 0, 0, 0.08));
  margin-top: auto;
  justify-content: space-around;
  z-index: 3;
  position: sticky;
  bottom: 0px;
}
</style>

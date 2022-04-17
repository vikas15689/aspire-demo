<template>
  <AspFlex width="100%" direction="column" background="var(--color-1)" class="asp-actions">
    <slot />
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspFlex from "./../../atoms/AspFlex.vue";

export default defineComponent({
  name: "AspActions",
  components: {
    AspFlex
  }
});
</script>
<style lang="scss">
.asp-actions {
  // position: fixed;
  // top: 480px;
  z-index: 2;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>

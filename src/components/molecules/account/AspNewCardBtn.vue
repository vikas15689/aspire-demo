<template>
  <div class="asp-new-card-btn" v-if="$q.platform.is.mobile">
    <AspIcon name="box" fill="var(--color-2)" size="4x" />
    <AspText :size="13" color="var(--color-2)" :weight="800"> New card </AspText>
  </div>
  <div class="asp-new-card-btn desktop" v-if="$q.platform.is.desktop">
    <AspIcon name="box" fill="var(--color-1)" size="4x" />
    <AspText :size="13" color="var(--color-1)" :weight="800"> New card </AspText>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspIcon from "../../atoms/AspIcon.vue";
import AspText from "../../atoms/AspText.vue";

export default defineComponent({
  name: "AspNewcardBtn",
  components: {
    AspIcon,
    AspText
  }
});
</script>
<style lang="scss">
div.asp-new-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &.desktop {
    background: var(--color-5);
    border-radius: 4px;
    height: 35px;
    padding: 0px 12px;
  }
}
</style>

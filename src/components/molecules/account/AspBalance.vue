<template>
  <div class="asp-balance">
    <div class="asp-balance__currency">
      <AspText :size="12" :weight="800">s$</AspText>
    </div>
    <AspText
      :size="24"
      :weight="800"
      :color="$q.platform.is.mobile ? 'var(--color-1)' : 'var(--color-11)'"
      >3,000</AspText
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspText from "components/atoms/AspText.vue";

export default defineComponent({
  name: "AspBalance",
  components: {
    AspText
  }
});
</script>
<style lang="scss">
div.asp-balance {
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  align-items: center;

  &__currency {
    display: inline-flex;
    width: 40px;
    height: 22px;
    justify-content: center;
    align-items: center;
    background-color: var(--app-primary);
    border-radius: 4px;
  }
}
</style>

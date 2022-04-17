<template>
  <div class="asp-account">
    <div class="asp-account__info">
      <AspText :weight="600" :color="$q.platform.is.mobile ? 'var(--color-1)' : 'var(--color-11)'"
        >Account balance</AspText
      >
      <AspIcon v-if="$q.platform.is.mobile" name="Logo" size="6x" fill="var(--app-primary)" />
    </div>
    <div class="asp-account__actions">
      <AspBalance />
      <AspNewCardBtn />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspText from "components/atoms/AspText.vue";
import AspBalance from "./AspBalance.vue";
import AspNewCardBtn from "./AspNewCardBtn.vue";

export default defineComponent({
  name: "AspAccountInfo",
  components: {
    AspIcon,
    AspText,
    AspBalance,
    AspNewCardBtn
  }
});
</script>
<style lang="scss">
div.asp-account {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 18px;
  padding: 24px;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-grow: 0;
    flex-shrink: 0;
  }

  &__actions {
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

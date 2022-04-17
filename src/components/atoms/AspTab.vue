<template>
  <div class="asp-tab">
    <AspText
      :size="13"
      :weight="selected ? 800 : 300"
      :color="selected ? selectedTextColor : 'var(--color-7)'"
    >
      {{ name }}
    </AspText>
    <hr v-if="selected" class="asp-tab__selected" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspText from "./AspText.vue";

export default defineComponent({
  name: "AppFooter",
  components: {
    AspText
  },
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  computed: {
    selectedTextColor() {
      return this.$q.platform.is.mobile ? "var(--color-1)" : "var(--color-11)";
    }
  }
});
</script>
<style lang="scss">
.asp-tab {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 6px;

  &__selected {
    border: 1px solid var(--color-2);
    height: 0px;
    margin: 0px;
    border-style: solid;
    border-radius: 2px;
  }
}
</style>

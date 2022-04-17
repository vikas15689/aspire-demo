<template>
  <AspFlex direction="column" width="100%">
    <AspFlex
      class="asp-accordion"
      :data-open="open"
      background="var(--color-9)"
      height="72px"
      width="100%"
      padding="24px"
      align="space-between center"
    >
      <AspFlex gap="12px" align="flex-start center">
        <AspIcon :name="icon" size="6x" />
        <AspText :size="14" color="var(--color-3)" :weight="600">{{ label }}</AspText>
      </AspFlex>
      <AspIcon
        name="down-arrow"
        size="5x"
        class="asp-accordion__toggle"
        :class="{ 'asp-accordion__toggle-open': open }"
        @click="$emit('toggle')"
      />
    </AspFlex>
    <AspFlex
      v-if="open"
      class="asp-accordion-content"
      width="100%"
      direction="column"
      padding="24px"
      gap="16px"
    >
      <slot name="content" />
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspFlex from "components/atoms/AspFlex.vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspText from "components/atoms/AspText.vue";

export default defineComponent({
  name: "AspAccordion",
  components: {
    AspFlex,
    AspIcon,
    AspText
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: false
    }
  }
});
</script>
<style lang="scss">
.asp-accordion {
  border: 1px solid var(--color-10);
  border-radius: 8px;
  // filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.04));

  &__toggle {
    transform: rotate(180deg);
    transform-origin: center;

    &-open {
      transform: rotate(0deg);
    }
  }

  &[data-open="true"] {
    border-radius: 0px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
}

.asp-accordion-content {
  border-left: 1px solid var(--color-10);
  border-right: 1px solid var(--color-10);
  border-bottom: 1px solid var(--color-10);

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>

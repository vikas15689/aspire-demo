<template>
  <div v-html="icon" class="asp-icon" :data-size="size" :style="style"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const svgIndex = import.meta.globEager("./../../assets/svg/*.svg");

export default defineComponent({
  name: "AspIcon",
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: String as PropType<string>,
      default: "4x",
      validator(value: string) {
        return ["x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"].includes(value);
      }
    },
    fill: {
      type: String as PropType<string | null>,
      default: null
    }
  },
  computed: {
    icon(): string {
      return svgIndex[`./../../assets/svg/${this.name}.svg`].default;
    },
    style() {
      return {
        fill: (this as any).fill
      };
    }
  }
});
</script>
<style lang="scss">
$sizes: (
  "x": 4px,
  "2x": 8px,
  "3x": 12px,
  "4x": 16px,
  "5x": 20px,
  "6x": 24px,
  "7x": 28px,
  "8x": 32px
);

div.asp-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  @each $size, $unit in $sizes {
    &[data-size="#{$size}"] {
      > svg {
        height: $unit;
        width: $unit;
        fill: inherit;
      }
    }
  }
}
</style>

<template>
  <div v-html="icon" class="asp-svg" :style="style"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

const svgIndex = import.meta.globEager("./../../assets/svg/*.svg");

export default defineComponent({
  name: "AspSvg",
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: Array as PropType<number[]>,
      default: () => {
        return [24, 24];
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
        width: `${this.size[0]}px`,
        height: `${this.size[1]}px`,
        fill: this.fill
      };
    }
  }
});
</script>
<style lang="scss">
div.asp-svg {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: inherit;
    width: inherit;
  }
}
</style>

<template>
  <div class="asp-text" :style="style" :data-inline="inline">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StyleValue } from "./types";

export default defineComponent({
  name: "AspText",
  props: {
    size: {
      type: Number,
      default: 14
    },
    color: {
      type: String,
      default: "var(--color-1)"
    },
    weight: {
      type: Number,
      default: 300
    },
    inline: {
      type: Boolean,
      default: false
    },
    lineHeight: {
      type: String,
      default: "1.2"
    },
    align: {
      type: String,
      default: null
    }
  },
  computed: {
    style(): StyleValue {
      return {
        fontSize: `${this.size}px`,
        lineHeight: this.lineHeight,
        color: this.color,
        fontWeight: `${this.weight}`,
        textAlign: this.align
      };
    }
  }
});
</script>
<style lang="scss">
div.asp-text {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &[data-inline] {
    display: inline-flex;
  }
}
</style>

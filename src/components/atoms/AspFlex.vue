<template>
  <div class="asp-flex" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type StyleValue = {
  [key: string]: string;
};
export default defineComponent({
  name: "AspFlex",
  props: {
    padding: {
      type: String,
      default: "0px"
    },
    gap: {
      type: String,
      default: "0px"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    overflow: {
      type: String,
      default: "hidden"
    },
    direction: {
      type: String,
      default: "row"
    },
    flex: {
      type: String,
      default: "0 0 auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    width: {
      type: String,
      default: "auto"
    },
    background: {
      type: String,
      default: "unset"
    }
  },
  computed: {
    style(): StyleValue {
      let [justifyContent, alignItems] = this.align.split(" ");
      if (!alignItems) {
        alignItems = justifyContent;
      }
      return {
        padding: this.padding,
        gap: this.gap,
        overflow: this.overflow,
        flexDirection: this.direction,
        flex: this.flex,
        justifyContent,
        alignItems,
        height: this.height,
        width: this.width,
        background: this.background
      };
    }
  }
});
</script>
<style lang="scss">
div.asp-flex {
  display: flex;
}
</style>

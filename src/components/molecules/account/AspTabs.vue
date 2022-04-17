<template>
  <div class="asp-tabs">
    <AspTab name="My debit cards" :selected="true" />
    <AspTab name="All company cards" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspTab from "components/atoms/AspTab.vue";

export default defineComponent({
  name: "AspTabs",
  components: {
    AspTab
  }
});
</script>
<style lang="scss">
div.asp-tabs {
  display: flex;
  padding: 24px;
  gap: 24px;
}
</style>

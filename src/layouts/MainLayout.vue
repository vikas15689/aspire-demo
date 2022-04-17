<template>
  <div class="asp-layout" v-if="$q.platform.is.mobile">
    <router-view />
    <AspFooter />
  </div>
  <div class="asp-layout desktop" v-if="$q.platform.is.desktop">
    <AspSideBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AspFooter from "components/layout/AspFooter.vue";
import AspSideBar from "components/layout/AspSideBar.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    AspFooter,
    AspSideBar
  }
});
</script>
<style lang="scss">
.asp-layout {
  display: flex;
  flex-direction: column;
  height: inherit;
  background-color: var(--app-background);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  scrollbar-width: none;

  &.desktop {
    flex-direction: row;
    background-color: var(--color-1);
  }
}
</style>

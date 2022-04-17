<template>
  <AspFlex
    class="asp-card-actions"
    align="space-between center"
    width="414px"
    height="116px"
    background="var(--color-8)"
    padding="0px 12px"
    gap="12px"
  >
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="freezecard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Freeze card
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="spendlimit" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Set spend limit
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="gpay" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Add to GPay
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="replacecard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Replace card
      </AspText>
    </AspFlex>
    <AspFlex direction="column" gap="8px" align="center" width="60px">
      <AspIcon name="cancelcard" size="8x" fill="var(--color-3)" />
      <AspText :size="13" color="var(--color-3)" align="center" line-height="1.3" :weight="400"
        >Cancel card
      </AspText>
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AspFlex from "components/atoms/AspFlex.vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspText from "components/atoms/AspText.vue";

export default defineComponent({
  name: "AspCardActions",
  components: {
    AspFlex,
    AspIcon,
    AspText
  }
});
</script>
<style lang="scss">
@media only screen and (min-width: 768px) {
  .asp-card-actions {
    border-radius: 16px;
  }
}
.asp-card-actions {
  max-width: 100%;
}
</style>

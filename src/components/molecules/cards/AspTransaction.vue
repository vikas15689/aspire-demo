<template>
  <AspFlex class="asp-transaction" gap="12px" width="100%">
    <div class="asp-transaction-icon" :style="style">
      <AspIcon :name="icon" :fill="colors[1]"></AspIcon>
    </div>
    <AspFlex gap="4px" direction="column" flex="1 0 auto">
      <AspText :size="14" color="var(--color-11)" :weight="600">{{ name }}</AspText>
      <AspText :size="13" color="var(--color-7)" :weight="400">{{ date }}</AspText>
      <AspFlex gap="8px" padding="8px 0px 0px 0px" align="flex-start center">
        <div class="asp-transaction-type">
          <AspIcon name="bcard" size="2x"></AspIcon>
        </div>
        <AspText :size="12" :weight="600" color="var(--color-5)">Charged to debit card</AspText>
      </AspFlex>
    </AspFlex>
    <AspFlex gap="10px" align="flex-end center">
      <AspText
        :size="14"
        :weight="800"
        :color="type === 'debit' ? 'var(--color-11)' : 'var(--app-primary)'"
      >
        {{ type === "debit" ? "-" : "+" }} {{ amount }}
      </AspText>
      <AspIcon name="next" size="3x" />
    </AspFlex>
  </AspFlex>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import AspText from "components/atoms/AspText.vue";
import AspIcon from "components/atoms/AspIcon.vue";
import AspFlex from "components/atoms/AspFlex.vue";

type StyleValue = {
  [key: string]: string;
};
export default defineComponent({
  name: "AspTransaction",
  components: {
    AspFlex,
    AspIcon,
    AspText
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    colors: {
      type: Array as PropType<string[]>,
      default: () => {
        return [];
      }
    },
    type: {
      type: String as PropType<"credit" | "debit">,
      default: "debit"
    },
    amount: {
      type: String as PropType<string>,
      default: "0"
    }
  },
  computed: {
    style(): StyleValue {
      return {
        background: (this.colors as string[])[0]
      };
    }
  }
});
</script>
<style lang="scss">
.asp-transaction-icon {
  height: 48px;
  width: 48px;
  border-radius: 50%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.asp-transaction-type {
  width: 24px;
  height: 20px;
  border-radius: 10px;
  background: var(--color-5);

  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.asp-transaction {
  &:not(:last-child) {
    padding-bottom: 8px !important;
    border-bottom: 1px solid var(--color-10);
  }
}
</style>

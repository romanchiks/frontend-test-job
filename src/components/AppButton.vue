<template>
  <label class="button-container">
    <slot name="img" class="img-container"></slot>
    <button :class="getButtonStyle">
      <slot name="text"></slot>
    </button>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppButton",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getButtonStyle() {
      return {
        active: this.active,
        underline: this.underline,
      };
    },
  },
});
</script>

<style scoped>
.button-container {
  background-color: inherit;

  display: flex;
  align-items: center;
}

.img-container {
  background-color: inherit;

  height: 24px;
}

button {
  font-size: inherit;
  line-height: inherit;

  border-style: none;
  background-color: inherit;
  color: #acacac;
}

button:hover {
  animation: bounce 0.5s;
}

button:active {
  border-radius: 3px;
  background-color: #e9e9e9;
}

.active {
  color: #333333;
}

.underline {
  border-bottom: 1px dashed #acacac;
}

.active.underline {
  border-color: #333333;
}
</style>

<template>
  <label class="input-container">
    <slot class="img-container"></slot>
    <input
      type="text"
      :placeholder="placeholderText"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppInput",
  emits: ["update:value"],
  props: {
    placeholderText: {
      type: String,
      default: "Введите значение",
    },
    value: {
      type: String,
    },
  },
});
</script>

<style scoped>
.input-container {
  background-color: #eceff0;
  height: 34px;
  border-radius: inherit;
  display: flex;
  align-items: center;
}

.img-container {
  background-color: inherit;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 4px;
  margin-left: 3px;
  height: 24px;
}

input {
  color: #acacac;
  border-style: none;
  background-color: inherit;
  heigth: 16px;
  width: 100%;
  margin: 0 3px;
}

input:focus {
  outline: none;
}
</style>

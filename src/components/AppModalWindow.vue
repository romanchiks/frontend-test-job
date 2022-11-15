<template>
  <div>
    <div class="modal-bg" :style="checkView()">
      <div class="modal-container">
        <p class="modal-text">
          <slot></slot>
        </p>
        <div class="button-container">
          <button class="confirm" @click="$emit('confirm')">Да</button>
          <button class="reject" @click="$emit('reject')">Нет</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppModalWindow",
  emits: ["confirm", "reject"],
  props: {
    view: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkView() {
      if (!this.view) {
        return {
          display: "none",
        };
      }
    },
  },
});
</script>

<style scoped>
.modal-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(172, 172, 172, 0.5);
  position: fixed;
  left: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.modal-container {
  border-radius: 8px;
  background-color: #ffffff;
  min-width: 353px;
  min-height: 134px;
}

.modal-text {
  color: #000000;
  margin-left: 36px;
  margin-top: 36px;
  margin-right: 36px;
  margin-bottom: 24px;
}

.button-container {
  min-width: 100%;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border-radius: 3px;
  border-style: none;
  min-width: 88px;
  min-height: 27px;
}

.confirm {
  background-color: #e0e0e0;
  margin-right: 36px;
}

.reject {
  color: #ffffff;
  background-color: #0cb4f1;
}
</style>

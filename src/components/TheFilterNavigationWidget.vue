<template>
  <div class="nav-widget">
    <app-button
      :underline="true"
      @click="updateList('back')"
      class="nav-button"
    >
      <template #text>Назад</template>
    </app-button>
    <app-button
      :underline="true"
      @click="updateList('next')"
      class="nav-button"
    >
      <template #text>Вперёд</template>
    </app-button>
    <span class="nav-text">Страница {{ currentList }} из {{ allLists }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

import AppButton from "./AppButton.vue";

export default defineComponent({
  name: "TheFilterNavigationWidget",
  components: {
    AppButton,
  },
  computed: mapGetters({
    currentList: "currentList",
    allLists: "allLists",
  }),
  methods: mapMutations({
    updateList: "updateList",
  }),
});
</script>

<style scoped>
.nav-widget {
  font-size: 10px;
  line-height: 14px;
  height: 14px;
  display: flex;
  align-items: center;
}

.nav-text {
  font-size: inherit;
  line-height: inherit;
  width: inherit;
}

.nav-button {
  font-size: inherit;
  line-height: inherit;
  margin-right: 9px;
}
</style>

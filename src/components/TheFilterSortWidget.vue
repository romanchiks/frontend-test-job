<template>
  <div class="sort-widget">
    <span class="sort-text">Сортировка:</span>
    <app-button
      :active="stateRegDateButton"
      :underline="true"
      @click="sortByRegDate()"
      class="sort-button"
    >
      <template #text> Дата регистрации </template>
    </app-button>
    <app-button
      :active="stateRatingButton"
      :underline="true"
      @click="sortByRating()"
      class="sort-button"
    >
      <template #text> Рейтинг </template>
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

import AppButton from "./AppButton.vue";

export default defineComponent({
  name: "TheFilterSortWidget",
  components: {
    AppButton,
  },
  computed: mapGetters({
    stateRegDateButton: "stateRegDateButton",
    stateRatingButton: "stateRatingButton",
  }),
  methods: mapMutations({
    sortByRegDate: "sortByRegDate",
    sortByRating: "sortByRating",
  }),
});
</script>

<style scoped>
.sort-widget {
  font-size: 10px;
  line-height: 14px;
  height: 14px;
  display: flex;
  align-items: center;
}

.sort-text {
  font-size: inherit;
  line-height: inherit;
  margin-right: 8px;
  width: inherit;
}

.sort-button {
  font-size: inherit;
  line-height: inherit;
  margin-right: 9px;
}
</style>

<template>
  <div class="search-widget">
    <app-input
      class="input-filter"
      :placeholderText="'Поиск по имени или e-mail'"
      :value="searchString"
      @input="
        updateInputValue($event);
        searchUsers(searchString);
        updateList();
      "
    >
      <img src="../assets/search-icon.svg" />
    </app-input>
    <app-button class="clear-filter" :active="true" @click="clearFilters()">
      <template #img>
        <img src="../assets/clean.svg" />
      </template>
      <template #text> Очистить фильтр</template>
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

import AppButton from "./AppButton.vue";
import AppInput from "./AppInput.vue";

export default defineComponent({
  name: "TheFilterSearchWidget",
  components: {
    AppButton,
    AppInput,
  },
  //mapGetters(["searchString", "stateRegDateButton", "stateRatingButton"]),
  computed: mapGetters({
    searchString: "searchString",
  }),
  methods: {
    ...mapMutations({
      searchUsers: "searchUsers",
      clearFilters: "clearFilters",
      updateList: "updateList",
    }),
    updateInputValue(event: any): void {
      this.$store.commit("updateSearchString", event.target.value);
    },
  },
});
</script>

<style scoped>
.search-widget {
  background-color: #ffffff;
  box-shadow: 0px 18px 15px 0px #94949426;
  width: 100%;
  min-height: 102px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
}

.input-filter {
  background-color: #eceff0;
  border-style: none;
  height: 34px;
  border-radius: 4px;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 44px;
  margin-bottom: 24px;
}

.clear-filter {
  background-color: inherit;
  border-radius: inherit;
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 16px;
}
</style>

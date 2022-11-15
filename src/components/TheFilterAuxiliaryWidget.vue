<template>
  <div class="auxiliary-widget">
    <the-filter-sort-widget class="auxiliary-elem"></the-filter-sort-widget>
    <the-filter-navigation-widget
      class="auxiliary-elem"
    ></the-filter-navigation-widget>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheFilterSortWidget from "./TheFilterSortWidget.vue";
import TheFilterNavigationWidget from "./TheFilterNavigationWidget.vue";

export default defineComponent({
  name: "TheFilterNavWidget",
  components: {
    TheFilterSortWidget,
    TheFilterNavigationWidget,
  },
});
</script>

<style scoped>
.auxiliary-widget {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auxiliary-elem {
  font-size: 10px;
  line-height: 14px;
  height: 14px;
  margin-bottom: 15px;
}
</style>

<template>
  <div class="filter-container">
    <slot name="the-filter-search-widget" class="search-container"></slot>
    <slot name="the-filter-auxiliary-widget" class="nav-container"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFilter",
});
</script>

<style scoped>
.search-container {
  margin-bottom: 72px;
}

.nav-container {
  margin-bottom: 15px;
}
</style>

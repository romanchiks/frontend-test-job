<template>
  <app-modal-window
    @confirm="deleteUserItem"
    @reject="deactivateModal"
    :view="modalState"
  >
    Вы уверены, что хотите удалить пользователя?
  </app-modal-window>
  <h1 class="caption">Список пользователей</h1>
  <the-filter class="filter-container">
    <template #the-filter-search-widget>
      <the-filter-search-widget></the-filter-search-widget>
    </template>
    <template #the-filter-auxiliary-widget>
      <the-filter-auxiliary-widget></the-filter-auxiliary-widget>
    </template>
  </the-filter>
  <the-users-table class="users-table-container">
    <template v-if="usersInList?.length">
      <the-users-table-item
        v-for="(user, index) in usersInList"
        :key="user.id"
        :idx="index"
        :userId="user.id"
        :username="user.username"
        :email="user.email"
        :registrationDate="user.registration_date"
        :rating="user.rating"
        @deleteUser="activateModal"
      ></the-users-table-item>
    </template>
    <template v-else>
      <the-users-table-item :error="true"></the-users-table-item>
    </template>
  </the-users-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

import TheFilter from "./components/TheFilter.vue";
import TheFilterSearchWidget from "./components/TheFilterSearchWidget.vue";
import TheFilterAuxiliaryWidget from "./components/TheFilterAuxiliaryWidget.vue";
import TheUsersTable from "./components/TheUsersTable.vue";
import TheUsersTableItem from "./components/TheUsersTableItem.vue";
import AppModalWindow from "./components/AppModalWindow.vue";

export default defineComponent({
  name: "App",
  components: {
    TheFilter,
    TheFilterSearchWidget,
    TheFilterAuxiliaryWidget,
    TheUsersTable,
    TheUsersTableItem,
    AppModalWindow,
  },
  computed: mapGetters({
    usersInList: "usersInList",
    modalState: "modalState",
    deleteOptions: "deleteOptions",
  }),
  methods: {
    ...mapActions({
      fetchUsers: "fetchUsers",
    }),
    ...mapMutations({
      deactivateModal: "deactivateModal",
      activateModal: "activateModal",
    }),
    deleteUserItem(): void {
      this.$store.commit("deleteUser", this.deleteOptions);
      this.$store.commit("deactivateModal");
    },
  },
  mounted() {
    this.fetchUsers();
  },
});
</script>

<style>
* {
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap");

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #acacac;
  box-sizing: border-box;
}

body {
  background-color: #e5e5e5;
}

#app {
  height: 100%;
}

.caption {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
  margin-top: 12px;
  margin-bottom: 20px;
  margin-left: 27px;
  margin-right: 12px;
}

.filter-container {
  margin-left: 27px;
  margin-right: 12px;
}

.users-table-container {
  margin-left: 27px;
  margin-right: 12px;
}

@keyframes bounce {
  0%,
  20%,
  60%,
  100% {
    transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    transform: translateY(-3px);
    transform: translateY(-3px);
  }

  80% {
    transform: translateY(-1px);
    transform: translateY(-1px);
  }
}
</style>

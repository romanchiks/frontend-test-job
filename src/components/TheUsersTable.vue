<template>
  <div>
    <table>
      <tr class="header-row">
        <th class="username">Имя пользователя</th>
        <th class="email">E-mail</th>
        <th class="registration-date">Дата регистрации</th>
        <th class="rating">Рейтинг</th>
        <th class="delete"></th>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheUsersTable",
});
</script>

<style>
table {
  min-width: 100%;
  background-color: #ffffff;
  border-radius: 7px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.header-row {
  background-color: inherit;
  height: 52px;
}

tr {
  background-color: inherit;
  background-image: url("../assets/table-line-icon.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  height: 50px;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  margin-right: 18px;
}

th {
  font-size: 10px;
  line-height: 14px;
  display: flex;
  justify-content: flex-start;
}

.username {
  min-width: 100px;
}

td.username {
  font-weight: 700;
  text-align: left;
  color: #0cb4f1;
}

.email {
  min-width: 190px;
}

.registration-date {
  min-width: 91px;
}

.rating {
  min-width: 40px;
}

.delete {
  min-width: 24px;
}
</style>

<template>
  <template v-if="!error">
    <tr>
      <td class="username">
        {{ username }}
      </td>
      <td class="email">
        {{ email }}
      </td>
      <td class="registration-date">
        {{ normalizeDate }}
      </td>
      <td class="rating">
        {{ rating }}
      </td>
      <td class="delete">
        <button
          @click="$emit('deleteUser', deleteAction({ userId, idx }))"
        ></button>
      </td>
    </tr>
  </template>
  <template v-else>
    <div class="error">
      <p>Пользователи не найдены</p>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import { mapActions } from "vuex";

export default defineComponent({
  name: "TheUsersTableItem",
  emits: ["deleteUser"],
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    userId: String,
    idx: Number,
    username: String,
    email: String,
    registrationDate: String,
    rating: Number,
  },
  computed: {
    normalizeDate(): string {
      return moment(this.registrationDate).format("DD.MM.YY");
    },
  },
  methods: mapActions({
    deleteAction: "deleteAction",
  }),
});
</script>

<style scoped>
button {
  border-style: none;
  background-color: inherit;
  background-image: url("../assets/cancel-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  min-width: 24px;
  min-height: 24px;
}

button:hover {
  animation: bounce 0.5s;
}

button:active {
  border-radius: 5px;
  background-color: #e9e9e9;
}

.error {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error p {
  color: #9eaab4;
  font-weight: 700;
}
</style>

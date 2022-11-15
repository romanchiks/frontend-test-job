import { createStore, Store } from "vuex";
import { DeleteOptions, State } from "@vue/runtime-core";

import moment from "moment";

interface usersItem {
  id: string;
  username: string;
  email: string;
  registration_date: string;
  rating: number;
}

export default createStore({
  state: {
    users: [],
    filteredUsers: [],
    currentList: 0,
    ITEM_IN_LIST: 5,
    searchString: "",
    stateRegDateButton: false,
    stateRatingButton: false,
    deleteOptions: { userId: 0, idx: 0 },
    modalState: false,
  },
  getters: {
    usersInList(state: State): Array<usersItem> {
      return state.filteredUsers.slice(
        state.currentList * state.ITEM_IN_LIST,
        state.currentList * state.ITEM_IN_LIST + state.ITEM_IN_LIST
      );
    },
    searchString(state: State): string {
      return state.searchString;
    },
    stateRegDateButton(state: State): boolean {
      return state.stateRegDateButton;
    },
    stateRatingButton(state: State): boolean {
      return state.stateRatingButton;
    },
    modalState(state: State): boolean {
      return state.modalState;
    },
    deleteOptions(sate: State): DeleteOptions {
      return sate.deleteOptions;
    },
    currentList(state: State): number {
      return state.currentList + 1;
    },
    allLists(state: State): number {
      return Math.ceil(state.filteredUsers.length / state.ITEM_IN_LIST);
    },
  },
  mutations: {
    updateUsers(state: State, users: Array<usersItem>): void {
      state.users = users;
      state.filteredUsers = [...users];
    },
    searchUsers(state: State, inputText: string): void {
      state.filteredUsers = state.users.filter((el) => {
        const regexp = new RegExp(`${inputText}`, "i");
        return regexp.test(el.username) || regexp.test(el.email);
      });
    },
    deleteUser(state: State, deleteOptions: DeleteOptions): void {
      state.filteredUsers.splice(deleteOptions.idx, 1);
      for (let i = 0; i < state.users.length; i++) {
        if (Number(state.users[i].id) === Number(deleteOptions.userId)) {
          state.users.splice(i, 1);
          break;
        }
      }
    },
    sortByRegDate(state: State): void {
      state.stateRegDateButton = !state.stateRegDateButton;

      if (state.stateRegDateButton && state.stateRatingButton) {
        state.stateRatingButton = !state.stateRatingButton;
      }

      if (state.stateRegDateButton) {
        state.filteredUsers.sort((a, b): any => {
          if (
            moment(a.registration_date).valueOf() >
            moment(b.registration_date).valueOf()
          ) {
            return -1;
          } else if (
            moment(a.registration_date).valueOf() ===
            moment(b.registration_date).valueOf()
          ) {
            return 0;
          } else {
            return 1;
          }
        });
      } else {
        state.filteredUsers.reverse();
      }
    },
    sortByRating(state: State): void {
      state.stateRatingButton = !state.stateRatingButton;

      if (state.stateRatingButton && state.stateRegDateButton) {
        state.stateRegDateButton = !state.stateRegDateButton;
      }

      if (state.stateRatingButton) {
        state.filteredUsers.sort((a, b): any => {
          if (a.rating > b.rating) {
            return -1;
          } else if (a.rating === b.rating) {
            return 0;
          } else {
            return 1;
          }
        });
      } else {
        state.filteredUsers.reverse();
      }
    },
    clearFilters(state: State): void {
      state.stateRegDateButton = false;
      state.stateRatingButton = false;
      state.searchString = "";
      state.currentList = 0;
      state.filteredUsers = [...state.users];
    },
    updateSearchString(state: State, value: string): void {
      state.searchString = value;
    },
    addDeleteOptions(state: State, deleteOptions: DeleteOptions): void {
      state.deleteOptions = deleteOptions;
    },
    deactivateModal(state: State): void {
      state.modalState = false;
    },
    activateModal(state: State): void {
      state.modalState = true;
    },
    updateList(state: State, direction: "next" | "back"): void {
      if (direction === "next") {
        if (
          (state.currentList + 1) * state.ITEM_IN_LIST <
          state.filteredUsers.length
        ) {
          state.currentList += 1;
        }
      } else {
        if (state.currentList - 1 >= 0) {
          state.currentList -= 1;
        }
      }
    },
  },
  actions: {
    async fetchUsers(ctx: any): Promise<void> {
      const response = await fetch(
        "https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users",
        { method: "GET" }
      );
      const users = await response.json();

      ctx.commit("updateUsers", users);
    },
    deleteAction(ctx: any, deleteOptions: DeleteOptions): void {
      ctx.commit("addDeleteOptions", deleteOptions);
    },
  },
});

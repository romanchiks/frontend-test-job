/* eslint-disable */
import { Store } from "vuex";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  type DeleteOptions = {
    userId: number, idx: number
  }

  interface State {
    modalState: boolean,
    users: Array<usersItem>,
    filteredUsers: Array<usersItem>,
    currentList: number,
    ITEM_IN_LIST: number,
    searchString: string,
    stateRegDateButton: boolean,
    stateRatingButton: boolean,
    deleteOptions: DeleteOptions
  }

  interface ComponentCustomProperties {
    $store: Store
  }
}


import { createStore } from 'vuex'

const defaultState = {
  isLoading: true
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    isLodingFalse(state: typeof defaultState) {
      state.isLoading = false
    },
    isLodingTrue(state: typeof defaultState) {
        state.isLoading = true
      }
  },
})

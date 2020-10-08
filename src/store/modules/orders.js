export default {
  state: {
    isOrdersLoaded: false,
    ordersArray: [],
  },
  mutations: {
    loadOrders(state, ordersArray) {
      if (Array.isArray(ordersArray)) {
        state.ordersArray = ordersArray;
        state.isOrdersLoaded(true);
      }
    },
  },
  actions: {
    updateOrders({ commit }, ordersJSON) {
      try {
        const ordersArray = JSON.parse(ordersJSON);
        commit('loadOrders', ordersArray);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  getters: {
    getIsOrdersLoaded(state) {
      return state.isOrdersLoaded;
    },
    getOrdersArray(state) {
      if (state.isOrdersLoaded) {
        return state.ordersArray;
      }
      return null;
    },
  },
};

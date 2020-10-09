import { getDateFromDeliveryObjectUtil } from '@/utils/storeUtils';

export default {
  state: {
    isOrdersLoaded: false,
    ordersArray: [],
    currentOrderId: 1,
  },
  mutations: {
    loadOrders(state, ordersArray) {
      if (Array.isArray(ordersArray)) {
        state.ordersArray = ordersArray;
        state.isOrdersLoaded = true;
      }
    },
    setCurrentOrderId(state, id) {
      state.currentOrderId = id;
    },
  },
  actions: {
    async updateOrders({ commit }) {
      try {
        const resp = await fetch('/orders.json');
        const ordersArray = await resp.json();
        commit('loadOrders', ordersArray);
      } catch (error) {
        console.log('ERROR! ', error.message);
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
    getCardObjectById(state) {
      return (id) => state.ordersArray.find((object) => object.id === id);
    },
    getCurrentOrderId(state) {
      return state.currentOrderId;
    },
    getCurrentCardObject(state, getters) {
      return getters.getCardObjectById(state.currentOrderId);
    },
    getDeliveryArrayByOrderId(state, getters) {
      return (id) => getters.getCardObjectById(id).deliveries;
    },
    getFirstDeliveryByOrderId(state, getters) {
      return (id) => {
        const deliveryArray = getters.getDeliveryArrayByOrderId(id);
        const firstDelivery = deliveryArray.reduce((first, object) => {
          if (getDateFromDeliveryObjectUtil(object) < getDateFromDeliveryObjectUtil(first))
            return object;
          return first;
        });
        return firstDelivery;
      };
    },

    getLastDeliveryByOrderId(state, getters) {
      return (id) => {
        const deliveryArray = getters.getDeliveryArrayByOrderId(id);
        const firstDelivery = deliveryArray.reduce((first, object) => {
          if (getDateFromDeliveryObjectUtil(object) > getDateFromDeliveryObjectUtil(first))
            return object;
          return first;
        });
        return firstDelivery;
      };
    },
  },
};

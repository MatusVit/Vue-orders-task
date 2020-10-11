import Vue from 'vue';
import {getDateFromDeliveryObjectUtil, getMaxIdFromArray} from '@/utils/storeUtils';

export default {
  state: {
    isOrdersLoaded: false,
    ordersArray: [],
    currentOrderId: 1,
    dateNow: Date.now(),
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
    setCancelOrder(state, index) {
      if (state.isOrdersLoaded) {
        Vue.set(state.ordersArray[index], 'isCancel', true);
      }
    },
    addNewOrder(state, newOrder) {
      if (state.isOrdersLoaded) {
        state.ordersArray.push(newOrder);
      }
    },
  },
  actions: {
    async updateOrders({commit}) {
      try {
        const resp = await fetch('/orders.json');
        const ordersArray = await resp.json();
        commit('loadOrders', ordersArray);
      } catch (error) {
        console.log('ERROR! ', error.message);
      }
    },

    duplicateOrder({commit, getters}, idOrder) {
      //todo
      const cardObject = getters.getCardObjectById(idOrder);
      const {deliveries} = cardObject;
      let maxCardID = getters.getMaxCardID;
      let maxDeliveryID = getters.maxDeliveryID;
      const newDeliveries = deliveries.map(object => ({...object, id: ++maxDeliveryID}));
      const duplicate = {...cardObject, deliveries: newDeliveries, id: ++maxCardID};
      commit('addNewOrder', duplicate);
    },

    cancelOrder({commit, state}, idOrder) {
      const index = state.ordersArray.findIndex(object => object.id === idOrder);
      commit('setCancelOrder', index);
    },
  },

  getters: {
    getDateNow(state) {
      return state.dateNow;
    },
    getCurrentOrderId(state) {
      return state.currentOrderId;
    },
    getIsOrdersLoaded(state) {
      return state.isOrdersLoaded;
    },
    getOrdersArray(state) {
      if (state.isOrdersLoaded) {
        const arrayWithoutCancelOrders = state.ordersArray.filter(objectOrder => {
          return !objectOrder.isCancel;
        });
        return arrayWithoutCancelOrders;
      }
      return null;
    },

    getCardObjectById(state) {
      return id => state.ordersArray.find(object => object.id === id);
    },

    getCurrentCardObject(state, getters) {
      return getters.getCardObjectById(state.currentOrderId);
    },

    getDeliveryArrayByOrderId(state, getters) {
      return id => getters.getCardObjectById(id).deliveries;
    },

    getDeliveryArrayByCurrentOrderId(state, getters) {
      return getters.getCardObjectById(state.currentOrderId).deliveries;
    },

    getUndeliveredArrayByOrderId(state, getters) {
      return id => {
        const array = getters.getDeliveryArrayByOrderId(id);
        if (array.length === 0) return [];
        const undeliveredArray = array.filter(
          deliveryObject => state.dateNow < getDateFromDeliveryObjectUtil(deliveryObject)
        );
        return undeliveredArray;
      };
    },

    getFirstDeliveryByOrderId(state, getters) {
      return id => {
        const deliveryArray = getters.getDeliveryArrayByOrderId(id);
        if (deliveryArray && deliveryArray.length === 0) return null;
        const firstDelivery = deliveryArray.reduce((first, object) => {
          if (getDateFromDeliveryObjectUtil(object) < getDateFromDeliveryObjectUtil(first))
            return object;
          return first;
        });
        return firstDelivery;
      };
    },

    getLastDeliveryByOrderId(state, getters) {
      return id => {
        const deliveryArray = getters.getDeliveryArrayByOrderId(id);
        if (deliveryArray && deliveryArray.length === 0) return null;
        const firstDelivery = deliveryArray.reduce((first, object) => {
          if (getDateFromDeliveryObjectUtil(object) > getDateFromDeliveryObjectUtil(first))
            return object;
          return first;
        });
        return firstDelivery;
      };
    },

    getNearestDelivery(state, getters) {
      return id => {
        const deliveryArray = getters.getUndeliveredArrayByOrderId(id);
        if (deliveryArray && deliveryArray.length === 0) return null;
        const nearestDelivery = deliveryArray.reduce((nearest, object) => {
          const differenceNearest = getDateFromDeliveryObjectUtil(nearest) - state.dateNow;
          const differenceObject = getDateFromDeliveryObjectUtil(object) - state.dateNow;
          if (differenceObject < differenceNearest) return object;
          return nearest;
        });
        return nearestDelivery;
      };
    },
    getMaxCardID(state) {
      return getMaxIdFromArray(state.ordersArray);
    },
    maxDeliveryID(state) {
      return state.ordersArray.reduce((maxId, orderObject) => {
        const maxIdFromDeliveries = getMaxIdFromArray(orderObject.deliveries);
        if (maxIdFromDeliveries > maxId) return maxIdFromDeliveries;
        return maxId;
      }, 0);
    },
  },
};

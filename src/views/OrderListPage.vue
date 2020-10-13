<template>
  <div class="page-conteiner">
    <h3 class="order-list__title">
      Мои заказы
      <span class="order-list__title__count">
        {{ countOrdes }}
      </span>
    </h3>
    <OrderCart v-for="card in getOrdersArray" :key="card.id" :cardID="card.id" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import OrderCart from '../components/OrderCart';

export default {
  components: {OrderCart},
  computed: {
    ...mapGetters(['getIsOrdersLoaded', 'getOrdersArray']),
    countOrdes() {
      return this.getOrdersArray ? this.getOrdersArray.length : '';
    },
  },

  async mounted() {
    if (!this.getIsOrdersLoaded) {
      try {
        await this.updateOrders();
      } catch (error) {
        console.log(error.massege);
      }
    }
  },

  methods: {
    ...mapActions(['updateOrders']),
  },
};
</script>

<style lang="scss" scoped>
.order-list__title {
  margin: 12px 6px;
  font-family: 'SF Pro Rounded';
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.3px;
}

.order-list__title__count {
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;

  color: #929292;
}
</style>

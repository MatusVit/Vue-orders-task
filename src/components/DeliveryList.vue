<template>
  <div class="delivery-list">
    <div v-if="isDeliveries" class="delivery-list__has">
      <div class="delivery-list__title">Доставки</div>
      <div class="delivery-list__conteiner">
        <Delivery v-for="delivery in deliveryArray" :key="delivery.id" :delivery="delivery" />
      </div>
    </div>
    <div v-else class="delivery-list__has-not">Доставок нет</div>
  </div>
</template>

<script>
import Delivery from '@/components/Delivery';
import {mapGetters} from 'vuex';
export default {
  components: {
    Delivery,
  },
  computed: {
    ...mapGetters(['getDeliveryArrayByCurrentOrderId']),
    deliveryArray() {
      return this.getDeliveryArrayByCurrentOrderId;
    },
    isDeliveries() {
      return this.deliveryArray && this.deliveryArray.length !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.delivery-list {
  margin-top: 34px;
}
.delivery-list__conteiner {
  margin-bottom: 34px;
}

.delivery-list__title {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 17px;
  line-height: 100%;
  color: $text-dark;
}

.button-group {
  background: #f5f5f5;
  border-radius: 10px;

  button {
    width: 100%;
    height: 54px;
    border: none;
    background: none;
    transition: all 0.3s;

    &:focus {
      outline: 0;
    }
  }
}
.delivery-list__has-not {
  margin: 20px;
  text-align: center;
}
</style>

<template>
  <div class="page-conteiner">
    <h3 class="order-list__title">
      Мои заказы
      <span class="order-list__title__count">
        2
      </span>
    </h3>
    <OrderCart />
    <OrderCart />
  </div>
</template>

<script>
import OrderCart from '../components/OrderCart';
export default {
  components: { OrderCart },
};
</script>

<style lang="scss" scoped>
.order-list__title {
  margin: 12px 6px;
  // font-family: 'SF Pro Rounded';
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.3px;
}

.order-list__title__count {
  // font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;

  color: #929292;
}
</style>

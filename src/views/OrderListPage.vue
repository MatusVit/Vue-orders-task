<template>
  <div class="page-conteiner">
    <h3 class="order-list__title">Мои заказы <span class="order-list__title__count">2</span></h3>
    <OrderCart />
  </div>
</template>

<script>
import OrderCart from '../components/OrderCart';
export default {
  components: { OrderCart },
};
</script>
<style lang="scss"></style>

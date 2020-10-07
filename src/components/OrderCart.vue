<template>
  <div class="order-cart">
    <TitleOrder />
    <NearestDelivery />
  </div>
</template>

<script>
import TitleOrder from './TitleOrder';
import NearestDelivery from './NearestDelivery';

export default {
  components: {
    TitleOrder,
    NearestDelivery,
  },
};
</script>

<style lang="scss" scoped>
.order-cart {
  width: 379px;
  height: 247px;
  margin-bottom: 13px;
  padding: 25px 18px 18px;
  display: flex;
  flex-direction: column;

  background: #f5f5f5;
  border-radius: 6px;
}
</style>

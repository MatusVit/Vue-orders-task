<template>
  <div class="order-cart" @click.stop="handleOrderCart">
    <TitleOrder :cardID="cardID" />
    <NearestDelivery :cardID="cardID" />
  </div>
</template>

<script>
import TitleOrder from '@/components/TitleOrder';
import NearestDelivery from '@/components/NearestDelivery';
import { mapMutations } from 'vuex';

export default {
  props: ['cardID'],
  components: {
    TitleOrder,
    NearestDelivery,
  },
  methods: {
    ...mapMutations(['setCurrentOrderId']),
    handleOrderCart() {
      this.setCurrentOrderId(this.cardID);
      this.$router.push('/order');
    },
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

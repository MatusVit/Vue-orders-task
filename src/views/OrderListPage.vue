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
import { mapGetters, mapActions } from 'vuex';
import OrderCart from '../components/OrderCart';

export default {
  components: { OrderCart },

  computed: {
    ...mapGetters(['getIsOrdersLoaded', 'getOrdersArray']),
  },

  // async mounted() {
  //   // this.setLoading(true);
  //   try {
  //     await this.prepareStart();
  //     const fastStep = this.getFastIndexOfIsNotLearnedWordObject();
  //     if (fastStep) this.step = fastStep;
  //     this.isVisibleContent = true;
  //     this.autoAudioPlayWord();
  //   } catch (error) {
  //     this.$router.push('/home');
  //   } finally {
  //     this.setLoading(false);
  //   }
  // },

  methods: {
    ...mapActions(['updateOrders']),
    // async prepareStart() {
    //   if (!this.getCurrentLearnStateObject.isArraysLoaded) {
    //     await this.getLearnArraysFromServer();
    //   }
    //   this.wordsArray = this.getCurrentArray;
    //   this.audio = new AudioControl();
    // },
  },
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

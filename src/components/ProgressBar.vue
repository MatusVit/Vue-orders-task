<template>
  <div class="progress-bar">
    <progress max="100" value="60" class="progress-bar__line">
      <div></div>
    </progress>
    <div class="progress-bar__data">
      <p class="progress-bar__data__days">{{ firstDeliveryDate | formatDate }}</p>
      <p class="progress-bar__data__days progress-bar__data__days_center">осталось 25 дней</p>
      <p class="progress-bar__data__days">{{ lastDeliveryDate | formatDate }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['cardID'],
  computed: {
    ...mapGetters(['getFirstDeliveryByOrderId', 'getLastDeliveryByOrderId']),
    firstDeliveryObject() {
      return this.getFirstDeliveryByOrderId(this.cardID);
    },
    firstDeliveryDate() {
      return new Date(this.firstDeliveryObject.date);
    },
    lastDeliveryObject() {
      return this.getLastDeliveryByOrderId(this.cardID);
    },
    lastDeliveryDate() {
      return new Date(this.lastDeliveryObject.date);
    },
  },
  filters: {
    formatDate: (date) =>
      date.toLocaleString('ru-RU', { day: 'numeric', month: 'short' }).replace('.', ''),
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.progress-bar__line {
  width: 100%;
  height: 5.54px;
  border-radius: 4px;

  &[value] {
    appearance: none;
  }

  &[value]::-webkit-progress-bar {
    background-color: #e9e9e9;
    border-radius: 4px;
  }
  &[value]::-webkit-progress-value {
    background-color: $base-color;
    border-radius: 4px;
  }
  //todo create white pointer
}

.progress-bar__data {
  margin-top: 7.75px;
  display: flex;
  justify-content: space-between;
}

.progress-bar__data__days {
  font-weight: 500;
  font-size: 11px;
  line-height: 110%;
  color: $text-gray;
}

.progress-bar__data__days_center {
  color: $text-black;
}
</style>

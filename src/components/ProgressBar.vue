<template>
  <div class="progress-bar">
    <progress max="100" :value="progressValue" class="progress-bar__line"> </progress>
    <div class="progress-bar__data">
      <p class="progress-bar__data__days">{{ firstDeliveryDate | formatDate }}</p>
      <p class="progress-bar__data__days progress-bar__data__days_center">
        осталось {{ daysLeft }} дней
      </p>
      <p class="progress-bar__data__days">{{ lastDeliveryDate | formatDate }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {isDate} from '@/utils/componentUtils';

export default {
  props: ['cardID'],
  computed: {
    ...mapGetters([
      'getDateNow',
      'getCardObjectById',
      'getUndeliveredArrayByOrderId',
      'getFirstDeliveryByOrderId',
      'getLastDeliveryByOrderId',
    ]),
    daysLeft() {
      const {lastDeliveryDate} = this;
      let days = 0;
      if (isDate(lastDeliveryDate)) {
        days = Math.floor((this.lastDeliveryDate - this.getDateNow) / 1000 / 60 / 60 / 24) + 1;
        if (days < 0) days = 0;
        return days;
      }
      return days;
    },
    cardObject() {
      return this.getCardObjectById(this.cardID);
    },
    amountDeliveries() {
      return this.cardObject.deliveries.length;
    },
    amountNotDelivery() {
      return this.getUndeliveredArrayByOrderId(this.cardID).length;
    },
    progressValue() {
      if (this.amountDeliveries === 0) return 0;
      const value =
        (100 / this.amountDeliveries) * (this.amountDeliveries - this.amountNotDelivery);
      return value;
    },
    firstDeliveryDate() {
      const firstDeliveryObject = this.getFirstDeliveryByOrderId(this.cardID);
      if (!firstDeliveryObject) return ' - ';
      return new Date(firstDeliveryObject.date);
    },
    lastDeliveryDate() {
      const lastDeliveryObject = this.getLastDeliveryByOrderId(this.cardID);
      if (!lastDeliveryObject) return ' - ';
      return new Date(lastDeliveryObject.date);
    },
  },
  filters: {
    formatDate: date => {
      if (isDate(date))
        return date.toLocaleString('ru-RU', {day: 'numeric', month: 'short'}).replace('.', '');
      return date;
    },
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

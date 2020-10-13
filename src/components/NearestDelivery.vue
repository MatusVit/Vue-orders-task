<template>
  <div class="nearest-delivery">
    <div class="nearest-delivery__has" v-if="nearestDeliveryObject">
      <div class="nearest-delivery__date-block">
        <div class="nearest-delivery__date-block__conteiner">
          <p class="nearest-delivery__date-block__month">{{ deliveryDate | formatDateMonth }}</p>
          <p class="nearest-delivery__date-block__day">{{ deliveryDate | formatDateDay }}</p>
        </div>
      </div>

      <div class="nearest-delivery__text-block">
        <div class="nearest-delivery__text-block__title">
          Ближайшая доставка<br />
          <span class="base-color-text">{{ deliveryDate | formatDateWeekday }} </span>
        </div>
        <div class="nearest-delivery__text-block__subtitle">
          <p class="nearest-delivery__text-block__subtitle__time">{{ interval }}</p>
          <p class="nearest-delivery__text-block__subtitle__place">
            {{ nearestDeliveryObject.address }}
          </p>
        </div>
      </div>
    </div>

    <div class="nearest-delivery__has-not" v-else>
      <div class="nearest-delivery__has-not_text">
        Ближайших доставок нет
      </div>
    </div>
  </div>
</template>

<script>
import {isDate} from '@/utils/componentUtils';
import {mapGetters} from 'vuex';

export default {
  props: ['cardID'],
  computed: {
    ...mapGetters(['getNearestDelivery']),
    nearestDeliveryObject() {
      return this.getNearestDelivery(this.cardID);
    },
    deliveryDate() {
      if (!this.nearestDeliveryObject) return '-';
      return new Date(this.nearestDeliveryObject.date);
    },
    interval() {
      if (!this.nearestDeliveryObject) return '-';
      const array = this.nearestDeliveryObject.interval.split(' - ');
      return `с ${array[0]} до ${array[1]}`;
    },
  },
  filters: {
    formatDateWeekday: date => {
      if (isDate(date)) return date.toLocaleString('ru-RU', {weekday: 'long'});
      return date;
    },
    formatDateDay: date => {
      if (isDate(date)) return date.toLocaleString('ru-RU', {day: '2-digit'});
      return date;
    },
    formatDateMonth: date => {
      if (isDate(date)) {
        const string = date.toLocaleString('ru-RU', {month: 'short'}).replace('.', '');
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.nearest-delivery__has {
  display: flex;
}

.nearest-delivery__has-not {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nearest-delivery__date-block {
  width: 58px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $base-color;
  border-radius: 4px;
  color: $text-white;
  line-height: 15px;
}

.nearest-delivery__date-block__conteiner {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.nearest-delivery__date-block__month {
  font-size: 11px;
}
.nearest-delivery__date-block__day {
  font-size: 20px;
}

.nearest-delivery__text-block {
  margin-left: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.nearest-delivery__text-block__title {
  font-weight: bold;
  font-size: 17px;
  line-height: 120%;
  color: $text-dark;
}

.nearest-delivery__text-block__subtitle__time {
  margin-bottom: 4px;
  font-family: SF Pro Text;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: $text-dark;
}

.nearest-delivery__text-block__subtitle__place {
  font-family: SF Pro Text;
  font-size: 12px;
  line-height: 13px;
  color: $text-gray;
}

.nearest-delivery__has-not_text {
  font-size: 17px;
  line-height: 13px;
  color: $text-gray;
}
</style>

<template>
  <div class="delivery-item">
    <div class="delivery-item__box-left">
      <img src="@/assets/icon-bag.svg" />
      <p class="delivery__date">{{ deliveryDate | formatDate }}</p>
    </div>
    <div class="delivery-item__box-right">
      <p class="delivery__time">{{ delivery.interval }}</p>
      <button class="button-arrow">
        <img src="@/assets/icon-arrow-left.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import {isDate} from '@/utils/componentUtils';

export default {
  props: ['delivery'],
  computed: {
    deliveryDate() {
      if (!this.delivery) return '-';
      return new Date(this.delivery.date);
    },
  },
  filters: {
    formatDate: date => {
      if (isDate(date)) {
        const dayMonth = new Intl.DateTimeFormat('ru', {
          day: 'numeric',
          month: 'long',
        }).format(date);
        const weekDay = new Intl.DateTimeFormat('ru', {
          weekday: 'long',
        }).format(date);
        return `${dayMonth}, ${weekDay}`;
      }
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.delivery-item {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
}

.delivery-item__box-left,
.delivery-item__box-right {
  display: flex;
  align-items: center;
}

.delivery__date {
  margin-left: 11px;
}

.delivery__time {
  margin-right: 36px;
}

.button-arrow {
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  background: none;
  transition: all 0.3s;

  &:hover {
    background: #f0f0f0;
  }
  &:focus {
    outline: 0;
  }
}
</style>

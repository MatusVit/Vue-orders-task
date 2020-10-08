<template>
  <div class="page-conteiner">
    <div class="order__title ">
      <button class="button-link base-color-text" @click="$router.push('/')">Назад</button>
    </div>
    <TitleOrder />
    <DeliveryList />
    <div class="button-group">
      <button class="button__icon">
        <p>Дублировать заказ</p>
        <img src="@/assets/icon-doubling.svg" />
      </button>
      <button>
        <p>Отменить заказ</p>
        <img class="button__icon" src="@/assets/icon-trash.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import TitleOrder from '@/components/TitleOrder';
import DeliveryList from '@/components/DeliveryList';

export default {
  components: {
    TitleOrder,
    DeliveryList,
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
.order__title {
  margin: 12px 6px 12px 0;
}

.button-link {
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background: none;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  transition: all 0.3s;

  &:hover {
    background: #e9e9e9;
  }
  &:focus {
    outline: 0;
  }
}

.button-group {
  background: #f5f5f5;
  border-radius: 10px;

  button {
    width: 100%;
    height: 54px;
    padding: 16px;
    border: none;
    background: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 17px;

    line-height: 22px;
    letter-spacing: -0.41px;
    color: $text-dark-gray;

    transition: all 0.3s;
    &:hover {
      color: $base-color;
    }
    &:focus {
      outline: 0;
    }
    &:not(:last-child) {
      border-bottom: solid 1px #e4e4e4;
    }
  }
}
</style>

<template>
  <div class="delivery-list">
    <div class="delivery-list__title">Доставки</div>

    <div class="delivery-list__conteiner">
      <Delivery />
      <Delivery />
    </div>
  </div>
</template>

<script>
import Delivery from '@/components/Delivery';

export default {
  components: {
    Delivery,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.delivery-list {
  margin-top: 34px;
}
.delivery-list__conteiner {
  margin-bottom: 34px;
}

.delivery-list__title {
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 17px;
  line-height: 100%;
  color: $text-dark;
}

.button-group {
  background: #f5f5f5;
  border-radius: 10px;

  button {
    width: 100%;
    height: 54px;
    border: none;
    background: none;
    transition: all 0.3s;

    &:focus {
      outline: 0;
    }
  }
}
</style>

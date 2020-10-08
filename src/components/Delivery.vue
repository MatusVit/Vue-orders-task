<template>
  <div class="delivery-item">
    <div class="delivery-item__box-left">
      <img src="@/assets/icon-bag.svg" />
      <p class="delivery__date">14 мая, среда</p>
    </div>
    <div class="delivery-item__box-right">
      <p class="delivery__time">8:00-10:00</p>
      <button class="button-arrow">
        <img src="@/assets/icon-arrow-left.svg" />
      </button>
    </div>
  </div>
</template>

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

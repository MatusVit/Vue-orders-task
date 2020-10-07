<template>
  <div class="nearest-delivery">
    <div class="nearest-delivery__date-block">
      <div class="nearest-delivery__date-block__conteiner">
        <p class="nearest-delivery__date-block__month">Окт</p>
        <p class="nearest-delivery__date-block__day">28</p>
      </div>
    </div>

    <div class="nearest-delivery__text-block">
      <div class="nearest-delivery__text-block__title">
        Ближайшая доставка<br />
        <span class="base-color-text">в понедельник -</span>
      </div>
      <div class="nearest-delivery__text-block__subtitle">
        <p class="nearest-delivery__text-block__subtitle__time">с 10:00 до 12:00</p>
        <p class="nearest-delivery__text-block__subtitle__place">Работа на объекте в Басма...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.nearest-delivery {
  display: flex;
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
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: $text-dark;
}

.nearest-delivery__text-block__subtitle__place {
  font-size: 12px;
  line-height: 13px;
  color: $text-gray;
}
</style>

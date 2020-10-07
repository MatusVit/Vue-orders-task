<template>
  <div class="progress-bar">
    <div class="progress-bar__line"></div>
    <div class="progress-bar__data">
      <p class="progress-bar__data__days">20 окт</p>
      <p class="progress-bar__data__days progress-bar__data__days_center">осталось 25 деней</p>
      <p class="progress-bar__data__days">10 ноя</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.progress-bar__line {
  height: 5.54px;
  background: #e9e9e9;
  border-radius: 4px;
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

<template>
  <div class="title-order">
    <div class="title-order__conteiner">
      <p class="title-order__days">6 Дней</p>
      <div class="title-order__ration">
        <p class="title-order__ration__name">{{ cardObject.packageName }}</p>
        <p class="title-order__ration__calories">{{ cardObject.packageCalories }}</p>
      </div>
    </div>

    <ProgressBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProgressBar from './ProgressBar';
export default {
  components: {
    ProgressBar,
  },
  props: ['cardID'],
  computed: {
    ...mapGetters(['getCardObjectById']),
    cardObject() {
      return this.getCardObjectById(this.cardID);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-order {
  margin-bottom: 24px;
}

.title-order__conteiner {
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-order__days {
  font-weight: bold;
  font-size: 35px;
  line-height: 100%;
}
.title-order__ration {
  margin: 0;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-order__ration__name {
  margin: 0;
  font-size: 10px;
  line-height: 16px;
  color: #b1b1b1;
}

.title-order__ration__calories {
  margin: 0;
  font-size: 17px;
  line-height: 16px;
  font-weight: bold;
}
</style>

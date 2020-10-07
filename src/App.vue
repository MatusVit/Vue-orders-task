<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
import EmptyLayuot from './layuots/EmptyLayout';
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'EmptyLayuot';
    },
  },
  components: {
    EmptyLayuot,
  },
};
</script>

<style lang="scss">
// todo ??? @import css framework

.page-conteiner {
  width: 415-36px;
  height: 677-36px;
  padding: 18px;
  background: #ffffff;
}
</style>

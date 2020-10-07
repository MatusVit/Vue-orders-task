<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.empty-layout {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(143, 143, 143);
}
</style>

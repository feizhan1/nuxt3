import { Avatar } from '../../.nuxt/components';
<template>
  <nav class="nav">
    <h1>导航</h1>
    <Avatar />
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1 class="title">1manity UI v0.0.1</h1>

  <nav class="nav">
    <RouterLink to="/">Icon</RouterLink>
    <RouterLink to="/button">Button</RouterLink>
    <RouterLink to="/card">Card</RouterLink>
    <RouterLink to="/dialog">Dialog</RouterLink>
    <RouterLink to="/pager">Pager</RouterLink>
    <RouterLink to="/collapse">Collapse</RouterLink>
    <RouterLink to="/tooltip">Tooltip</RouterLink>
    <RouterLink to="/dropdown">Dropdown</RouterLink>
  </nav>
  <div class="displayArea">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  transition-duration: 0.15s;
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>

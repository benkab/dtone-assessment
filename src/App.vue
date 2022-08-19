<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
@import '@/sass/vars/vars.scss';

html,
body {
  padding: 0;
  margin: 0;
  background-color: $gray;
}
#app {
  font-family: $inter, $sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  font-size: map-get($font-sizes, 'xs');
  font-weight: map-get($font-weights, 'regular');
}
</style>

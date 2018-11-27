<template>
  <div id="app">
    <div id="nav">
      <a to="/index">index</a> | 
      <a href="/home">Home</a> | 
      <a href="/about">About</a>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-active,&.router-link-exact-active
      color #42b983
</style>

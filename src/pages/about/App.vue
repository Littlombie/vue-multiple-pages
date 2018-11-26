<template>
  <div id="about">
    <div id="nav">
      <a href="/home">Home</a> | 
      <router-link to="/about">About</router-link> |
      <router-link to="/aboutYou"> About You</router-link>
    </div>
    <router-view/>
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

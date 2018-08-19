<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br />
    <button @click="resetState">
      Restablecer el estado de complexModule
    </button>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'app',
  mounted () {
      this.setFilters()
  },
  methods: {
      ...mapActions('userModule', ['fetchUsers']),
      ...mapActions('postModule', ['fetchPosts']),
      ...mapMutations('complexModule', ['setFilters', 'resetState'])
  },
  computed: {
      ...mapState('userModule', ['users']),
      ...mapState('postModule', ['posts']),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

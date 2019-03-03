<template>
  <div class="app">
    <div class="app__main" v-if="currentUser">
      Welcome, {{ currentUser.name }}
    </div>
    <div class="app__login" v-else>
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from './auth/login-form'
import { GET_CURRENT_USER } from '@/apollo/operations'
export default {
  components: { LoginForm },
  apollo: {
    currentUser () {
      return {
        query: GET_CURRENT_USER
      }
    }
  }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
.app {
  &__main,
  &__login {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  &__login {
    @include vertical-center();
  }
}
</style>

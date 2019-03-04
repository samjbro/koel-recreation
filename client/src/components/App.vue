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
import { GET_ME, GET_CURRENT_USER, SET_CURRENT_USER } from '@/apollo/operations'
export default {
  components: { LoginForm },
  apollo: {
    currentUser () {
      return {
        query: GET_CURRENT_USER
      }
    },
    me () {
      return {
        query: GET_ME,
        result ({ data }) {
          if (!data.me) return
          this.$apollo.mutate({
            mutation: SET_CURRENT_USER,
            variables: {
              user: data.me
            }
          })
        },
        error: e => {
          // console.error(e)
        }
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

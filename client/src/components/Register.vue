<template>
<v-layout column>
<form name="tab-tracker-form"
      autocomplete="off">
  <v-flex xs6 offset-xs3>
    <panel title="Regjistrohu">
  <v-text-field
  label="Email"
  v-model="email"
  ></v-text-field>
  <v-text-field
  label="Password"
  type="password"
  v-model="password"
  autocomplete="new-password"
  ></v-text-field>
  <v-btn
    dark
    class="blue-grey lighten-1"
    @click="register">
    Register
    </v-btn>
    </panel>
  </v-flex>
</form>
</v-layout>

</template>
<script>
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null 
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        name: 'films'
      })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>

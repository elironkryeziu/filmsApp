<template>
<v-toolbar fixed class="blue-grey lighten-1" dark>
    <v-toolbar-title class="mr-4">
        <span
        class="home"
        @click="navigateTo({name: 'films'})">
        FilmsApp
        </span>
    </v-toolbar-title>
    <v-toolbar-items>
        <v-btn
         flat dark
        @click="navigateTo({name: 'films'})">
            Home
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn v-if="$store.state.isUserLoggedIn"
         flat dark
        @click="navigateTo({name: 'addfilm'})">
            Add New Film
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn"
        flat dark
        @click="navigateTo({name: 'login'})">
            Log In
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn"
        flat dark
        @click="navigateTo({name: 'register'})">
            Sign Up
        </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
        <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'films'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
</style>

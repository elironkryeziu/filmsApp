<template>
<v-layout >
<v-flex xs6 offset-xs3>
    <div v-if="!$store.state.isUserLoggedIn">
     <h3>Per te pasur mundesi te shtoni filma, duhet te regjistroheni se pari <br>
      Ose nese jeni tashme i regjistruar, duhet te kyqeni</h3> <br>
      <v-btn depressed color="error" @click="navigateTo({name: 'login'})" >Log In</v-btn>
      <v-btn depressed color="error" @click="navigateTo({name: 'register'})">Register</v-btn>
      </div>
      <br><br>
      <div v-for="film in films" :key="film.id">
        <panel title="">
          <v-layout>
            <v-flex xs6>
              <div class="film-title">
                <h1 style="text-decoration:none; color:black "><b>{{film.title}}</b></h1>
              </div>
              <div class="film-director">
                A film by <i>{{film.director}}</i>
              </div>
              <div class="film-genre">
                {{film.genre}}
              </div>
              <textarea
               readonly
               auto-grow
               v-model="film.description"
              ></textarea>

            </v-flex>
          </v-layout>
        </panel> <br><br>
      </div>
</v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import filmsService from '@/services/filmsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      films: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.films = (await filmsService.index()).data.reverse()
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  border: none;
  height: auto;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>

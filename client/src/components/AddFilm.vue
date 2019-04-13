<template>
<v-layout column>
<form name="tab-tracker-form"
      autocomplete="off">
  <v-flex xs6 offset-xs3>
    <panel title="Shkruaj te dhenat e filmit">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="film.title"
        ></v-text-field>

        <v-text-field
          label="Director"
          required
          :rules="[required]"
          v-model="film.director"
        ></v-text-field>
        <v-select
          :items="genres"
          label="Genre"
          required
          :rules="[required]"
          v-model="film.genre"
        ></v-select>

        <v-text-field
          label="Actors"
          required
          :rules="[required]"
          v-model="film.actors"
        ></v-text-field>

        <v-text-field
          label="YoutubeId"
          required
          :rules="[required]"
          v-model="film.youtubeId"
        ></v-text-field>

        <v-text-field
          label="CoverURL"
          required
          :rules="[required]"
          v-model="film.cover"
        ></v-text-field>

        <v-textarea
          label="Film Description"
          multi-line
          required
          :rules="[required]"
          v-model="film.description"
        ></v-textarea>
        <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn
        dark
        class="blue-grey lighten-1"
        @click="create">
        Add Film
      </v-btn>
    </panel>
  </v-flex>
</form>
</v-layout>

</template>

<script>
import filmsService from '@/services/filmsService'

export default {
  data () {
    return {
      genres: ['Comedy', 'Action', 'Science Fiction', 'Drama', 'Thriler', 'Crime'],
      film: {
        title: null,
        director: null,
        genre: null,
        actors: null,
        youtubeId: null,
        cover: null,
        description: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.film)
        .every(key => !!this.film[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await filmsService.post(this.film)
        this.$router.push({
          name: 'films'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
</style>

<template>
  <div class="container text-center">
    <search-form/> 
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="character in characters" :key="character.id">
        <character-card :character-name="character.name" :character-image="character.image"/>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
import gql from 'graphql-tag'
import SearchForm from './components/SearchForm'
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'App',
  data() {
    return {
      characters: []
    }
  },
  components: {
    CharacterCard,
    SearchForm
  },
  methods: {
    async getCharacters() {
      const response = await this.$apollo.query({
        query: gql`
          query characters {
            characters(filter: { name: "" }) {
              results {
                id,
                name,
                image
              }
            }
          }
        `
      });
      this.characters = response.data.characters.results;
    }
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<style>
* {
  background-color: #212529;
  color: #FFF;
}
</style>

<template>
  <div class="container text-center">
    <search-form @searchCharacter="searchCharacter"/> 
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
    async searchCharacter(searchTerm) {
      const response = await this.$apollo.query({
        query: gql`
          query characters($character: String!) {
            characters(filter: { name: $character }) {
              results {
                id,
                name,
                image
              }
            }
          }
        `,
        variables: { character: searchTerm },
      });
      this.characters = response.data.characters.results;
    }
  },
  mounted() {
    this.searchCharacter("");
  }
}
</script>

<style>
* {
  background-color: #212529;
  color: #FFF;
}
</style>

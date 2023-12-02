<template>
  <div class="container text-center">
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
import CharacterCard from '@/components/CharacterCard'

export default {
  name: 'App',
  data() {
    return {
      characters: []
    }
  },
  components: {
    CharacterCard
  },
  methods: {
    async getCharacters() {
      const response = await this.$apollo.query({
        query: gql`
          query characters {
            characters(filter: { name: "rick" }) {
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
.character-card {
  width: 18rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>

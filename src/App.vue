<template>
<img v-for="c in characters" :key="c.id" :src="c.image">
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'App',
  data() {
    return {
      characters: []
    }
  },
  components: {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

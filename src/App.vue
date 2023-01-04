<template>
  <character-avatar v-for="c in characters.results" :key="c.id" :character="c"/>
</template>

<script>
import CharacterAvatar from './components/CharacterAvatar';
import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {
    CharacterAvatar
  },
  apollo: {
    characters: gql`query{
      characters {
        results {
          id,
          name,
          species,
          status,
          image
        }
      }
    }`,
  }
}
</script>

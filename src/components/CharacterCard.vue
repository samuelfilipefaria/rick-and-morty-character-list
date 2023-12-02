<template>
  <div class="card character-card">
    <img :src="characterImage" class="card-img-top" :alt="characterName">
    <div class="card-body">
      <h5 class="card-title">{{ characterName }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    characterName: {
      type: String,
      required: true
    },
    characterImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
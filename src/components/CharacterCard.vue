<template>
  <div class="card character-card">
    <img :src="characterImage" class="card-img-top character-image" :alt="characterName">
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
.character-card {
  width: 18rem;
  border-color: #7cf448;
  border-width: 1px;
  border-style: solid;
  border-radius: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color: #212529;
  color: #FFF;
  box-shadow: 0px 0px 42px #7cf448;
}

.character-image {
  width: 100%;
  border-radius: none;
}
</style>

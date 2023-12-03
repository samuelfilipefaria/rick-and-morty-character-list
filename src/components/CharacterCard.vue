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
  padding: 10px;
  border-radius: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  background-color: #212529;
  color: #FFF;
  box-shadow:
    0px 0px 3.2px #7cf448,
    0px 0px 6.8px #7cf448,
    0px 0px 10.8px #7cf448,
    0px 0px 15.9px #7cf448,
    0px 0px 22.7px #7cf448,
    0px 0px 28.1px #7cf448,
    0px 0px 32.2px #7cf448,
    0px 0px 35.7px #7cf448,
    0px 0px 39px #7cf448,
    0px 0px 42px #7cf448;
}

.character-image {
  width: 100%;
  border-radius: 50%;
}
</style>

<template>
<div class="container">
  <div class="columns">
    <div class="column col-12" style="display: block; margin-left: auto; margin-right: auto;">
      <div class="panel text-center" style="margin-bottom: 30px; margin-top: 30px;">
        <div class="panel-header">
          <figure class="avatar avatar-xl" style="background-color: #5755d9; width: 150px; height: 150px;">
            <img :src="character.image" alt="...">
          </figure>
          <div class="panel-title">{{ character.name }}</div>
        </div>
        <div class="panel-nav">
          <ul>
            <li>Id: {{ character.id }}</li>
            <li>Espécie: {{ character.species }}</li>
            <li>Status: {{ character.status }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CharacterAvatar',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.panel {
  border: none;
}
</style>

<template>
  <form class="row my-5">
    <div class="col-lg-6 col-md-12 mx-auto">
      <input type="text" class="form-control search-character-input bg-dark text-light" placeholder="Search a character...">
      <button type="button" class="btn mt-5 text-dark search-character-button">Search!</button> 
    </div>   
  </form> 
</template>

<script>
export default {
  name: "SearchForm"
}
</script>

<style scoped>
@font-face {
  font-family: Shlop;
  src: url('../assets/fonts/shlop.otf');
}

::placeholder {
  color: #FFF !important;
}

.search-character-input {
  border: solid 1.5px #7cf448 !important;
  border-radius: 0 !important;
  font-size: 35px !important;
}

.search-character-input:focus {
  border: solid 1.5px #7cf448 !important;
  box-shadow: 0px 0px 42px #7cf448 !important;
}

.search-character-button {
  border: none !important;
  font-family: Shlop !important;
  font-size: 50px !important;
  background: rgb(0,255,127) !important;
  background: linear-gradient(117deg, rgba(0,255,127,1) 0%, rgba(124,244,72,1) 50%, rgba(57,255,152,1) 100%) !important;
  border-radius: 0 !important;
}

.search-character-button:hover {
  box-shadow: 0px 0px 42px #7cf448 !important;
}

.search-character-button:active {
  border: none !important;
}
</style>

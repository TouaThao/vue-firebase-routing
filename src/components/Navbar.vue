<template>
  <div class="Nav">
    <ul>
      <li>
          <router-link to="/">Home</router-link>
      </li>
      <li>
          <router-link :to="{ name: 'About'}">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  }
};
</script>


<style>
ul{
    list-style-type: none;
    padding:0
}
a{
    color:#42b983
}
</style>

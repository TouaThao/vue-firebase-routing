<template>
  <div class="Nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About'}">About</router-link>
      </li>
      <h2>user-Profile</h2>
      <ul>
        <li v-for="(id,index) in userIds" :key="index">
          <router-link :to="{name:'ViewProfile', params:{user_id:id}}">
            <span>Profile {{ id }}</span>
          </router-link>
        </li>
      </ul>
    </ul>
    <h2>
      Navigation control
    </h2>
    <ul>
      <li><button @click="goBack">Go Back</button></li>
       <li><button @click="goForward">Go Forward</button></li>
      <li><button @click="goHome"> Redirect to Home</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      userIds: ["1", "2", "3", "4"]
    };
  },
  methods:{
    goHome(){
      /* route vs router. this.$route is the current route your in
      this.$router keep track of all our navagation history
      */
      this.$router.push({
        name:'Home'
      })
    },
    goBack(){
      this.$router.go(-1) 
    },
    goForward(){
      this.$router.go(1)
    }
  }
};
</script>


<style>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
li{
  display: inline-block;
  margin:10px;
}
a.router-link-exact-active{
color:purple
}
</style>

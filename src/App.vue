<template>
  <div>
    <headerAll />
    <router-view></router-view>
    <footerAll/>
  </div>
</template>

<script>
import headerAll from "./components/Header/headerAll.vue";
import footerAll from './components/Footer/footerAll.vue'
export default{
  name: "App",
  components: {
    headerAll,
    footerAll,
},
};
</script>
<style>


</style>

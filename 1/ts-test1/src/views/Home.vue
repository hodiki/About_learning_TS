<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Test2 msg="ddzs"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import Test2 from '../components/Test2.vue';

@Component({
  components: {
    HelloWorld,
    Test2,
  },
})
export default class Home extends Vue {}
</script>

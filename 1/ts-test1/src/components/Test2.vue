<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

//@Component 装饰器是用以声明子组件
@Component
export default class MyComponent extends Vue {
  //@Prop 装饰器是用以接收来自父组件的数据
  @Prop() private msg!:string
}
</script>



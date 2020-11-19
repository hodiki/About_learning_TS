<template>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';


@Component
export default class Test2 extends Vue {
  //@Prop 装饰器用以接收来自父组件的数据
  @Prop() private msg!:string

  @Emit()
  tesst(){
    return this.msg
  }
}
</script>



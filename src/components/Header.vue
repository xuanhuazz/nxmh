<template>
<div class="header">
  <div>
    <img src="@/assets/logo.png" alt="" class="logo">
  </div>
  <div class="title">宁夏国资国企在线监管系统我改了改</div>
  <el-input class="input"
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
</div>

</template>

<script>
export default {
  name:'Header'
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100px;
  background-color: pink;
  .logo {
    width: 4%;
    height: 50%;
    margin: 24px 0 0 30px;
  }
  .title {
    display: inline-block;
    width: 30%;
    height: 50%;
    color: white;
    font-size: 27px;
    margin: -5px 0 0 30px;
  }
  .input {
    width: 30%;
  }
}
</style>

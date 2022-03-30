<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="title">宁夏国资国企在线监管系统</div>
    <div class="input">
      <el-input placeholder="请输入要搜索的关键字" suffix-icon="el-icon-search" class="input-el"></el-input>
      <i class="iconfont icon-tongzhi"></i>
    </div>
    <div class="information">
      <div class="head">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="name">
        浪潮er
      </div>
      <i class="iconfont icon-sanjiao1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 100px;
  background-color: pink;
  display: flex;
  .logo {
    width: 5%;
    height: 100px;
    margin-left: 2%;
    img {
      width: 80%;
      height: 80%;
      margin-top: 10px;
      }
    }
  .title {
    width: 60%;
    line-height: 100px;
    font-size: 28px;
    color: white;
    }
  .input {
    width: 22%;
    margin-top: 30px;
    .input-el {
      display: inline-block;
      width: 80%;
      
    }
    .icon-tongzhi {
      margin-left: 10%;
      color: white;
      font-size: 25px;
      vertical-align: middle;
    }
  }
  .information {
    display: flex;
    width: 10%;
    height: 100%;
    // justify-content:space-around;
    align-items: center;
    .head {
      width: 15%;
      height: 35%;
      border: 1px solid white;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 10%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: 18px;
      color: white;
      margin-left: 10%;
    }
    .icon-sanjiao1 {
      color: white;
      margin-left: 4%;
    }
  }
}
</style>
<style >
.el-input__inner {
  height: 50px!important;
}
</style>

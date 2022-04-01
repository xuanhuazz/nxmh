<template>
  <div class="footer">
    <div class="footer-top">
      <span>主机IP：168.168.0.0</span>
      <span>版本号：1.0.0</span>
      <span>内存使用率：30%</span>
      <span>CPU使用率：30%</span>
      <span>浏览器支持：谷歌、360、火狐、IE6+</span>
    </div>
    <div class="footer-bottom">
      <div class="about-us">
        <span>关于我们 | 合作伙伴 | 法律声明</span>
      </div>
      <div class="company">
        <span>主办单位 ： 宁夏回族自治区人民政府国有资产监督管理委员会</span>
        <span>宁ICP备19000912号-1号</span>
        <span>网站标识码 ： 宁公网备案190000021号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang = "less" scoped>
.footer-top {
  display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 60px;
    margin-left: 50%;
    transform: translateX(-50%);
}
.footer-bottom {
  width: 100%;
  height: 120px;
  background-color: rgb(34,37,48);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  .about-us {
    height: 35px;
  }
}
</style>
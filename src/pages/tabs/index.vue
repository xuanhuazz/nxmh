<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="常用功能" name="first" popper-class="tabs user">
      <Card />
    </el-tab-pane>
    <el-tab-pane label="全部应用" name="second" class="tabs configure">
      <Alcard />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Card from "../card";
import Alcard from '../alcard'
export default {
  name: "Tabs_card",
  components: { Card,Alcard },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang = "less" >

/* 隐藏切换条 */
.el-tabs__active-bar {
  display: none;
}
.el-tabs__nav-wrap::after {
  display: none;
}
/* tabs选择框 */
.el-tabs__item {
  width: 80%;
  height: 40px;
  padding: 0 !important;
  font-size: 16px;
  text-align: center;

  &:nth-child(3) {
    margin-left: 10px;
  }
}
/* 选中框样式 */
.el-tabs__item.is-active {
  background-color: rgb(43, 140, 255);
  color: white;
  border-radius: 10px;
}
</style>

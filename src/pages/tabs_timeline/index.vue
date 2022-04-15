<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="待办" name="first" popper-class="tabs user">
      <First />
    </el-tab-pane>
    <el-tab-pane label="已办" name="second" class="tabs configure">
      <Second />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import First from "./first";
import Second from "./second";
export default {
  name: "Tabs_timeline",
  components: { First, Second },
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
.el-timeline-item__node {
    position: absolute;
    background-color: rgb(2,115,255);
    border: 6px solid rgb(177,211,255);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

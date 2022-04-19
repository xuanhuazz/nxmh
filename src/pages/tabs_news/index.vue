<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="新闻通知" name="first" popper-class="tabs user">
      <News />
    </el-tab-pane>
    <el-tab-pane label="舆情监督" name="second" class="tabs configure" >
      <YuQing />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import News from "../news";
import YuQing from '../yuqing'
export default {
  name: "Tabs_News",
  components: { News,YuQing },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab,event);
      if(tab.index == 0){
        this.$store.dispatch('newsList','1')
      } else if (tab.index == 1){
        this.$store.dispatch('newsList','2')
      }
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

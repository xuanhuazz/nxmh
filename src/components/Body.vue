<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="left">
          <Tabs />
        </div>
        <div class="left">
          <p>工作日历</p>
          <Calendar />
        </div>
        <div class="left"></div>
      </el-col>
      <el-col :span="10"><div class="right">
          <TabsTimeLine />
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import Tabs from "@/pages/tabs";
import TabsTimeLine from "@/pages/tabs_timeline";
import Calendar from '@/pages/calendar'
export default {
  name: "Body",
  components: { Tabs, TabsTimeLine,Calendar },
};
</script>
<style lang="less" scoped>
/* 左侧部分 */
.left {
  padding-top: 20px;
  border-radius: 24px;
  min-height: 36px;
  height: 431px;
  margin-bottom: 20px;
  background-color: rgb(255, 255, 255);
  &:last-child {
    margin-bottom: 0;
  }
}
/* 右侧部分 */
.right {
  padding-top: 20px;
  border-radius: 24px;
  min-height: 36px;
  height: 1375px;
  background-color: rgb(255, 255, 255);
}

</style>
<style lang = "less" >
.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 54px;
}
</style>
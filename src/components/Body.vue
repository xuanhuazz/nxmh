<template>
  <div >
    <el-row :gutter="20">
      <el-col :span="14">
        <div class="left left1">
          <Tabs />
        </div>
        <div class="left">
          <p>工作日历</p>
          <Schedule />
        </div>
        <div class="left left3">
          <News />
        </div>
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
import Schedule from '@/pages/schedule'
import News from '@/pages/news'
export default {
  name: "Body",
  components: { Tabs, TabsTimeLine,Schedule,News },
};
</script>
<style lang="less" scoped>

/* 左侧部分 */
.left {
  padding-top: 20px;
  border-radius: 24px;
  min-height: 36px;
  height: 450px;
  margin-bottom: 20px;
  background-color: rgb(255, 255, 255);
  &:last-child {
    margin-bottom: 0;
  }
  p{
    margin-left: 20px;
  }
}
.left1 {
  height: 410px;
  padding-left: 20px;
}
.left3 {
  height: 435px;
  padding-left: 25px;
}
/* 右侧部分 */
.right {
  padding-top: 20px;
  padding-left: 25px;
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
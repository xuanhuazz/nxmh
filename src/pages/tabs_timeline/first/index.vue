<template>
<div>
  <div class="block">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
      <span>IGIX系统</span>
    </div>
    <div class="timeline">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
  <div class="line"></div>
  <div class="block">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
      <span>IGIX系统</span>
    </div>
    <div class="timeline">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
  <div class="line"></div>
  <div class="block">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
      <span>IGIX系统</span>
    </div>
    <div class="timeline">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</div>

  
</template>

<script>
export default {
  name: "First",
};
</script>


<style lang="less" scoped>
.block {
  display: flex;
  margin-top: 25px;
  &:first-child {
    margin-top: 0;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 15%;
    img {
      width: 100%;
    }
    span {
      text-align: center;
    }
  }
  .timeline {
    width: 80%;
    margin-left: 20px;
  }

}
.line {
  width: 92%;
  height: 1px;
  margin-left: 10px;
  background-color: pink;
  
}
</style>

<style lang="less">
// 线
.el-timeline-item__tail {
  position: absolute;
  left: 7px;
  height: 100%;
  border-left: 2px solid #e4e7ed;
}
// 球
.el-timeline-item__node--normal {
    left: -4px;
    width: 12px;
    height: 12px;
}
// 时间显示
.el-timeline-item__timestamp {
  color: black;
  line-height: 1;
  font-size: 17px;
}
// 内容区域背景颜色
.el-card {
  background-color: rgb(245, 248, 252) !important;
}
// 内容字体大小
.el-card__body {
  font-size: 20px !important;
  padding-left: 30px;
  p {
    margin-top: 11px;
    font-size: 16px;
  }
}
</style>

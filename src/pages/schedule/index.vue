<template>
  <div>
    <el-calendar :range="['2019-03-03', '2019-03-09']" first-day-of-week="7">
    </el-calendar>
    <div class="block">
      <div class="time">
        <span>9:00AM</span>
        <span>16:30PM</span>
      </div>
      <div class="timeline">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" hide-timestamp="true">
            <el-card>
              <span></span>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" hide-timestamp="true">
            <el-card>
              <span class="shu"></span>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="addNew">
        <i class="iconfont icon-jiahao1"></i> 新增日程
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "First",
  mounted() {
    let el = document.getElementsByClassName("el-timeline-item__node--normal");
    console.log(el);
    for (let i = 0; i < el.length; i++) {
      el[i].classList.add(`circle${i}`);
    }
  },
};
</script>


<style lang="less" scoped>
.block {
  display: flex;
  margin-top: -25px;
  flex-wrap: wrap;
  &:first-child {
    margin-top: 0;
  }
  .time {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 10%;
    margin-left: 10px;
    span {
      text-align: center;
      height: 111px;
      color: rgb(174, 178, 190);
    }
  }
  .timeline {
    width: 86%;
    margin-left: -5px;
  }
  .addNew {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: -12px;
    color: blue;
    i {
      font-size: 18px;
    }
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
// 球
.circle0 {
  background-color: rgb(247, 182, 65);
  border: 6px solid rgb(251, 218, 158);
}
.circle1 {
  background-color: rgb(219, 225, 235);
  border: 6px solid rgb(243, 245, 249);
}
// 线
.el-timeline-item__tail {
  position: absolute;
  left: 7px;
  height: 100%;
  border-left: 2px solid #e4e7ed;
}

// 内容区域背景颜色
.el-card {
  background-color: rgb(245, 248, 252) !important;
}
// 内容字体大小
.el-card__body {
  span {
    width: 7px;
    padding: 0;
    height: 23px;
    background:linear-gradient(rgb(29,227,232),rgb(17,151,233));
    position: absolute;
    left: 45px;
    top: 21px;
    border-radius: 6px;
  }
  .shu {
    width: 7px;
    padding: 0;
    height: 23px;
    background:linear-gradient(rgb(120,211,73),rgb(120,171,73));
    position: absolute;
    left: 45px;
    top: 21px;
    border-radius: 6px;
  }
  h4 {
    font-size: 16px !important;
  }
  p {
    margin-top: 11px;
    font-size: 13px;
  }
}
//日历header
.el-calendar__header {
  display: flex;
  justify-content: center;
}
//日历thead
.el-calendar__body {
  thead {
    background-color: rgb(247, 249, 255);
  }
}
// tbody去掉border
.current {
  border: none !important;
}
// tbody内容居中设置高度
.el-calendar-table .el-calendar-day {
  box-sizing: border-box;
  padding: 8px;
  height: 60px;
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div>
    <h4>新闻通知</h4>
    <ul>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information">
          自治区发展改革委印发《有序用电管理细则》的通知
          <span class="new">NEW</span>
        </a>
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information">
          自治区发展改革委印发《有序用电管理细则》的通知了吗没有通知啊
          <span class="new">NEW</span>
        </a >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
      <li class="lili">
        <div class="cir"></div>
        <a href="" class="information"
          >自治区发展改革委印发《有序用电管理细则》的通知</a
        >
        <a href="" class="date">2021-08-26</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped lang="less">
h4 {
  margin-left: 5px;
  margin-top: 10px;
}
ul {
  margin-top: 10px;
  height: 356px;
  overflow: auto;

  .lili {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .cir {
      width: 3px;
      height: 13px;
      border-radius: 50%;
      background-color: rgb(2, 115, 255);
    }
    .information {
      width: 82%;
      height: 30px;
      line-height: 30px;
      margin-left: 10px;
      color: black;
      .new {
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-left: 15px;
        margin-top: -5px;
        font-size: 13px;
        background-color: red;
        display: inline-block;
        vertical-align: middle;
        color: white;
        border-radius: 10px 10px 10px 0;
      }
    }
    .date {
      color: black;
    }
  }
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(210, 210, 210, 0.5);
}
</style>

<template>
  <div>
    <ul>
      <li class="lili" v-for="(news,index) in newsList" :key="news.id">
        <div class="cir"></div>
        <a :href="news.uri" class="information">
          {{news.title.slice(0,45)}}
          <span class="new" v-if="index<2">NEW</span>
        </a>
        <a href="" class="date">{{news.addTime}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "News",
  mounted(){
    // this.$store.dispatch('newsList','2')
  },
  computed:{
    ...mapState({
      newsList:state => state.news.newsList
    })
  }
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
      width: 13px;
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

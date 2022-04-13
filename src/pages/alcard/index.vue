<template>
<div>
    <div class="user">
      <!-- <h1 @click="ddd">Nihao</h1> -->
      <div v-for="data in allData" :key="data.id">
        <a :href="dataUrl(data)">
          <img :src="icon(data)" alt="" />
          <span>{{data.title}}</span>
        </a>
      </div>
  </div>
</div>


</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Alcard",
  data() {
    return {
      dialogTableVisible:false
    };
  },
  computed:{
      ...mapState({
      dataList: (state) =>  state.func.dataList
    }),
    allData(){
      if(this.dataList.length <= 12){
        return this.dataList
      } else {
        this.dataList.splice(12,this.dataList.length-12)
        return this.dataList
      }
    },
  },
    
  methods: {
    // ddd() {
    //   console.log(this.icon());
    // },
    dataUrl(data){
      return 'http://10.200.100.55:5200' + data.url
    },
    icon(data){
      return require('@/assets/navigation/' + data.icon);
    }
  },
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  //   justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  //   margin-top: 20px;
  div {
    width: 16%;
    height: 150px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      img {
        width: 50%;
        height: 60%;
      }
      span {
        margin-top: 10px;
      }
    }
  }
  img {
    width: 20%;
    height: 20%;
  }
}
</style>


<template>
  <div>
    <div class="user">
      <div v-for="data in commonlyList" :key="data.id">
        <a :href="data.url">
          <img :src="icon(data)" alt="" />
          <span>{{ data.title }}</span>
        </a>
      </div>
      <div @click="addCommon">
        <a href="#">
          <img src="@/assets/images/添加更多.svg" alt="" />
          <span>添加</span>
        </a>
      </div>
    </div>
    <!-- 功能选择隐藏框 -->
    <el-dialog
      title="常用功能选择"
      :visible.sync="dialogTableVisible"
      class="dialog">
      <div class="choose">
        <el-row>
          <el-col :span="14">
            <div class="left">
              <div class="title">常用功能</div>
              <div class="input">
                <el-input
                  placeholder="请输入要搜索的关键字"
                  suffix-icon="el-icon-search"
                  class="input-el"
                  v-model="input"
                ></el-input>
              </div>
            </div>
            <div class="left1">
              <div class="left1-top">
                <input type="checkbox" v-model="checked" @click="chooseAll" />
                <span class="chooseAll">全选({{dataList.length}})</span>
                
              </div>
              <div class="left1-bottom">
                <div
                  class="choose-icon"
                  v-for="data in dataList"
                  :key="data.id">
                  <input
                    type="checkbox"
                    @click="chooseFunc(data,$event)"
                    v-model="checkModel"
                    :value="data.id"/>
                  <div>
                    <img :src="icon(data)" alt="" />
                  </div>
                  <span>{{ data.title }}</span>
                </div>
              </div>
            </div>
          </el-col>
          <!-- 右侧部分 -->
          <el-col :span="10">
            <div class="right">
              <!-- 已选项与清空已选 -->
              <div class="right-top">
                <span class="chooseAll">已选</span>
                <span class="choose-num">{{ chooseData.length }}</span>
                <span class="xiang">项</span>
                <span class="clear" @click="deleteChoosed">清空已选</span>
              </div>
              <div class="right-bottom">
                <!-- 拖拽框 -->
                <vuedraggable class="wrapper" v-model="chooseData">
                  <transition-group>
                    <div class="choose-icon"
                      v-for="(choosed, index) in chooseData" :key="choosed.id">
                      <div class="circle-num">{{ index + 1 }}</div>
                      <div class="icon-img">
                        <img :src="icon(choosed)" alt="" />
                      </div>
                      <span>{{ choosed.title }}</span>
                      <i class="iconfont icon-tuozhuaiyidong"></i>
                      <div class="circle--" @click="deleteIcon(choosed,index)">-</div>
                    </div>
                  </transition-group>
                </vuedraggable>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="button">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="makeSure()">确定</el-button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { mapState } from "vuex";
import vuedraggable from 'vuedraggable';
export default {
  name: "Card",
  components: {vuedraggable},
  data() {
    return {
      dialogTableVisible: false,  //常用功能
      input: "",
      list:'list',
      chooseData:  [],
      checked: false,
      checkModel: [],
      
    };
  },
  watch: {
    checkModel() {
      if (this.checkModel.length == this.dataList.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  mounted() {
    console.log(this.checked);
    this.getData(this.list);  //获取全部功能
    this.getCommonly()  //获取常用功能
    this.$store.dispatch('getUserName') //获取用户名称
    this.chooseData = this.saveChooseData //修改已选框中内容为上次选择
    this.checkModel = this.saveCheckModel
  },
  computed: {
    ...mapState({
      dataList: (state) => state.func.dataList,
      commonlyList: (state) => state.func.commonlyList,
    }),
    saveChooseData(){
      let result = []
      if(localStorage.getItem('COMMONLY')){
        let obj = JSON.parse(localStorage.getItem('COMMONLY'))
        for (const key in obj) {
            result.push(obj[key]) 
        }
      }
      return result
    },
    saveCheckModel(){
      let result = []
      if(localStorage.getItem('COMMONLY')){
        let obj = JSON.parse(localStorage.getItem('COMMONLY'))
        for (const key in obj) {
            result.push(obj[key].id) 
        }
      }
      return result
    },
  },
  methods: {
    icon(data){
      return require('@/assets/navigation/' + data.icon);
    },
    addCommon() {
      this.dialogTableVisible = true;
      
    },
    //获取全部功能
    getData(params) {
      this.$store.dispatch("dataList",'list');
    },
    //获取常用功能
    getCommonly(){
      this.$store.dispatch('commonlyList')
    },
    //全选功能
    chooseAll() {
      if (this.checked) {
        this.checkModel = [];
        this.chooseData = []  //修改已选为空
      } else {
          this.chooseData = []
          this.dataList.forEach((item) => {
            this.chooseData.push(item)
            if (this.checkModel.indexOf(item.id) == -1) {
              this.checkModel.push(item.id);
            }
          });
      }
    },
    //添加功能到已选择
    chooseFunc(data,event) {
      //去重处理
      var result = this.chooseData.some((item) => item.id === data.id);
      if (!result) {
        if(this.chooseData.length<11){
          this.chooseData.push(data);
        } else {
          this.chooseData.shift()
          this.checkModel.shift()
          this.chooseData.push(data)
        }
      }
      //取消选中时，从chooseData中删掉该元素
      if(this.checkModel.indexOf(data.id) != -1){
        this.chooseData.forEach((item,index) => {
          if(item.id === data.id){
            this.chooseData.splice(index,1)
          }
        });
      }
      console.log(this.chooseData);
    },
    //删除
    deleteIcon(choosed,index){
      this.chooseData.splice(index,1) //删掉已选框中对应的元素
      let a = this.checkModel.indexOf(choosed.id) //得到checkModel中改id对应的位置
      this.checkModel.splice(a,1)
    },
    //清空已选
    deleteChoosed(){
      this.chooseData = []
      this.checkModel = []
    },
    //确定
    makeSure(){
      this.dialogTableVisible = false
      this.$store.dispatch('funcList',Object.assign({},this.chooseData))
      localStorage.setItem('COMMONLY',JSON.stringify(Object.assign({},this.chooseData)))
      this.getCommonly()
    },
    //取消
    cancel(){
      localStorage.setItem('COMMONLY','')
      this.chooseData = []
      this.checkModel = []
      this.dialogTableVisible = false

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
.choose {
  width: 100%;
  height: 500px;
  padding: 0;
  margin-top: -49px;
  .left {
    display: flex;
    justify-content: space-between;
    padding: 0px 4%;
    min-height: 36px;
    height: 70px;
    border-radius: 30px 0 0 0;
    background-color: rgb(249, 249, 252);
    .title {
      line-height: 70px;
      font-size: 20px;
      font-weight: 600;
      color: rgb(72, 151, 253);
    }
    .input {
      margin-top: 10px;
    }
  }
  .left1 {
    min-height: 36px;
    padding-left: 20px;
    border-left: 1px solid rgb(233, 235, 242);
    border-bottom: 1px solid rgb(233, 235, 242);
    border-radius: 0 0 0 30px;
    background-color: rgb(255, 255, 255);
    height: 640px;
    .left1-top {
      height: 45px;
      display: flex;
      align-items: center;
      input {
        width: 18px;
        height: 18px;
        margin-top: 2px;
      }
      .chooseAll {
        margin-left: 10px;
        font-size: 16px;
        width: 80%;
      }
      .clear {
        font-size: 16px;
        color: rgb(63, 146, 255);
      }
    }
    .left1-bottom {
      height: 92%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .choose-icon {
        width: 34%;
        height: 50px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        margin: 11px 0;
        input {
          width: 18px;
          height: 18px;
          margin-top: 2px;
        }
        div {
          width: 50px;
          height: 100%;
          margin-left: 5%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          margin-left: 8%;
          font-size: 16px;
        }
      }
    }
  }
  .right {
    min-height: 500px;
    height: 709px;
    padding: 0 20px;
    border: 1px solid rgb(233, 235, 242);
    border-radius: 0 30px 30px 0;
    background-color: rgb(255, 255, 255);
    overflow: auto;
    .right-top {
      height: 45px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      input {
        width: 18px;
        height: 18px;
        margin-top: 2px;
      }
      .chooseAll {
        margin-left: 10px;
        font-size: 16px;
        width: 10%;
      }
      .choose-num {
        font-size: 29px;
        margin-top: -10px;
        width: 13%;
        text-align: center;
      }
      .xiang {
        font-size: 16px;
        width: 52%;
      }
      .clear {
        font-size: 16px;
        color: rgb(63, 146, 255);
      }
    }
    .right-bottom {
      height: 130%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .choose-icon {
        width: 100%;
        height: 50px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        padding: 11px 0;
        &:hover {
          background-color: rgb(238, 245, 255);
        }
        .circle-num {
          width: 20px;
          height: 20px;
          background-color: rgb(98, 200, 202);
          border-radius: 50%;
          line-height: 20px;
          text-align: center;
          color: white;
        }
        .icon-img {
          width: 50px;
          height: 100%;
          margin-left: 3%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          margin-left: 5%;
          font-size: 16px;
          width: 55%;
        }
        .circle-- {
          width: 20px;
          height: 20px;
          background-color: rgb(244, 97, 96);
          border-radius: 50%;
          line-height: 16px;
          text-align: center;
          margin-left: 20px;
          color: white;
          padding-left: 0.5px;
          font-size: 26px;
        }
      }
    }
  }
  .button {
    float: right;
  }
}

.dialog {
  width: 130%;
  left: -13%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
<style lang="less" >
.el-dialog {
  height: 850px;
  border-radius: 25px;
}
</style>

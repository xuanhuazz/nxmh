<template>
  <div>
    <div class="user">
      <div @click="userCtr">
        <a href="#">
          <img src="@/assets/images/添加更多.svg" alt="" />
          <span>用户管理</span>
        </a>
      </div>
      <div v-for="data in commonlyList" :key="data.id">
        <a :href="dataUrl()">
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

    <!-- 用户管理框 -->
    <div class="userbg" v-if="userbgStaut"></div>
    <div class="userbox" v-if="userboxStaut">
      <div class="options">
        <div class="userbox_item" @click="resetPass">重置密码</div>
        <div class="userbox_item" @click="resetPhone">手机验证</div>
        <div class="userbox_item" @click="resetEmail">邮箱验证</div>
      </div>
      <div class="userbox_info">
         <el-table
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="mail"
            label="邮箱"
            width="180">
          </el-table-column>
          
        </el-table>
      </div>

      <div class="close_phone" @click="close_userbox" style="right:0;top:0;">╳</div>
    </div>
    <!-- 手机号验证框 -->
    <div class="checkbox_phone" v-if="checkbox_phoneStaut">
      <div class="phone_num">手机号: <span>{{currentRow.phone}}</span></div>
      <div class="inputCode">
        <input type="text" placeholder="请输入验证码" v-model="phoneInput"/>
        <div class="sendcode" @click="phoneY(currentRow.phone)">发送验证码</div>
      </div>
      <div class="phone_sure" @click="surePhone">确定</div>
      <div class="close_phone" @click="close_phone">╳</div>
    </div>
    <!-- 手机号验证框 -->
    <div class="checkbox_email" v-if="checkbox_emailStaut">
      <div class="phone_num">邮箱号:<span>{{currentRow.mail}}</span></div>
      <div class="resetEamil" style="margin-left: 0" @click="mailY(currentRow.mail)">发送验证码</div>
      <div class="inputCode" style="margin-top: 20px">
        <input type="text" placeholder="输入验证码" v-model="mailInput"/>
        <div class="resetEamil" @click="sureMail">重置邮箱</div>
      </div>
      <div class="close_email" @click="close_email">╳</div>
    </div>
    <!-- 邮箱验证框 -->
    <!-- 功能选择隐藏框 -->
    <el-dialog
      title="常用功能选择"
      :visible.sync="dialogTableVisible"
      class="dialog"
    >
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
                <span class="chooseAll">全选({{ dataList.length }})</span>
              </div>
              <div class="left1-bottom">
                <div
                  class="choose-icon"
                  v-for="data in dataList"
                  :key="data.id"
                >
                  <input
                    type="checkbox"
                    @click="chooseFunc(data, $event)"
                    v-model="checkModel"
                    :value="data.id"
                  />
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
                    <div
                      class="choose-icon"
                      v-for="(choosed, index) in chooseData"
                      :key="choosed.id"
                    >
                      <div class="circle-num">{{ index + 1 }}</div>
                      <div class="icon-img">
                        <img :src="icon(choosed)" alt="" />
                      </div>
                      <span>{{ choosed.title }}</span>
                      <i class="iconfont icon-tuozhuaiyidong"></i>
                      <div class="circle--" @click="deleteIcon(choosed, index)">
                        -
                      </div>
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
import vuedraggable from "vuedraggable";
import CryptoJS from "@/api/crypto-js";
import {reqGetAllUser,reqGetMobile,reqGetMail} from '@/api/index'
import store from '@/store'

export default {
  name: "Card",
  components: { vuedraggable },
  data() {
    return {
      dialogTableVisible: false, //常用功能
      input: "",
      list: "list",
      chooseData: [],
      checked: false,
      checkModel: [],
      checkbox_phoneStaut: false,
      checkbox_emailStaut: false,
      userboxStaut: false,
      userbgStaut: false,
      tableData: [],
      currentRow: null, //点击信息
      phoneVerification:'', //获取手机验证码
      mailVerification:'',  //获取mail验证码
      phoneInput:'',  //手机验证码输入
      mailInput:''  //邮箱验证码输入
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
    this.getData(this.list); //获取全部功能
    this.getCommonly(); //获取常用功能
    this.getUserinfo(); //获取用户信息
    this.$store.dispatch("getUserName"); //获取用户名称
    this.chooseData = this.saveChooseData; //修改已选框中内容为上次选择
    this.checkModel = this.saveCheckModel;
  },
  computed: {
    ...mapState({
      dataList: (state) => state.func.dataList,
      commonlyList: (state) => state.func.commonlyList,
      userInfo: (state) => state.func.userInfo,
    }),
    saveChooseData() {
      let result = [];
      if (localStorage.getItem("COMMONLY")) {
        let obj = JSON.parse(localStorage.getItem("COMMONLY"));
        for (const key in obj) {
          result.push(obj[key]);
        }
      }
      return result;
    },
    saveCheckModel() {
      let result = [];
      if (localStorage.getItem("COMMONLY")) {
        let obj = JSON.parse(localStorage.getItem("COMMONLY"));
        for (const key in obj) {
          result.push(obj[key].id);
        }
      }
      return result;
    },
  },
  methods: {
    // 关闭
    close_phone() {
      this.checkbox_phoneStaut = false;
      this.userboxStaut = true;

    },
    close_email() {
      this.checkbox_emailStaut = false;
      this.userboxStaut = true;

    },
    close_userbox() {
      this.userboxStaut = false;
      this.userbgStaut = false;
    },
    // 重置邮箱
    resetEmail() {
      this.checkbox_emailStaut = true;
      this.userboxStaut = false;
    },
    // 重置手机号
    resetPhone() {
      this.checkbox_phoneStaut = true;
      this.userboxStaut = false;
    },
    // 重置密码
    resetPass() {
      alert("密码重置成功");
    },
    // 用户管理
    async userCtr() {
      this.userboxStaut = true;
      this.userbgStaut = true;
      let result = await reqGetAllUser()
      console.log(result.data);
      this.tableData = result.data
      this.tableData.forEach(i =>{
        i.sex = i.sex == 0?'男':'女'
      })
    },
    //获取用户点击的信息
    handleCurrentChange(val) {
        this.currentRow = val;
        console.log(this.currentRow);
    },
    //获取手机验证码
    async phoneY(mobile) {
      let result = await reqGetMobile(mobile)
      if(result.code == 200){
        this.phoneVerification = result.msg.slice(9,15)
        console.log(this.phoneVerification);
      }
    },
    //手机验证码确定
    surePhone(){
      if(this.phoneInput === this.phoneVerification) {
        alert('成功！')
        this.userboxStaut = false;
        this.userbgStaut = false;
        this.checkbox_phoneStaut = false;
      }else {
        alert('失败！')
      }
    },
    //邮箱获取
    async mailY(mail){
      let result = await reqGetMail(mail)
      console.log(result);
      if(result.code == 200){
        this.mailVerification = result.msg
        console.log(this.mailVerification);
      }
    },
    //邮箱验证
    //手机验证码确定
    sureMail(){
      if(this.mailInput === this.mailVerification) {
        alert('成功！')
        this.userboxStaut = false;
        this.userbgStaut = false;
        this.checkbox_phoneStaut = false;
      }else {
        alert('失败！')
      }
    },
    dataUrl() {
      let date = new Date();
      let aaaa = { code: store.state.func.userName, date: date, span: "240" };
      let bbb = this.encrypt(aaaa);
      let dfsdf = "http://10.200.100.55:5200/EsgSso.html?req=" + bbb;
      return dfsdf;
    },
    encrypt(info) {
      let result = "olvEsTYBHLQiWCsX";
      let p = CryptoJS.enc.Utf8.parse;
      let encrypt = CryptoJS.AES.encrypt;
      let cy = CryptoJS;
      let key = p(result + result);
      let iv = p(result);
      let encrypt_ked = encrypt(JSON.stringify(info), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: cy.mode.CBC,
        padding: cy.pad.Pkcs7,
      }).toString();
      return encrypt_ked;
    },
    icon(data) {
      return require("@/assets/navigation/" + data.icon);
    },
    addCommon() {
      this.dialogTableVisible = true;
    },
    //获取全部功能
    getData(params) {
      this.$store.dispatch("dataList", "list");
    },
    //获取常用功能
    getCommonly() {
      this.$store.dispatch("commonlyList");
    },
    //获取用户信息
    getUserinfo() {
      // this.$store.dispatch("userInfo");
    },
    //全选功能
    chooseAll() {
      if (this.checked) {
        this.checkModel = [];
        this.chooseData = []; //修改已选为空
      } else {
        this.chooseData = [];
        this.dataList.forEach((item) => {
          this.chooseData.push(item);
          if (this.checkModel.indexOf(item.id) == -1) {
            this.checkModel.push(item.id);
          }
        });
      }
    },
    //添加功能到已选择
    chooseFunc(data, event) {
      //去重处理
      var result = this.chooseData.some((item) => item.id === data.id);
      if (!result) {
        if (this.chooseData.length < 11) {
          this.chooseData.push(data);
        } else {
          this.chooseData.shift();
          this.checkModel.shift();
          this.chooseData.push(data);
        }
      }
      //取消选中时，从chooseData中删掉该元素
      if (this.checkModel.indexOf(data.id) != -1) {
        this.chooseData.forEach((item, index) => {
          if (item.id === data.id) {
            this.chooseData.splice(index, 1);
          }
        });
      }
      console.log(this.chooseData);
    },
    //删除
    deleteIcon(choosed, index) {
      this.chooseData.splice(index, 1); //删掉已选框中对应的元素
      let a = this.checkModel.indexOf(choosed.id); //得到checkModel中改id对应的位置
      this.checkModel.splice(a, 1);
    },
    //清空已选
    deleteChoosed() {
      this.chooseData = [];
      this.checkModel = [];
    },
    //确定
    makeSure() {
      this.dialogTableVisible = false;
      this.$store.dispatch("funcList", Object.assign({}, this.chooseData));
      localStorage.setItem(
        "COMMONLY",
        JSON.stringify(Object.assign({}, this.chooseData))
      );
      this.getCommonly();
    },
    //取消
    cancel() {
      localStorage.setItem("COMMONLY", "");
      this.chooseData = [];
      this.checkModel = [];
      this.dialogTableVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
.box_options {
  margin: 10px 0;
}
.box_options div {
  width: 100px;
  text-align: center;
}
.userbox_info_options {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #eee;
  height: 30px;
}
.options {
  display: flex;
  justify-content: flex-end;
  margin: 20px 10px 20px 0;
}
.close_email,
.close_phone {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  right: -10px;
  top: -10px;
  border: 1px solid #000;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
.resetEamil {
  margin-left: 50px;
  background: rgb(189, 189, 189);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  font-size: 12px;
  width: 100px;
  height: 30px;
}
.checkbox_email {
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  width: 400px;
  height: 180px;
  background: #fff;
  z-index: 11;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.sendcode {
  margin-left: 10px;
  border: 1px solid #000;
  width: 100px;
  height: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.phone_sure {
  width: 100px;
  height: 30px;
  background: rgb(189, 189, 189);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
}
.checkbox_phone {
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  width: 400px;
  height: 180px;
  background: #fff;
  z-index: 11;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.phone_num {
  font-size: 24px;
  margin-bottom: 20px;
}
.inputCode {
  display: flex;
}
.userbox_item {
  // height: 60px;
  width: 100px;
  cursor: pointer;
  background: #3496eb;
  height: 30px;
  // width: 80%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  margin-left: 10px;
}
.userbox {
  position: fixed;
  width: 600px;
  // height: 120px;
  height: 600px;
  overflow-y: auto;
  background: #fff;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border-radius: 3px;
  padding: 10px;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // justify-content: space-around;
}
.userbg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0.3;
}
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

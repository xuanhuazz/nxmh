<template>
  <div>
    <div class="user">
      <div v-for="data in dataList.list" :key="data.id">
        <a :href="data.url">
          <img :src="data.icon" alt="" />
          <span>{{data.title}}</span>
        </a>
      </div>
      <div @click="addCommon">
        <a href="#">
          <img src="@/assets/logo.png" alt="" />
          <span>添加</span>
        </a>
      </div>
    </div>
    <el-dialog title="常用功能选择" :visible.sync="dialogTableVisible" class="dialog">
      <div class="choose">
        <el-row >
          <el-col :span="14">
            <div class="left ">
              <div class="title">常用功能</div>
              <div class="input">
                <el-input placeholder="请输入要搜索的关键字" suffix-icon="el-icon-search" class="input-el" v-model="input"></el-input>
              </div>
            </div>
            <div class="left1">
              <div class="left1-top">
                <input type="checkbox" :checked = "true">
                <span class="chooseAll">全选（15）</span>
                <span class="clear">清空列表</span>
              </div>
              <div class="left1-bottom">
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
                <div class="choose-icon">
                  <input type="checkbox" :checked = "true">
                  <div>
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <span>国资监管</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="right">
              右1
            </div>
          </el-col>
    </el-row>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "First",
  data() {
    return {
      dataList: {
        code: "200",
        list: [
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          {
            icon: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
            id: "5ea1fdc1-8cea-4499-91d9-a8b5a8326844",
            orderno: 1,
            title: "占有产权登记",
            url: "http://localhost:5200/api/runtime/sys/v1.0/routerRedirect?ssoEntpi=C5hvBTwbKjM%252Fs7qkR3IKPUkG%252BGn1q7qKEw2%252Fh7JQUG1jwpQW4iI%252BPlnAp5mr6UnoWGMT5iNsh6SWHJUm%252FqUhdt53LYDlIDvIlavtIRJG8SvTOPf1MdMCgw%252BP3mUgoZsXGpkJhPJGUH%252BkPvbMuLyMvq8trJx0xK55JLc1KZV8uNs%253D",
          },
          
        ],
      },
      dialogTableVisible:false,
      input:''
    };
  },
  methods: {
    addCommon() {
      this.dialogTableVisible = true
      this.$store.dispatch("categoryList");
    },
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
    width: 19%;
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
  background-color: pink;
  .left {
  display: flex;
  justify-content: space-between;
  padding: 0px 4%;
  min-height: 36px;
  height: 70px;
  border-radius: 10px 0 0 0;
  background-color: rgb(249,249,252);
  .title {
    line-height: 70px;
    font-size: 20px;
    font-weight: 600;
    color: rgb(72,151,253);
  }
  .input {
    margin-top: 10px;
  }
}
  .left1 {
    min-height: 36px;
    padding-left: 20px;
    border: 1px solid #666;
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
        color: rgb(63,146,255);
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
    height: 130px;
    border: 1px solid #666;

    background-color: rgb(255, 255, 255);
  }
}

.dialog {
  width: 130%;
  left: -13%;
}
</style>
<style lang="less" >
.el-dialog {
    height: 800px;
}
</style>

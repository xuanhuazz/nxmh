<template>
<div>
    <div class="user">
      <div v-for="data in dataList.list" :key="data.id">
        <a :href="data.url">
          <img :src="data.icon" alt="" />
          <span>{{data.title}}</span>
        </a>
      </div>
  </div>
</div>


</template>

<script>
export default {
  name: "Alcard",
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
      dialogTableVisible:false
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
</style>


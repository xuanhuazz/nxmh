<template>
<div>
    <div class="user">
      <div v-for="data in allData" :key="data.id">
        <a :href="dataUrl()">
          <img :src="icon(data)" alt="" />
          <span>{{data.title}}</span>
        </a>
      </div>
  </div>
</div>


</template>

<script>
import { mapState } from 'vuex';
import CryptoJS from '@/api/crypto-js'
import store from '@/store'
export default {
  name: "Alcard",
  data() {
    return {
      dialogTableVisible:false
    };
  },
  computed:{
      ...mapState({
      dataList: (state) =>  state.func.dataList,
      userName: state => state.func.userName
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
  mounted(){
  },
  methods: {
    // ddd() {
    //   console.log(this.icon());
    // },
    dataUrl(){
      let date = new Date();
      let aaaa = {"code": store.state.func.userName, "date": date, "span": "240"};
			let bbb = this.encrypt(aaaa);
      let dfsdf ="http://10.200.100.55:5200/EsgSso.html?req="+bbb
      return dfsdf
    },
    icon(data){
      return require('@/assets/navigation/' + data.icon);
    },
    encrypt(info){
        let result = 'olvEsTYBHLQiWCsX';
				let p = CryptoJS.enc.Utf8.parse;
				let encrypt = CryptoJS.AES.encrypt;
				let cy = CryptoJS;
				let key = p(result + result);
				let iv = p(result);
				let encrypt_ked = encrypt(JSON.stringify(info), key,
					{ keySize: 128 / 8, iv: iv, mode: cy.mode.CBC, padding: cy.pad.Pkcs7 }).toString();
				return encrypt_ked;
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


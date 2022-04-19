<template>
  <div class="schedule-content">
    <i class="left-h" style="cursor: pointer;"><img src="@/assets/images/日历左划.svg" alt="" @click="lastWeek"></i>
    <i class="left-r" style="cursor: pointer;"><img src="@/assets/images/日历右划.svg" alt="" @click="nextWeek"></i>
    <el-calendar :range="timeArr(a,b)" first-day-of-week= '7' >
        <template
        slot="dateCell"
        slot-scope="{date, data}">
        <p class="viewp" @click="view(date)">
          {{data.day.slice(8,10)}}
        </p>
      </template>
    </el-calendar>
    <div class="block">
      <div class="time" >
        <span v-for="(data,index) in schList" :key="index">{{data.startTime}}</span>
      </div>
      <div class="timeline" v-if="schList.length>0">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12"  hide-timestamp= true v-for="(data,index) in schList" :key="index">
            <el-card>
              <span></span>
              <h4>{{data.title}}</h4>
              <p>{{data.content}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="nothing">
        暂无日程
      </div>
    </div>
    <div class="addNew" @click="addSchedule" style="cursor: pointer;">
        <i class="iconfont icon-jiahao1"></i> 新增日程
    </div>
    <!-- 新增日程隐藏框 -->
    <el-dialog title="新增日程" :visible.sync="dialogFormVisible" custom-class="schedule-dialog">
      <div class="schedule">
        <el-form :model="form">
          <el-form-item label="标题" >
            <el-input v-model="form.title" class="biaoti" size="small"></el-input>
          </el-form-item>
            <el-form-item label="内容">
              <el-input type="textarea" :rows="3" v-model="form.content" class="neirong" ref="inp"></el-input>
            </el-form-item>
          <el-form-item label="时间" >
                <el-date-picker
                  v-model="value"
                  type="datetimerange"
                  range-separator="→"
                  start-placeholder="开始日期"
                  value-format='yyyy-MM-dd hh:mm:ss'
                  end-placeholder="结束日期" class="time">
                </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="makeSure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "First",
  data(){
    return{
      dialogFormVisible:false,  //新建日常
      form: {
          title: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          content: '',
          desc: ''
        },
      value:'',
      time:'',
      textarea:'',
      a:0,
      b:6
    }
  },
  mounted() {
    let el = document.getElementsByClassName("el-timeline-item__node--normal");
    for (let i = 0; i < el.length; i++) {
      el[i].classList.add(`circle${i}`);
    }
    this.$store.dispatch('schList',this.YYY(new Date()))
  },
  computed:{
    
    ...mapState({
      schList:state => state.schedule.schList
    })
  },
  methods:{
    addSchedule(){
      this.dialogFormVisible = true
    },
    //确定添加日程
    makeSure(){
      this.dialogFormVisible = false
      this.$store.dispatch('addSchedule',{date:this.value[0].slice(0,10),s:this.value[0],e:this.value[1],title:this.form.title,content:this.form.content})
      this.$store.dispatch('schList',this.YYY(this.time))
    },
    //日期格式函数
    YYY(date){
      let month = (parseInt(date.getMonth())+1) <10?'0'+(parseInt(date.getMonth())+1).toString():date.getMonth()+1
      let day = date.getDate()<10?'0'+date.getDate():date.getDate()
      return date.getFullYear()+'-'+month+'-'+day
    },
    view(date){
      this.time = date
      setTimeout(()=>{
        console.log('获取新内容');
        this.$store.dispatch('schList',this.YYY(date))
      },100)
    },
    //获取周几的数据
    nday(nowTemp,n){
      //var nowTemp = new Date();//当前时间
      var oneDayLong = 24*60*60*1000 ;//一天的毫秒数
      var c_time = nowTemp.getTime() ;//当前时间的毫秒时间
      var c_day = nowTemp.getDay()||7;//当前时间的星期几
      var s_time = c_time + (n-c_day)*oneDayLong;//当前周n的毫秒时间
      var nday = new Date(s_time);//设置周n时间对象
      return nday
    },
    //获取周日-周一的数据
    timeArr(a,b){
      let startTime = this.YYY(this.nday(new Date(),a))
      let endTime = this.YYY(this.nday(new Date(),b))
      let timearr = []
      timearr.push(startTime)
      timearr.push(endTime)
      return timearr
    },
    nextWeek(){
      this.a = this.a + 7
      this.b = this.b + 7
    },
    lastWeek(){
      this.a = this.a-7
      this.b = this.b-7
    }
    
  }
};
</script>


<style lang="less" scoped>
.schedule-content {
  margin-top: -10px;
  padding: 0 30px;
  .left-h {
  position: relative;
  left: 2%;
  top: 27px;
  }
  .left-r {
  position: relative;
  left: 93%;
  top: 27px;
  }
  .block {
    display: flex;
    margin-top: -25px;
    flex-wrap: wrap;
    height: 215px;
    overflow: auto;
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
    .nothing {
      width: 100%;
      height: 91%;
      line-height: 170px;
      text-align: center;
      font-size: 30px;
    }
  }
  .addNew {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: -4px;
    color: blue;
    i {
      font-size: 18px;
    }
  }
  .line {
    width: 92%;
    height: 1px;
    margin-left: 10px;
    background-color: pink;
  }
  .schedule {
      width: 85%;
      height: 220px;
      border: 1px solid #DCDFE6;
      border-radius: 10px;
      margin-top: -24px;
      margin-left: 16px;
      padding: 20px 30px;
      .biaoti {
        width: 93%;
        border-radius: 5px;
        outline:none;
        font-size: 18px;
      }
      .neirong {
        width: 93%;
        border-radius: 5px;
        font-style: 20px;
        outline:none;
      }
      .time {
        width: 93%;
        height: 40px!important;
      }
  }
  .dialog-footer {
  margin-top: -21px;
  padding-right: 3.5%;
  }
}
.viewp{
  width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
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
  border: none;
  padding: 2px 20px;
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
  padding: 0;
}
.next {
  border: none !important;
  padding: 0;
}
// tbody内容居中设置高度
.el-calendar-table .el-calendar-day {
  box-sizing: border-box;
  padding: 8px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
//修改新增日程框的大小
.schedule-dialog{
  height: 400px;
  width: 42%;
}
//修改form为浮动
.el-form-item__content {
    width: 90%;
    font-size: 16px;
    float: left;
}

</style>
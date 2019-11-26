<template>
  <div class="detail" v-if="tableData">
    <div class="detail-name">
      <h3>{{this.$route.params.name}}</h3>
      <Icon type="ios-close-circle-outline" size="20" @click="dropOut" class="outIcon" />
    </div>
    <div class="detail-filter">
      <div class="condition-driver">
        <span class="condition-title">DSM驾驶员状态监测:</span>
        <div class="condition">
          <span
            :class="index===activeClass?{'select':true}:''"
            @click="changeCondition(DsmCondition.eName[index],index)"
            v-for="(item,index) in DsmCondition.cName"
            :key="index"
          >{{item}} {{DsmCondition[DsmCondition.eName[index]]}}</span>
        </div>
      </div>
      <div class="condition-car">
        <span class="condition-title">ADAS高级驾驶辅助系统:</span>
        <div class="condition">
          <span
            :class="(index+5)===activeClass?{'select':true}:''"
            @click="changeCondition(AdasCondition.eName[index],index+5)"
            v-for="(item,index) in AdasCondition.cName"
            :key="index"
          >{{item}} {{AdasCondition[AdasCondition.eName[index]]}}</span>
        </div>
      </div>
    </div>
    <div class="detail-table">
      <DetailTable :columns="columns" :childrenData="showData" :outBoder="true" :Height="300"></DetailTable>
    </div>
  </div>
  <div class="demo-spin-col" v-else>
    <Spin fix>
      <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
  </div>
</template>

<script>
import { log } from "util";
import { type } from "os";
import DetailTable from "./table.vue";
export default {
  components: {
    DetailTable
  },
  props: ["date", "toChild"],
  methods: {
    dropOut() {
      this.$router.replace("/");
    },
    filterCondition(_this) {
      _this.DsmCondition.fatigueDriving =
        _this.detailData[0].fatigueDriving.length;
      _this.DsmCondition.call = _this.detailData[0].call.length;
      _this.DsmCondition.smokes = _this.detailData[0].smokes.length;
      _this.DsmCondition.distraction = _this.detailData[0].distraction.length;
      _this.DsmCondition.abnormal = _this.detailData[0].abnormal.length;
      _this.AdasCondition.detection = _this.detailData[0].detection.length;
      _this.AdasCondition.transformation =
        _this.detailData[0].transformation.length;
      _this.AdasCondition.deviation = _this.detailData[0].deviation.length;
      _this.AdasCondition.collide = _this.detailData[0].collide.length;
      _this.AdasCondition.peopleCollide =
        _this.detailData[0].peopleCollide.length;
      _this.AdasCondition.distance = _this.detailData[0].distance.length;
      _this.AdasCondition.overrun = _this.detailData[0].overrun.length;
    },
    changeCondition(val, index) {
      this.showData = this.detailData[0][val];
      this.activeClass = index;
    },
    formatDate(date) {
      let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    }
  },
  data() {
    return {
      activeClass: 0,
      DsmCondition: {
        cName: ["疲劳驾驶", "接打电话", "抽烟", "分神驾驶", "驾驶员异常"],
        eName: ["fatigueDriving", "call", "smokes", "distraction", "abnormal"],
        fatigueDriving: "",
        call: "",
        smokes: "",
        distraction: "",
        abnormal: ""
      },
      AdasCondition: {
        cName: [
          "阻碍检测",
          "频繁变道",
          "车道偏离",
          "前方碰撞",
          "行人碰撞",
          "车距过近",
          "道路标识超限"
        ],
        eName: [
          "detection",
          "transformation",
          "deviation",
          "collide",
          "peopleCollide",
          "distance",
          "overrun"
        ],
        detection: "",
        transformation: "",
        deviation: "",
        collide: "",
        peopleCollide: "",
        distance: "",
        overrun: ""
      },
      tableData: "",
      detailData: "",
      columns: [
        {
          title: "序号",
          type: "index",
          align: "center"
        },
        {
          title: "报警级别",
          key: "alarmLevel",
          align: "center",
          width: "120",
          sort: true
        },
        {
          title: "报警时间",
          key: "alarmTime",
          width: "100",
          align: "center"
        },
        {
          title: "报警位置",
          key: "alarmLocation",
          tooltip: true,
          width: "130",
          align: "center"
        },
        {
          title: "当前车速",
          key: "speed",
          width: "100",
          align: "center"
        },
        {
          title: "车辆",
          key: "car",
          width: "70",
          align: "center"
        },
        {
          title: "线路",
          key: "line",
          width: "78",
          align: "center"
        }
      ],
      showData: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$props.toChild > 0) {
        vm.$http.get("/detail.json").then(res => {
          vm.tableData = res.data.list;
          vm.detailData = vm.tableData.filter(val => val.id == to.query.q);
          vm.detailData = vm.detailData.filter(
            val => val.date == vm.formatDate(vm.$props.date)
          );
          vm.showData = vm.detailData[0].fatigueDriving;
          vm.filterCondition(vm);
          next();
        });
      } else {
        vm.$router.replace("/");
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.detailData = this.tableData.filter(val => val.id == to.query.q);
    this.detailData = this.detailData.filter(
      val => val.date == this.formatDate(this.$props.date)
    );
    this.showData = this.detailData[0].fatigueDriving;
    this.filterCondition(this);
    this.activeClass = 0;
    next();
  }
};
</script>

<style scoped>
.detail-name {
  position: relative;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #272836;
  padding-left: 20px;
}
.outIcon {
  position: absolute;
  top: 0;
  right: 20px;
}
.detail-filter {
  width: 680px;
  height: 110px;
  margin: 20px auto;
  padding-top: 10px;
  border: 1px solid #dcdee2;
}
.condition {
  display: inline-block;
  width: 70%;
}
.condition span {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #272836;
}
.condition span:hover {
  color: #6cbaf8;
}
.detail-table {
  width: 680px;
  margin: 0 auto;
  /* overflow-y: auto;
  margin-bottom: 120px; */
}
.condition-title {
  display: inline-block;
  vertical-align: top;
  width: 25%;
  margin-left: 20px;
  color: #aab4c0;
}
.condition-driver {
  margin-bottom: 10px;
  border-bottom: 1px dotted #dcdee2;
}
.select {
  color: #6cbaf8 !important;
}
.detail {
  width: 700px;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
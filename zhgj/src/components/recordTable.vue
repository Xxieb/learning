<template>
  <div>
    <div class="filter">
      <div class="select">
        <Select v-model="group" style="width:100px" @on-change="selectChange">
          <Option v-for="item in groupList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="date">
        <DatePicker
          type="date"
          placeholder="Select date"
          style="width: 200px"
          v-model="date"
          @on-change="dateChange"
          :clearable="false"
        ></DatePicker>
      </div>
      <div class="search">
        <Input
          prefix="ios-search"
          placeholder="搜索驾驶员"
          style="width: 150px"
          v-model="name"
          @on-change="searchChange"
        />
      </div>
    </div>
    <div class="table">
      <Table :columns="columns" :childrenData="showData" :Height='200'></Table>
    </div>
    <div class="page" v-if="showData.length">
      <div style="float: right;">
        <Page
          :total="filterData.length"
          :page-size='30'
          :page-size-opts=[15,30,40]
          @on-change="changePage"
          @on-page-size-change="changeOnePage"
          show-total
          show-sizer
        ></Page>
      </div>
    </div>
    <transition name="fade">
      <router-view class="detail" :date="date" :toChild="toChild"></router-view>
    </transition>
  </div>
</template>
<script>
import Table from "./table";
export default {
  components: {
    Table
  },
  data() {
    return {
      name: "",
      showData: [],
      onePageData: 30,
      date: "",
      groupList: [
        {
          value: "第一大队",
          label: "第一大队"
        },
        {
          value: "第二大队",
          label: "第二大队"
        },
        {
          value: "第三大队",
          label: "第三大队"
        }
      ],
      group: "第一大队",
      filterData: "",
      selectData: "",
      dateData: "",
      toChild:-1,
      columns: [
        {
          title: "操作",
          type: "html",
        },
        {
          title: "序号",
          type: "index",
        },
        {
          title: "驾驶员",
          key: "name"
        },
        {
          title: "DSM驾驶员状态监测（次）",
          children: [
            {
              title: "疲劳驾驶",
              key: "fatigueDrivingL",
            },
            {
              title: "接打电话",
              key: "callL"
            },
            {
              title: "抽烟",
              key: "smokesL"
            },
            {
              title: "分神驾驶",
              key: "distractionL"
            },
            {
              title: "驾驶员异常",
              key: "abnormalL"
            }
          ]
        },
        {
          title: "ADAS高级驾驶辅助系统（次）",
          align: "center",
          children: [
            {
              title: "阻碍检测",
              key: "detectionL",
            },
            {
              title: "频繁变道",
              key: "transformationL"
            },
            {
              title: "车道偏离",
              key: "deviationL"
            },
            {
              title: "前方碰撞",
              key: "collideL"
            },
            {
              title: "行人碰撞",
              key: "peopleCollideL"
            },
            {
              title: "车距过近",
              key: "distanceL"
            },
            {
              title: "道路标识超限",
              key: "overrunL"
            }
          ]
        },
        {
          title: "总计",
          key: "counts"
        }
      ],
      tabledata: ""
    };
  },
  methods: {
    showTableData(page) {
      let data = [],
        totalPages = 0,
        lastPage = 0;
      totalPages = parseInt(this.filterData.length / this.onePageData + 1);
      page < totalPages
        ? (lastPage = this.onePageData)
        : (lastPage = this.filterData.length % this.onePageData);
      for (let i = (page - 1) * 10; i < lastPage + (page - 1) * 10; i++) {
        data.push(this.filterData[i]);
      }
      return data;
    },
    formatDate(date) {
      let y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage(page) {
      this.showData = this.showTableData(page);
    },
    changeOnePage(num) {
      this.onePageData = num;
      this.changePage(1);
    },
    selectChange(val) {
      this.$route.path === "/" ? "" : this.$router.replace("/");
      this.selectData = this.tabledata.filter(value => value.group === val);
      this.filterData = this.selectData.filter(
        value => value.date === this.formatDate(this.date)
      );
      this.changePage(1);
    },
    dateChange(date) {
      this.$route.path === "/" ? "" : this.$router.replace("/");
      this.dateData = this.selectData.filter(value => value.date === date);
      this.filterData = this.dateData;
      this.changePage(1);
    },
    searchChange() {
      this.filterData = this.dateData.filter(
        value => value.name.indexOf(this.name) >= 0
      );
      this.changePage(1);
    }
  },
  created() {
    this.$http.get("/table.json").then(res => {
      this.tabledata = res.data;
      this.selectData = this.tabledata.filter(
        value => value.group === this.group
      );
      this.dateData = this.selectData.filter(
        value => value.date === this.formatDate(this.date)
      );
      this.filterData = this.dateData;
      this.changePage(1);
    });
    this.date = this.formatDate(new Date());
  },
  beforeRouteUpdate(to, from, next) {
    this.toChild = 1;
    next();
  }
};
</script>

<style scoped>
.filter {
  height: 32px;
  position: relative;
  min-width: 1342px;
  margin-left: 10px;
  margin-top: 10px
}
.table {
  margin-top: 10px;
  margin-right: 10px;
  color: #c3cbd6 !important;
  min-width: 1342px;
  overflow-y: auto;
}
.select {
  display: inline-block;
  position: absolute;
  left: 0;
}
.date {
  display: inline-block;
  position: absolute;
  left: 120px;
}
.search {
  display: inline-block;
  position: absolute;
  right: 10px;
}
.page {
  margin: 10px;
  overflow: hidden;
  min-width: 1185px;
}
.detail {
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  border: 1px solid #f8f8f9;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px #ebf7ff;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-500px);
}
</style>

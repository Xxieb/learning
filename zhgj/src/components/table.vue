<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <div class="table-head">
      <colgroup>
        <col v-for="(n,index) in colGroup" :key="index" width="150" />
      </colgroup>
      <thead>
        <tr v-for="(column,colindex) in headData" :key="colindex">
          <th
            v-for="(item,index) in column"
            :key="index"
            :colspan="item.colspan"
            :rowspan="item.rowspan"
          >
            <div class="head-title">
              <span @click="noSort">{{item.title}}</span>
              <i class="asc" v-if="item.sort" @click="sortAsc(childrenData,item.key)"></i>
              <i class="desc" v-if="item.sort" @click="sortDesc(childrenData,item.key)"></i>
            </div>
          </th>
        </tr>
      </thead>
    </div>
    <div v-if="childrenData.length>0" class="table-body" :style="{'height':windowHeight+'px'}">
      <colgroup>
        <col v-for="(n,index) in colGroup" :key="index" width="150" />
      </colgroup>
      <tbody>
        <tr
          v-for="(column,colindex) in childrenData"
          :key="colindex"
          :class="{'out-border':outBoder}"
        >
          <td align="center" v-if="(headData[0][0].type==='html')">
            <router-link :to="{ path: '/detail/'+column.name, query: { q: column.id }}">
              <i class="detailImg"></i>
            </router-link>
          </td>
          <td align="center">{{colindex+1}}</td>
          <td
            v-for="(item,index) in column"
            :key="index"
            align="center"
            v-if="!((item===column.id)||(item===column.date)||(item===column.group))"
          >{{item}}</td>
        </tr>
      </tbody>
    </div>
    <div v-else>
      <div class="no-data"></div>
    </div>
  </table>
</template>

<script>
export default {
  props: ["childrenData", "columns", "outBoder", "Height"],
  data() {
    return {
      windowHeight: window.innerHeight - this.$props.Height,
      windowWidth: "",
      headRowSpan: [],
      headData: [],
      colGroup: 0,
      oldChildrenData:[]
    };
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerHeight - this.$props.Height;
    },
    noSort(){
      this.oldChildrenData.forEach((item,index)=>{
        this.$props.childrenData.splice(index,1,item)
      })
    },
    sortDesc(val, name) {
      if(this.oldChildrenData.length<=0)this.oldChildrenData = this.oldChildrenData = JSON.parse(JSON.stringify(this.$props.childrenData))
      val.sort((a, b)=>b[name] - a[name])
    },
    sortAsc(val, name) {
      if(this.oldChildrenData.length<=0)this.oldChildrenData = this.oldChildrenData = JSON.parse(JSON.stringify(this.$props.childrenData))
      val.sort((a, b)=>a[name] - b[name])
    },
    traverseHeadFor(val, i) {
      val.forEach((item, index) => {
        if (item.children) {
          this.headRowSpan[index] = this.headRowSpan[index] + 1;
          this.traverseHeadFor(item.children, index);
        }
      });
    },
    traverseHead(val) {
      val.forEach((item, index) => {
        this.headRowSpan.push(0);
        if (item.children) {
          this.headRowSpan[index] = this.headRowSpan[index] + 1;
          this.traverseHeadFor(item.children, index);
        }
      });
    },
    filterHeadDataFor(val, num) {
      val.forEach((item, index) => {
        this.headData[num + 1].push(item);
        this.headData[num + 1][index].colspan = 1;
        this.headData[num + 1][index].rowspan = 1;
        this.colGroup += 1;
      });
      this.colGroup -= 1;
    },
    filterHeadData() {
      for (let i = 0, il = Math.max(...this.headRowSpan) + 1; i < il; i++) {
        this.headData.push([]);
      }
      let num = 0;
      this.headData[num] = this.$props.columns;
      this.headData[num].forEach((val, index) => {
        val.colspan = val.children ? val.children.length : 1;
        val.rowspan = val.children
          ? 1
          : Math.max(...this.headRowSpan) - this.headRowSpan[index] + 1 - num;
        this.colGroup += 1;
        if (val.children) this.filterHeadDataFor(val.children, num);
      });
    }
  },
  created() {
    this.traverseHead(this.$props.columns);
    this.filterHeadData();
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  updated(){
    if(this.oldChildrenData.length!==this.$props.childrenData.length){
      this.oldChildrenData = []
    }else if(this.oldChildrenData.forEach((item,index)=>{
      item.alarmTime === this.$props.childrenData[index].alarmTime
    })){
      this.oldChildrenData = []
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
table {
  margin-left: 10px;
  margin-bottom: 20px;
}
thead th {
  border-right: 1px solid #eef1f6;
  border-bottom: 1px solid #eef1f6;
  color: #a1acba;
  font-size: 12px;
  font-weight: 500;
  height: 30px;
}
thead tr:nth-child(1) th {
  border-top: 1px solid #eef1f6;
}
thead tr:nth-child(1) th:nth-child(1) {
  border-left: 1px solid #eef1f6;
}
.table-body {
  overflow-y: auto;
}
.table-body td {
  border-bottom: 1px solid #eef1f6;
  color: #464c5b;
  height: 35px;
  font-weight: 500;
}
.no-data {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url("/1.png");
}
.out-border td:first-child {
  border-left: 1px solid #eef1f6;
}
.out-border td:last-child {
  border-right: 1px solid #eef1f6;
}
.head-title {
  margin: 0 5px;
  position: relative;
}
.asc {
  width: 0px;
  height: 0px;
  border: 5px solid #bbc7d4;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  right: 0;
  top: -2px;
}
.asc:hover {
  border-bottom-color: #8dcaf9;
}
.desc {
  width: 0px;
  height: 0px;
  border: 5px solid #bbc7d4;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  right: 0;
  bottom: -2px;
}
.desc:hover {
  border-top-color: #8dcaf9;
}
a {
  color: #2e2f3a;
}
tbody tr:hover {
  background-color: #eef1f6;
}
img {
  width: 12px;
  height: 14px;
  background-color: transparent;
}
.detailImg {
  display: block;
  width: 12px;
  height: 14px;
  background-image: url("../assets/1.png");
}
.detailImg:hover {
  background-image: url("../assets/2.png");
}
</style>
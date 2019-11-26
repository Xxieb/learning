<template>
  <div class="jd-recommend" id="jd-recommend-container">
    <div class="jd-recommend-title">
      <h3>为你推荐</h3>
    </div>
    <div class="recommend-hd">
      <ul class="recommend-hd-list">
        <li class="item" v-for="(title,index) in title" :key="index">
          <div :class="index===0?{'item-title': true}:{ 'item-title1': true}">
            <span>{{title['name']}}</span>
          </div>
          <div :class="index===0?{'item-desc': true}:{ 'item-desc1': true}">{{title['info']}}</div>
          <div class="item-line"></div>
        </li>
      </ul>
    </div>
    <component :is="comname"></component>
  </div>
</template>

<script>
import contentOne from "./contentOne";
import contentTwo from "./contentTwo";
import contentThree from "./contentThree";
import contentFour from "./contentFour";
import contentFive from "./contentFive";
export default {
  name: "Recommend",
  components: {
    contentOne,
    contentTwo,
    contentThree,
    contentFour,
    contentFive
  },
  data: function() {
    return {
      comname: "contentOne",
      title: [],
      url: "/recommend.json"
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.title = res.data["title"];
      });
    },
    change: function(index) {
      switch (index) {
        case 1:
          this.comname = contentOne;
          break;
        case 2:
          this.comname = contentTwo;
          break;
        case 3:
          this.comname = contentThree;
          break;
        case 4:
          this.comname = contentFour;
          break;
        case 5:
          this.comname = contentFive;
          break;
      }
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
.jd-recommend-wrap {
  width: 100%;
}

.jd-recommend {
  width: 1190px;
  margin: 0 auto;
}

.jd-recommend-title {
  width: 1190px;
  height: 65px;
  text-align: center;
}

.jd-recommend-title h3 {
  position: relative;
  width: 200px;
  height: 45px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  padding: 0 30px;
  margin: 0 auto 20px;
  overflow: hidden;
  color: #333;
}
.jd-recommend-title h3:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -10px;
  background-image: url(../../assets/94.png);
  width: 25px;
  height: 20px;
  left: 0px;
}
.jd-recommend-title h3:after {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -10px;
  background-image: url(../../assets/95.png);
  background-position: -25px 0;
  width: 25px;
  height: 20px;
  right: 0;
}
.recommend-hd {
  width: 1190px;
  height: 60px;
  background-color: white;
}
.recommend-hd-list {
  width: 1015px;
  height: 60px;
  margin: 0 auto;
  display: flex;
}
.recommend-hd-list .item {
  position: relative;
  float: left;
  width: 203px;
  height: 60px;
  text-align: center;
  cursor: pointer;
}
.recommend-hd-list .item-title {
  color: #333;
  margin-top: 7px;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  height: 27px;
}
.recommend-hd-list .item-title1 {
  color: #333;
  margin-top: 7px;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  height: 27px;
}
.recommend-hd-list .item-title span {
  background: #e1251b;
  color: #fff;
  width: 70px;
  height: 27px;
  display: inline-block;
  border-radius: 50px;
  padding: 0 5px;
}
.recommend-hd-list .item-desc {
  color: #e1251b;
  font-size: 14px;
}
.recommend-hd-list .item-desc1 {
  color: #999999;
  font-size: 14px;
}
.recommend-hd-list .item-line {
  position: absolute;
  right: 0;
  top: 0;
  height: 40px;
  margin: 10px 0;
  width: 1px;
  background: linear-gradient(180deg, white, #dfdfdf 51%, white);
}
.recommend-hd-list .item:hover .item-desc1 {
  color: #ce141c;
}
.recommend-hd-list .item:hover .item-title1 {
  color: #ce141c;
}
</style>
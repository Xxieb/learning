<template>
  <div class="jd-square" id="jd-square-container">
    <div class="jd-square-head">
      <h3 class="jd-square-title">频道广场</h3>
    </div>
    <div class="jd-square-body-wrap">
      <div class="jd-square-body-l">
        <SquareLeft :bigImg="bigImg" :squareContentL="squareContentL"></SquareLeft>
      </div>
      <div class="jd-square-body-r">
        <SquareRight :squareContentR="squareContentR"></SquareRight>
      </div>
    </div>
  </div>
</template>

<script>
import SquareLeft from "./squareL/squarL";
import SquareRight from './squareR/squareR'
export default {
  name: "Square",
  components: {
    SquareLeft,
    SquareRight
  },
  data: function() {
    return {
      bigImg: [],
      squareContentL: [],
      squareContentR: [],
      url: "/square.json"
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.bigImg = res.data["bigImg"];
        this.squareContentL = res.data["squareContentL"];
        this.squareContentR = res.data["squareContentR"];
      });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
.jd-square-wrap {
  width: 100%;
  height: 835px;
  margin-top: 20px;
}
.jd-square {
  width: 1190px;
  height: 815px;
  margin: 0 auto;
}
.jd-square-head {
  height: 65px;
  padding-bottom: 20px;
  text-align: center;
}
.jd-square-title {
  position: relative;
  width: 200px;
  height: 45px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  line-height: 45px;
  color: rgb(51, 51, 51);
  padding: 0px 30px;
  margin: 0px auto 20px;
  overflow: hidden;
}
.jd-square-title::before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -10px;
  background-image: url(../../assets/94.png);
  width: 25px;
  height: 20px;
  left: 0px;
}
.jd-square-title::after {
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
.jd-square-body-wrap {
  width: 1200px;
  height: 750px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}


.jd-square-body-wrap img:hover {
  opacity: 0.8;
}
.jd-square-body-wrap .jd-square-item1 {
  display: inline-block;
  width: 290px;
  height: 370px;
  margin: 0 10px 10px 0;
}
.jd-square-item7 {
  display: inline-block;
  margin: 0 10px 10px 0;
  width: 290px;
  height: 180px;
  background-color: white;
}
.jd-square-item {
  display: inline-block;
  margin: 0 10px 10px 0;
  width: 290px;
  height: 180px;
  background-color: white;
}
.jd-square-body-wrap .jd-square-item3 {
  display: inline-block;
  margin: 0 10px 10px 0;
  width: 290px;
  height: 180px;
  background-color: white;
}
.jd-square-body-wrap .item-title {
  width: 290px;
  height: 60px;
  padding: 0 10px 0 30px;
  display: block;
  line-height: 60px;
}
.jd-square-body-wrap .item-title-l {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  line-height: 30px;
}
.jd-square-body-wrap .item-title-r {
  font-size: 14px;
  color: #999;
  margin-left: 5px;
  line-height: 30px;
}
.jd-square-body-wrap .item-imgs {
  width: 290px;
  height: 100px;
  margin-left: 30px;
}
.jd-square-body-wrap .item-imgs a {
  display: inline-block;
  margin-right: 20px;
}
</style>
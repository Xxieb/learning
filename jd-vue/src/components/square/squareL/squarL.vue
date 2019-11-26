<template>
  <div class="jd-square-body-l">
    <div class="jd-square-item1" v-for="(src,index) in bigImg" :key="index+6">
      <a href>
        <img :src="src" />
      </a>
    </div>
    <div class="jd-square-item3" v-for="(litem,lindex) in squareContentL" :key="lindex">
      <a href class="item-title">
        <span class="item-title-l">{{litem['titleL']}}</span>
        <span class="item-title-r">{{litem['titleR']}}</span>
      </a>
      <div class="item-imgs">
        <a v-for="(src,index) in litem['img']" :key="index">
          <img :src="src" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuqareL",
  props:["bigImg","squareContentL"]
};
</script>

<style scoped>
.jd-square-body-l {
  width: 600px;
  height: 750px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.jd-square-body-wrap img:hover {
  opacity: 0.8;
}
.jd-square-body-wrap .jd-square-item1,
.jd-square-item2 {
  display: inline-block;
  width: 290px;
  height: 370px;
  margin: 0 10px 10px 0;
}
.jd-square-item5,
.jd-square-item6,
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
.jd-square-body-wrap .jd-square-item3,
.jd-square-item4 {
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
.jd-square-body-wrap .item-imgs {
  width: 290px;
  height: 100px;
  margin-left: 30px;
}
.jd-square-body-wrap .item-imgs a {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.jd-square-body-wrap .item-title-r {
  font-size: 14px;
  color: #999;
  margin-left: 5px;
  line-height: 30px;
}
</style>
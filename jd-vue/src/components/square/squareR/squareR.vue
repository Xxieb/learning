<template>
    <div class="jd-square-body-r">
        <div class="jd-square-item7" v-for="(ritem,rindex) in squareContentR" :key="rindex">
          <a href class="item-title">
            <span class="item-title-l">{{ritem['titleL']}}</span>
            <span class="item-title-r">{{ritem['titleR']}}</span>
          </a>
          <div class="item-imgs">
            <a v-for="(rsrc,rsindex) in ritem['img']" :key="rsindex">
              <img :src="rsrc" />
            </a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"SquareRight",
    props:["squareContentR"]
}
</script>

<style scoped>
.jd-square-body-r {
  width: 600px;
  height: 750px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.jd-square-body-wrap img:hover {
  opacity: 0.8;
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
  cursor: pointer;
}
</style>
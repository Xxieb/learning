<template>
  <div class="core-right">
    <div class="box-hd">
      <a href class="box_hd_lk">
        <h3 class="box-title">品牌闪购</h3>
        <i class="box-arrow"></i>
      </a>
    </div>
    <div class="box-bd">
      <div class="tab-list">
        <a href class="left-img" v-for="(img,index) in coreR['left']" :key="index">
          <img :src="img['img']" class="core-logo" />
          <h6>{{img['title']}}</h6>
          <p>
            <span>{{img['infoL']}}</span>
            <i class="vertical-line"></i>
            <span>{{img['infoR']}}</span>
          </p>
          <img :src="img['imgB']" class="core-goods" />
        </a>
        <div class="tab-others">
          <div class="other-items-list">
            <a href class="other-items" v-for="(item,index) in coreR['right']" :key="index">
              <img :src="item['img']" />
              <p>{{item['title']}}</p>
              <i class="dividing-line" v-if="index%2===0"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoreRight",
  props: ["coreR"]
};
</script>

<style scoped>
.core-right {
  width: 590px;
  height: 340px;
  background-color: white;
}

.core-right {
  height: 340px;
  width: 590px;
  background-color: white;
  padding-right: 10px;
}
.core-right .box-hd {
  width: 200px;
  height: 60px;
  padding: 16px 20px;
}
.core-right .box-hd a {
  display: flex;
  position: relative;
  height: 32px;
  align-items: center;
}
.core-right .box-title {
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 32px;
}
.core-right .box-arrow {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url(../../../assets/64.png);
  background-position: 16px 0;
  margin-left: 10px;
}
.core-right .box-bd .tab-list {
  padding: 0 20px 0 15px;
  display: flex;
}
.core-right .box-bd .tab-list .left-img {
  display: inline-block;
  width: 270px;
  height: 265px;
  position: relative;
  color: #666;
  background-color: #f8f5f7;
  margin-right: 15px;
}
.core-right .box-bd .tab-list a .core-logo {
  position: relative;
  display: block;
  width: 50px;
  height: 25px;
  margin: 35px auto 0;
}
.core-right .box-bd .tab-list a h6 {
  position: relative;
  color: #333333;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-top: 6px;
  height: 20px;
  line-height: 20px;
}
.core-right .box-bd .tab-list a p {
  text-align: center;
  margin-top: 10px;
}
.core-right .box-bd .vertical-line {
  display: inline-block;
  height: 10px;
  width: 1px;
  background-color: rgba(102, 102, 102, 0.4);
}
.core-right .box-bd .tab-list a .core-goods {
  display: block;
  width: 110px;
  height: 110px;
  margin: 20px auto 0;
  position: relative;
}
.core-right .box-bd .tab-others {
  display: inline-block;
}
.other-items-list {
  width: 270px;
  height: 312px;
  display: flex;
  flex-wrap: wrap;
  vertical-align: top;
  margin-top: -40px;
  background-color: white;
}
.core-right .box-bd .other-items {
  display: block;
  width: 135px;
  height: 100px;
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: 14px 0;
  cursor: pointer;
}
.core-right .box-bd .other-items img {
  display: block;
  width: 100px;
  height: 50px;
  margin: 0 auto;
}
.core-right .box-bd .other-items p {
  color: #666;
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  height: 16px;
  line-height: 16px;
  font-weight: 400;
}
.dividing-line {
  position: absolute;
  width: 1px;
  height: 60px;
  right: 0;
  top: 6px;
  background: linear-gradient(180deg, white, #eeeeee, #eeeeee, white);
}
.left-img:hover .core-goods {
  opacity: 0.8;
}
.box-hd .box-hd-lk:hover .box-arrow {
  background-image: url(../../../assets/64.png);
  background-position: 0 0;
}
.core-right .box-hd .box_hd_lk:hover .box-arrow {
  background-image: url(../../../assets/64.png);
  background-position: 0 0;
}
</style>
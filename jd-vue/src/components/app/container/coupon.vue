<template>
  <div class="coupon-center">
    <div class="box-hd">
      <a href class="box-hd-lk">
        <h3 class="box-title">领券中心</h3>
        <i class="box-arrow"></i>
      </a>
    </div>
    <div class="box-bd">
      <div class="item1 item" v-for="(item,index) in couponCenter" :key="index">
        <a href>
          <div class="coupon-img">
            <img :src="item['src']" alt />
          </div>
          <div class="coupon-info">
            <div class="info-price">
              <span>¥</span>
              <span class="number">{{item['price']}}</span>
            </div>
            <div class="full-reduction">{{item['reduction']}}</div>
            <div class="info-last">{{item['info']}}</div>
          </div>
          <div class="coupin-more">更多好券</div>
          <i class="arrow-arrow"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  props: ["couponCenter"]
};
</script>

<style scoped>
.coupon-center {
  width: 290px;
  height: 340px;
  margin-right: 10px;
  background-color: white;
}
.coupon-center .box-bd {
  width: 290px;
  height: 280px;
  background-image: url(../../../assets/84.png);
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 0 15px;
}
.coupon-center .box-bd .item:hover .full-reduction {
  color: #999999;
}
.coupon-center .box-bd .item:hover .arrow-arrow {
  border: solid #ce141c;
  border-width: 0 2px 2px 0;
}
.coupon-center .box-bd .arrow-arrow {
  display: block;
  border: solid #999;
  border-width: 0 2px 2px 0;
  padding: 2px;
  transform: rotate(-45deg);
  margin-bottom: 2px;
  height: 2px;
  position: absolute;
  right: 10px;
  top: 35px;
}
.item {
  cursor: pointer;
}
.full-reduction {
  color: #999999;
}
.box-bd a {
  display: flex;
  width: 260px;
  height: 82px;
  position: relative;
}
.box-bd a img {
  display: block;
  width: 100%;
  height: 100%;
}
.box-bd .coupon-img {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  padding: 8px;
  margin: 8px 0 0 7px;
  background-color: white;
  margin-right: 10px;
}
.box-bd .info-price {
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  color: #e33333;
}
.box-bd .info-price .number {
  font-size: 28px;
}
.box-bd .info-last {
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.box-bd .coupin-more {
  width: 1px;
  height: 10px;
  margin-left: 0px;
}
.box-title {
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 32px;
}
.box-bd .item1 {
  width: 260px;
  height: 82px;
  margin-bottom: 3px;
}
.box-hd {
  width: 170px;
  height: 60px;
  padding: 16px 20px;
}
.box-hd a {
  display: flex;
  position: relative;
  height: 32px;
  align-items: center;
}
.box-arrow {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url(../../../assets/64.png);
  background-position: 16px 0;
  margin-left: 10px;
}
.coupon-info {
  width: 140px;
}
</style>
<template>
  <div id="app">
    <div class="j-seckill-wrap">
      <div class="j-seckill">
        <a href class="seckill-bg">
          <SecKillFirst :data="seckillFirst"></SecKillFirst>
        </a>
        <div class="seckill-list">
          <SecKill :data="seckill"></SecKill>
        </div>
        <a href class="seckill-last">
          <SecKillLast :seckillLast="seckillLast"></SecKillLast>
        </a>
      </div>
    </div>
    <div class="core-wrap">
      <div class="core">
        <div class="core-left">
          <CoreLeft :coreL="coreL" :coreLTitle="coreLTitle" :LeaderBoard="LeaderBoard"></CoreLeft>
        </div>
        <div class="core-right">
          <CoreRight :coreR="coreR"></CoreRight>
        </div>
      </div>
    </div>
    <div class="jd-container-wrap">
      <div class="jd-container">
        <div class="coupon-center">
          <CouponCenter :couponCenter="couponCenter"></CouponCenter>
        </div>
        <div class="nice-shop">
          <NiceShop :niceShop="niceShop"></NiceShop>
        </div>
        <div class="find-com">
          <FindCom :findCom="findCom"></FindCom>
        </div>
        <div class="new-products">
          <NewProducts :newProducts="newProducts"></NewProducts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecKill from "./secKill/secKill";
import SecKillFirst from "./secKill/secKillFirst";
import SecKillLast from "./secKill/secKillLast";
import CoreLeft from "./core/coreLeft";
import CoreRight from "./core/coreRight";
import CouponCenter from "./container/coupon";
import NiceShop from "./container/shop";
import FindCom from "./container/find";
import NewProducts from "./container/products";
export default {
  name: "App",
  components: {
    SecKill,
    SecKillFirst,
    SecKillLast,
    CoreLeft,
    CoreRight,
    CouponCenter,
    NiceShop,
    FindCom,
    NewProducts
  },
  data: function() {
    return {
      seckill: [],
      seckillFirst: {},
      seckillLast: {},
      coreL: [],
      coreR: {},
      couponCenter: [],
      niceShop: [],
      findCom: [],
      newProducts: [],
      coreLTitle: [],
      LeaderBoard: [],
      url: "/app.json"
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.seckill = res.data["seckill"];
        this.seckillLast = res.data["seckillLast"];
        this.coreL = res.data["coreL"];
        this.coreR = res.data["coreR"];
        this.couponCenter = res.data["couponCenter"];
        this.niceShop = res.data["niceShop"];
        this.findCom = res.data["findCom"];
        this.newProducts = res.data["newProducts"];
        this.coreLTitle = res.data["coreLTitle"];
        this.LeaderBoard = res.data["LeaderBoard"];
        this.seckillFirst = res.data["seckillFirst"];
      });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>
<style scoped>
#app .j-seckill-wrap {
  width: 100%;
  height: 280px;
}
#app .j-seckill {
  margin: 0 auto;
  width: 1190px;
  height: 260px;
  background-color: white;
  display: flex;
}
#app .core-wrap {
  width: 100%;
  height: 360px;
}
#app .core {
  width: 1190px;
  height: 340px;
  margin: 0px auto 20px;
  display: flex;
}

#app .jd-container-wrap {
  width: 100%;
  height: 340px;
}
#app .jd-container-wrap .jd-container {
  width: 1190px;
  height: 340px;
  margin: 0 auto;
  display: flex;
}
#app .coupon-center,
.nice-shop,
.find-com {
  width: 290px;
  height: 340px;
  margin-right: 10px;
  background-color: white;
}
#app .new-products {
  width: 290px;
  height: 340px;
  background-color: white;
}
#app .jd-container .box-hd {
  width: 170px;
  height: 60px;
  padding: 16px 20px;
}
#app .jd-container .box-hd a {
  display: flex;
  position: relative;
  height: 32px;
  align-items: center;
}
#app .jd-container .box-title {
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 32px;
}
#app .jd-container .box-arrow {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url(../../assets/64.png);
  background-position: 16px 0;
  margin-left: 10px;
}

#app .jd-container .box-bd .item1 {
  width: 260px;
  height: 82px;
  margin-bottom: 3px;
}
#app .jd-container .box-bd a {
  display: flex;
  width: 260px;
  height: 82px;
  position: relative;
}
#app .jd-container .box-bd a img {
  display: block;
  width: 100%;
  height: 100%;
}
#app .jd-container .box-bd .coupon-img {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  padding: 8px;
  margin: 8px 0 0 7px;
  background-color: white;
  margin-right: 10px;
}
#app .jd-container .box-bd .info-price {
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  color: #e33333;
}
#app .jd-container .box-bd .info-price .number {
  font-size: 28px;
}
#app .jd-container .box-bd .info-last {
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#app .jd-container .box-bd .coupin-more {
  width: 1px;
  height: 10px;
  margin-left: 0px;
}

#app .jd-container .coupon-info,
.coupin-more {
  padding-top: 5px;
}
.coupon-info {
  width: 140px;
}

#app .jd-container .full-reduction {
  color: #999999;
}
#app .jd-container .item {
  cursor: pointer;
}
</style>
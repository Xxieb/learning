<template>
  <div class="nice-shop">
                <div class="box-hd">
                    <a href="" class="box-hd-lk">
                        <h3 class="box-title">逛好店</h3>
                        <i class="box-arrow"></i>
                    </a>
                </div>
                <div class="box-bd">
                    <a href="" class="shop-item1 shop-item" v-for="(item,index) in niceShop" :key="index">
                        <div class="shop-item-info">
                            <div class="item-title">{{item['title']}}</div>
                            <div class="item-tags">
                                <span class="tags-left">{{item['tagL']}}</span>
                                <span class="tags-right">{{item['tagR']}}</span>
                            </div>
                            <p>{{item['number']}}</p>
                        </div>
                        <div class="shop-item-cover">
                            <img :src="item['img']" alt="" class="shop-item-img">
                        </div>
                    </a>
                </div>
            </div>
</template>

<script>
export default {
  name: "NiceShop",
  props:["niceShop"]
};
</script>

<style scoped>
.nice-shop .box-bd {
  width: 290px;
  height: 266px;
  padding: 0 15px;
}
.nice-shop .shop-item {
  width: 260px;
  height: 128px !important;
  box-sizing: border-box;
  padding: 15px 125px 15px 15px;
  margin-bottom: 10px;
  position: relative;
}
.nice-shop .shop-item:hover .item-title {
  color: #ce141c;
}
.nice-shop .shop-item:hover .shop-item-img {
  opacity: 0.8;
}
.nice-shop .shop-item:hover {
  color: #999;
}
.nice-shop .shop-item1 {
  background-color: #e9f4f2;
}
.nice-shop .shop-item2 {
  background-color: #f6eeee;
}
.shop-item-info {
  width: 120px;
}
.shop-item-info .item-title {
  height: 36px;
  font-size: 14px;
  line-height: 1.3em;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shop-item-info .item-tags {
  width: 128px;
  height: 18px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.shop-item-info .item-tags .tags-left {
  display: inline-block;
  color: #e2231a;
  font-size: 12px;
  text-align: center;
  border-radius: 2px;
  padding: 0 2px;
  height: 18px;
  line-height: 17px;
  box-sizing: border-box;
  border: 1px solid #e2231a;
  margin-right: 5px;
}
.shop-item-info .item-tags .tags-right {
  color: #596fab;
  font-size: 12px;
  text-align: center;
  border-radius: 2px;
  padding: 0 2px;
  height: 18px;
  line-height: 17px;
  box-sizing: border-box;
  border: 1px solid #596fab;
  margin-right: 5px;
  display: inline-block;
}
.shop-item-cover {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 10px;
  top: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 5px;
  box-sizing: border-box;
  background: white;
}
.coupon-center,
.nice-shop,
.find-com {
  width: 290px;
  height: 340px;
  margin-right: 10px;
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
  background-image: url(../../../assets/64.png);
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
</style>
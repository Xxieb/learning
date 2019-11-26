<template>
  <div class="new-products">
    <div class="box-hd">
      <a href class="box-hd-lk">
        <h3 class="box-title">新品首发</h3>
        <i class="box-arrow"></i>
      </a>
    </div>
    <div class="products-bd">
      <a href class="products-bd-top">
        <div class="products-info">
          <span class="hot-new">{{newProducts['hot']}}</span>
          <p class="products-title">{{newProducts['title']}}</p>
          <span class="products-line"></span>
          <p class="products-info-end">{{newProducts['info']}}</p>
        </div>
        <img :src="newProducts['img']" alt class="products-img" />
      </a>
      <a href class="products-bd-bo" v-for="(srcs,index) in newProducts['imgList']" :key="index">
        <img :src="srcs" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProducts",
  props: ["newProducts"]
};
</script>

<style scoped>
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
.products-bd {
  width: 290px;
  height: 260px;
  padding-left: 15px;
}
.products-bd .products-bd-top {
  position: relative;
  display: block;
  width: 260px;
  height: 160px;
  margin-left: 0;
  margin-bottom: 20px;
  padding: 32px 135px 0 15px;
  background-image: url(../../../assets/93.png);
}
.products-bd a:hover .products-title {
  color: #ce141c;
}
.products-bd a:hover .products-img {
  opacity: 0.8;
}
.products-bd a:hover {
  opacity: 0.8;
}
.hot-new {
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
.products-title {
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
  color: #333;
  margin-top: 4px;
  margin-bottom: 6px;
}
.products-line {
  display: block;
  width: 14px;
  height: 2px;
  background: #333;
}
.products-info-end {
  width: 100%;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  font-size: 12px;
  margin-top: 6px;
}
.products-info {
  display: inline-block;
}
.products-img {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 5px solid #fff;
  top: 25px;
  right: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.products-bd-bo {
  display: inline-block;
  margin-right: 10px;
}
</style>
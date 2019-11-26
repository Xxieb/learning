<template>
  <header id="Header">
    <div class="wrapper">
      <div class="logo-left">
        <a href></a>
      </div>
      <div class="search-h">
        <div class="search">
          <input type="text" :placeholder="placeHolder" />
          <span class="camera"></span>
          <button class="button">
            <img :src="ImgOne" alt />
          </button>
        </div>
        <div class="shopping-h">
          <img :src="ImgTwo" alt class="icon-shop" />
          <a href class="myshop">我的购物车</a>
          <span class="icon_0">0</span>
        </div>
      </div>
      <div class="hot-search">
        <a v-for="(hotSearch,index) in hotSearch" :key="index">{{hotSearch}}</a>
      </div>
      <div class="seckill">
        <a v-for="(seckill,index) in seckill" :key="index">{{seckill}}</a>
      </div>
      <div class="logo-right">
        <a href></a>
      </div>
    </div>
  </header>
</template>

<script>
import ImgOne from "../../assets/10.png";
import ImgTwo from "../../assets/11.png";
export default {
  name: "Header",
  props: {
    msg: String
  },
  data: function() {
    return {
      url: "/header.json",
      placeHolder: "",
      hotSearch: [],
      seckill: [],
      ImgOne: ImgOne,
      ImgTwo: ImgTwo
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.placeHolder = res.data["placeHolder"];
        this.hotSearch = res.data["hotSearch"];
        this.seckill = res.data["seckill"];
      });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>


<style scoped>
#Header {
  width: 100%;
  height: 140px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
#Header .wrapper {
  height: 140px;
  position: relative;
  width: 1190px;
  margin: 0 auto;
}
#Header .logo-left a {
  display: block;
  position: absolute;
  top: 10px;
  width: 190px;
  height: 120px;
  background-image: url(../../assets/7.png);
}
#Header .search {
  position: absolute;
  left: 220px;
  bottom: 0;
  width: 486px;
  height: 32px;
  border: 2px solid #e2231a;
}
input[type="text"] {
  color: #989898;
  padding: 2px 44px 2px 17px;
  width: 425px;
  height: 26px;
  border: none;
  line-height: 26px;
  font-size: 12px;
}
input:focus {
  outline: none;
}
.camera {
  display: inline-block;
  margin: 0px 5px 0;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  background-image: url(../../assets/8.png);
}
.button {
  position: absolute;
  right: 0;
  height: 28px;
  width: 30px;
  background-color: #e1251b;
  outline: none;
  border: none;
  cursor: pointer;
}
.search-h {
  width: 1190px;
  height: 60px;
  position: relative;
}
.shopping-h {
  position: absolute;
  right: 230px;
  bottom: 0;
  width: 130px;
  height: 34px;
  border: 1px solid #ddd;
  padding: 0;
  background-color: white;
  z-index: 1;
}
.icon-shop {
  display: inline-block;
  position: absolute;
  top: 7px;
  margin-right: 5px;
  margin-left: 10px;
}
.myshop {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin-left: 40px;
  color: #f10215 !important;
}
.icon_0 {
  position: absolute;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  background-color: #e1251b;
  border-radius: 7px;
  width: 18px;
  height: 14px;
  text-align: center;
  line-height: 14px;
  top: 2px;
  left: 20px;
}
#Header .dropdown-layer {
  position: absolute;
  width: 300px;
  height: 80px;
  border: 1px solid #f10215;
  left: -171px;
  top: 32px;
  z-index: -1;
  display: none;
  background-color: white;
}
#Header .shopping-h:hover {
  border: 1px solid #f10215;
}
#Header .shopping-h:hover .dropdown-layer {
  display: block;
}
#Header .hot-search {
  position: absolute;
  left: 220px;
  top: 65px;
  width: 550px;
  height: 20px;
  line-height: 20px;
}
#Header .hot-search a {
  display: inline-block;
  margin-right: 5px;
  color: #999999;
  cursor: pointer;
}
#Header .hot-search a:hover {
  color: #e1251b;
}
#Header .seckill {
  position: absolute;
  bottom: 0;
  left: 200px;
}
#Header .seckill a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #333;
  margin-right: 20px;
  cursor: pointer;
}
#Header .seckill a:hover {
  color: #f10215;
}
#Header .logo-right a {
  display: block;
  position: absolute;
  top: 20px;
  right: 0;
  width: 190px;
  height: 120px;
  background-image: url(../../assets/12.png);
}
.hot-search :first-child,
.seckill :first-child {
  color: #f10215 !important;
}
</style>

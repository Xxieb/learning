<template>
  <div class="container-left">
    <div class="location">
      <div class="icon-map"></div>
      <a href class="selected-city">{{city}}</a>
      <div class="menu">
        <div class="city-lists">
          <CityMenu
            v-for="(item,index) in data"
            :key="index"
            :item="item"
            :index="index"
            @getItem="changeCity"
          ></CityMenu>
        </div>
        <div class="horizontal-line"></div>
        <div>
          <p>地区专享版本</p>
          <div>
            <a href>中國港澳</a>
          </div>
        </div>
        <div class="horizontal-line"></div>
        <div class="available-sites">
          <p>Available Sites</p>
          <ul class="countries">
            <li v-for="(country,index) in countries" :key="index">
              <i :class="className(index)"></i>
              <a href>{{country}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CityMenu from "../menu";
export default {
  name: "NavLeft",
  props: ["data", "countries"],
  data: function() {
    return {
      city: "湖南",
    };
  },
  components: {
    CityMenu
  },
  methods: {
    className: function(index) {
      return `national-flag${index + 1}`;
    },
    changeCity: function(city) {
      this.city = city;
    }
  }
};
</script>

<style scoped>
.container-left .location {
  border: 1px solid #e3e4e5;
  height: 31px;
  padding-right: 10px;
  z-index: 2;
}

.container-left .location:hover .menu {
  display: block;
  background-color: white;
}

.container-left .location:hover .menu .city-lists {
  position: relative;
}

.container-left .location:hover {
  background-color: white;
  border: 1px solid #ddd;
  border-bottom: none;
}

.icon-map {
  display: inline-block;
  height: 8px;
  width: 8px;
  margin-left: 10px;
  border-radius: 16px 16px 16px 0;
  border: 1px solid red;
  transform: rotate(-45deg);
  background-color: #f10215;
  box-sizing: content-box;
}

.icon-map::after {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 100%;
  position: absolute;
  left: 2px;
  top: 2px;
  background-color: white;
}

.location:hover .selected-city {
  color: #f10215;
}

.container-left .menu {
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  border: 1px solid #ddd;
  border-top: none;
  z-index: 5;
}

.container-left .menu {
  padding: 20px 10px;
}

.container-left .menu p {
  color: #999999;
}

.horizontal-line {
  width: 270px;
  height: 1px;
  margin: 10px auto;
  background-color: #999999;
  opacity: 0.3;
}

.city-lists {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}

.city-lists .items {
  width: 60px;
}

.city-lists .items a {
  display: inline-block;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #999999;
  cursor: pointer;
}

.city-lists .items a:hover {
  color: #f10215;
}

.selected a {
  background-color: #f10215;
  color: white !important;
}

.available-sites {
  width: 300px;
}

.countries {
  display: flex;
  flex-wrap: wrap;
}

.countries li {
  width: 145px;
  height: 26px;
  line-height: 26px;
}

.selected a:hover {
  background-color: #f10215 !important;
}
.selected a {
  background-color: #f10215 !important;
  color: white !important;
}

.national-flag1 {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  background-image: url(../../../assets/6.jpg);
  width: 14px;
  height: 14px;
  background-position: 0px 0px;
}

.national-flag2 {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  background-image: url(../../../assets/6.jpg);
  width: 14px;
  height: 14px;
  background-position: -21px 0px;
}

.national-flag3 {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  background-image: url(../../../assets/6.jpg);
  width: 14px;
  height: 14px;
  background-position: 0px -13px;
}

.national-flag4 {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  background-image: url(../../../assets/6.jpg);
  width: 14px;
  height: 14px;
  background-position: 14px 0px;
}

.national-flag5 {
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  background-image: url(../../../assets/6.jpg);
  width: 14px;
  height: 12px;
  background-position: -21px -17px;
}
</style>

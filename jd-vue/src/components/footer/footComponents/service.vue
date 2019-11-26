<template>
  <div class="mod-service-wrap">
    <div class="mod-service">
      <ul>
        <li v-for="(info,index) in service" :key="index">
          <i :class="itemNum(index)"></i>
          <p class="mod_service_txt">{{info}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: ["service"],
  methods: {
    itemNum: function(index) {
      return `item${index + 1}`;
    }
  }
};
</script>

<style scoped>
.mod-service-wrap {
  width: 100%;
  height: 103px;
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
}
.mod-service {
  width: 1190px;
  height: 42px;
  margin: 0 auto;
  text-align: center;
}
.mod-service ul {
  display: flex;
}
.mod-service ul li {
  display: flex;
  width: 297px;
  height: 42px;
  padding: 0 36px;
}
.mod-service .item1 {
  display: block;
  width: 36px;
  height: 42px;
  background-image: url(../../../assets/81.png);
  background-position: 0 -192px;
}
.mod-service .item2 {
  display: block;
  width: 36px;
  height: 42px;
  background-image: url(../../../assets/81.png);
  background-position: -41px -192px;
}
.mod-service .item3 {
  display: block;
  width: 36px;
  height: 42px;
  background-image: url(../../../assets/81.png);
  background-position: -82px -192px;
}
.mod-service .item4 {
  display: block;
  width: 36px;
  height: 42px;
  background-image: url(../../../assets/81.png);
  background-position: -123px -192px;
}
.mod-service p {
  line-height: 42px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
}
</style>
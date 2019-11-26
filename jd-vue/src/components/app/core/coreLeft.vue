<template>
  <div class="core-left">
    <div class="box-hd">
      <a href class="box-hd-lk">
        <h3 class="box-title">排行榜</h3>
        <i class="box-arrow"></i>
      </a>
    </div>
    <div class="box-bd">
      <div class="tab-wrap">
        <div class="tab-hd">
          <div class="tab-hd-items" v-for="(title,tindex) in coreLTitle" :key="tindex">
            <a href>{{title}}</a>
          </div>
        </div>
        <div class="tab-bd">
          <div class="tab-bd-items">
            <div class="top-list">
              <div :class="coreLClass(itindex)" v-for="(items,itindex) in coreL" :key="itindex">
                <a href>
                  <img
                    :src="items['src']"
                    alt
                    :class="itindex===0?{'left-img':true}:{'right-img':true}"
                  />
                  <div :class="itindex===0?{'top-one':true}:{'top-two':true}">
                    <span v-for="(top,tindex) in items['top']" :key="tindex">{{top}}</span>
                  </div>
                  <span class="top-item-name">{{items['title']}}</span>
                </a>
              </div>
              <div class="top-item5">
                <a v-for="(board,bindex) in LeaderBoard" :key="bindex">
                  <span>{{board}}</span>
                  <i class="right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoreLeft",
  props: ["coreL", "coreLTitle", "LeaderBoard"],
  methods: {
    coreLClass: function(index) {
      return `top-item${index + 1}`;
    }
  }
};
</script>

<style scoped>
.core-left {
  width: 590px;
  height: 340px;
  background-color: white;
  margin-right: 10px;
}
.core-left .box-hd {
  width: 200px;
  height: 60px;
  padding: 16px 20px;
}
.core-left .box-hd a {
  display: flex;
  position: relative;
  height: 32px;
  align-items: center;
}
.core-left .box-title {
  font-weight: 700;
  font-size: 24px;
  color: #333;
  line-height: 32px;
}
.core-left .box-arrow {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url(../../../assets/64.png);
  background-position: 16px 0;
  margin-left: 10px;
}
.core-left .tab-wrap {
  position: relative;
}
.core-left .box-bd {
  height: 300px;
}
.core-left .tab-hd {
  position: absolute;
  height: 60px;
  right: 7px;
  top: -60px;
  display: flex;
  align-items: center;
}
.core-left .tab-hd .tab-hd-items {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.core-left .tab-hd .tab-hd-items a {
  display: block;
  width: 70px;
  padding: 0 5px;
  margin: 0 8px;
  font-size: 14px;
  font-weight: 700;
}
.core-left .tab-hd .tab-hd-items a:hover {
  color: #e1251b;
}
.core-left .top-item1 {
  position: absolute;
  width: 270px;
  height: 180px;
  top: 0;
  left: 15px;
  margin-bottom: 15px;
  background-color: white;
}
.core-left a {
  position: relative;
  display: block;
  width: 100%;
  height: 180px;
}
.core-left .left-img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding-top: 15px;
}
.core-left .top-one {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 25px;
  text-align: center;
  z-index: 2;
  color: white;
  font-weight: 700;
  background: linear-gradient(to bottom right, #e58b8b 50%, #db4c4c 50%);
}
.core-left .top-one span:nth-child(1) {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  padding-top: 5px;
}
.core-left .top-item1 .top-item-name {
  display: block;
  width: 210px;
  height: 40px;
  margin: 8px auto 0;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
  color: #333;
}
.core-left .top-item2 {
  position: absolute;
  width: 270px;
  height: 70px;
  right: 10px;
  top: 10px;
  margin-bottom: 15px;
}
.core-left .top-item3 {
  position: absolute;
  width: 270px;
  height: 70px;
  right: 10px;
  top: 100px;
  margin-bottom: 15px;
}
.core-left .top-item4 {
  position: absolute;
  width: 270px;
  height: 70px;
  right: 10px;
  top: 190px;
  margin-bottom: 15px;
}
.core-left a {
  display: block;
  height: 70px;
  width: 100%;
  position: relative;
}
.core-left .right-img {
  display: inline-block;
  height: 70px;
  width: 70px;
  margin-left: 40px;
}
.core-left .top-two {
  position: absolute;
  width: 30px;
  height: 40px;
  left: 0;
  top: 15px;
  background: linear-gradient(to bottom right, #f0ab82 50%, #e08249 50%);
}
.core-left .top-two span:nth-child(1) {
  display: block;
  text-align: center;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  width: 100%;
  color: white;
}
.core-left .top-two span:nth-child(2) {
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  display: block;
  height: 24px;
  text-align: center;
  color: white;
}
.core-left .top-item2 .top-item-name {
  position: absolute;
  left: 120px;
  top: 15px;
  width: 150px;
  max-height: 32px;
  line-height: 16px;
  font-size: 12px;
  color: #333;
  overflow: hidden;
}
.core-left .top-item3 .top-item-name {
  position: absolute;
  left: 120px;
  top: 15px;
  width: 150px;
  max-height: 32px;
  line-height: 16px;
  font-size: 12px;
  color: #333;
  overflow: hidden;
}
.core-left .top-item4 .top-item-name {
  position: absolute;
  left: 120px;
  top: 15px;
  width: 150px;
  max-height: 32px;
  line-height: 16px;
  font-size: 12px;
  color: #333;
  overflow: hidden;
}
.core-left .top-item5 {
  position: absolute;
  height: 84px;
  width: 272px;
  top: 182px;
  left: 15px;
  display: flex;
  flex-wrap: wrap;
}
.core-left .top-item5 a {
  width: 134px;
  height: 40px;
  font-size: 15px;
  color: #333;
  background: rgba(109, 126, 146, 0.05);
  text-indent: 10px;
  margin: 0 2px 2px 0;
  line-height: 40px;
  text-align: center;
}
.core-left .top-item5 .right-arrow {
  display: inline-block;
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 2px;
  transform: rotate(-45deg);
  margin-bottom: 2px;
}
.core-left .top-item1:hover a {
  opacity: 0.8;
}
.core-left .top-item1:hover .top-item-name {
  color: #ce141c;
}
.core-left .top-item2:hover a {
  opacity: 0.8;
}
.core-left .top-item2:hover .top-item-name {
  color: #ce141c;
}
.core-left .top-item3:hover a {
  opacity: 0.8;
}
.core-left .top-item3:hover .top-item-name {
  color: #ce141c;
}
.core-left .top-item4:hover a {
  opacity: 0.8;
}
.core-left .top-item4:hover .top-item-name {
  color: #ce141c;
}
.core-left .top-item5 a:hover {
  color: #ce141c;
}
.core-left .top-item5 a:hover .right-arrow {
  border: solid #ce141c;
  border-width: 0 2px 2px 0;
}
</style>
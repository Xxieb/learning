<template>
  <a href class="seckill-last">
    <div class="seckill-last-wrap">
      <div class="right-picture">
        <img :src="seckillLast['src']" alt />
      </div>
      <div class="last-info">
        <p v-for="(info,index) in seckillLast['info']" :key="index">{{info}}</p>
      </div>
      <div class="last-info-action">
        {{seckillLast['lastinfo']}}
        <i class="right-arrow"></i>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "SecKillLast",
  props: ["seckillLast"]
};
</script>

<style scoped>
.seckill-last {
  display: block;
  width: 200px;
  height: 260px;
  background-color: white;
  padding: 10px;
}
.seckill-last img {
  display: block;
  width: 120px;
  height: 120px;
  margin: 0px auto;
}
.seckill-last .last-info p:nth-child(1) {
  color: #666;
  font-size: 14px;
  text-align: center;
}
.seckill-last .last-info p:nth-child(2) {
  color: #333;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}
.last-info-action {
  color: #e1251b;
  border-radius: 14px;
  width: 82px;
  height: 24px;
  text-align: center;
  border: 1px solid #e1251b;
  margin: 4px auto 0;
  line-height: 22px;
  font-weight: 700;
  font-size: 12px;
}
.last-info-action .right-arrow {
  display: inline-block;
  border: solid #e1251b;
  border-width: 0 2px 2px 0;
  padding: 2px;
  transform: rotate(-45deg);
  margin-bottom: 2px;
}
.last-info-action:hover {
  background-color: #e1251b;
  color: white;
}
.seckill-last-wrap:hover .right-picture {
  opacity: 0.8;
}
.right-picture {
  background-color: white;
  padding-top: 40px;
}
.last-info-action:hover .right-arrow {
  border: solid white;
  border-width: 0 2px 2px 0;
}
.seckill-last-wrap {
  background: linear-gradient(to bottom, white, #f0f2f7);
}
</style>
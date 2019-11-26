<template>
  <a href class="seckill-bg">
    <div class="seckill-title">{{data['title']}}</div>
    <div class="seckill-time">
      <strong>{{data['time']}}</strong>
      {{data['countdown']}}
    </div>
    <div class="count-down">
      <span class="down-time">00</span>
      <b>:</b>
      <span class="down-time">00</span>
      <b>:</b>
      <span class="down-time">00</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "SecKillFirst",
  props: ["data"]
};
</script>

<style scoped>
#app .seckill-bg {
  display: block;
  width: 190px;
  height: 260px;
  background-image: url(../../../assets/54.png);
}
#app .seckill-title {
  width: 100%;
  height: 75px;
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 30px;
}
#app .seckill-time {
  font-size: 14px;
  text-align: center;
  padding-top: 90px;
  color: white;
}
#app .seckill-time strong {
  font-size: 18px;
}
#app .count-down {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
#app .count-down .down-time {
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 20px;
}
#app .count-down b {
  font-size: 18px;
  font-weight: bold;
  color: white;
}
</style>
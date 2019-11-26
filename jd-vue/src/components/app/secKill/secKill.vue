<template>
  <div class="seckill-list">
    <a href class="seckill-list1" v-for="(content,index) in data" :key="index">
      <div class="list-picture">
        <img :src="content['src']" alt />
      </div>
      <h5 class="seckill-title_name">{{content["title"]}}</h5>
      <div class="seckill-price">
        <span class="miaosha-price">
          <b>¥</b>
          <span>{{content['seckillPrice']}}</span>
        </span>
        <span class="original-price">
          <b>¥</b>
          <span>{{content['originalPrice']}}</span>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SecKill",
  props: ["data"]
};
</script>

<style scoped>
.seckill-list {
  width: 800px;
  height: 260px;
  display: flex;
}
.seckill-list1 {
  display: block;
  width: 200px;
  height: 260px;
}
.seckill-list1 h5 {
  margin-top: 25px;
}
.list-picture {
  width: 200px;
  height: 170px;
  padding-top: 30px;
}
.list-picture img {
  display: block;
  width: 140px;
  height: 140px;
  margin: 0px auto 0;
}
.seckill-title_name {
  font-size: 12px;
  font-weight: 400px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 160px;
  margin: 13px auto 0;
  transition: color 0.2s ease;
  color: #999999;
}
a:hover .seckill-title_name {
  color: #e1251b;
}
.seckill-price {
  width: 160px;
  height: 24px;
  border: 1px solid #e1251b;
  position: relative;
  line-height: 24px;
  overflow: hidden;
  margin: 5px auto;
}
.miaosha-price {
  display: inline-block;
  width: 92px;
  height: 100%;
  text-align: center;
  color: #fff;
  line-height: 22px;
  background-color: #e1251b;
}
.miaosha-price span {
  font-size: 16px;
  font-weight: 700px;
}
.originalPrice {
  color: #999999;
}
.original-price {
  color: #999999;
}
.miaosha-price::before {
  content: "";
  width: 0;
  height: 0;
  border-color: transparent white transparent transparent;
  border-style: solid;
  border-width: 28px 8px 0 0;
  position: absolute;
  top: 0;
  left: 84px;
}
.original-price {
  text-decoration: line-through;
}
.seckill-list1:hover .list-picture {
  opacity: 0.8;
}
.seckill-list1:hover .original-price {
  color: #999999;
}
</style>
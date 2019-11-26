<template>
  <div class="recommend-bd">
    <ul class="recommend-bd-list">
      <li class="bd-list-items" v-for="(item,index) in content" :key="index">
        <a href>
          <div>
            <img :src="item['img']" class="list-items-img" />
          </div>
          <div class="list-items-title">
            <p>{{item['title']}}</p>
          </div>
          <div class="list-items-price">
            <span>¥</span>
            <span>{{item['price']}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecContent",
  data: function() {
    return {
      content: [],
      url: "/recommend.json"
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.content = res.data["content"];
      });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
.recommend-bd {
  width: 1200px;
  margin: 0 auto;
}
.recommend-bd-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.recommend-bd-list .bd-list-items {
  position: relative;
  width: 230px;
  height: 322px;
  margin: 0 10px 10px 0;
  background-color: white;
}
.recommend-bd-list .bd-list-items a {
  width: 100%;
  height: 100%;
  display: block;
}
.recommend-bd-list .bd-list-items .list-items-img {
  display: block;
  margin: 30px auto 30px;
}
.recommend-bd-list .bd-list-items .list-items-title {
  height: 48px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: #666;
  transition: color 0.2s ease;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 20px;
}
.recommend-bd-list .bd-list-items .list-items-price {
  padding-left: 20px;
  margin-top: 10px;
}
.recommend-bd-list .list-items-price span:nth-child(1) {
  line-height: 18px;
  color: #e1251b;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 700;
}
.recommend-bd-list .list-items-price span:nth-child(2) {
  font-size: 20px;
  font-weight: 700;
  line-height: 18px;
  color: #e1251b;
}
.recommend-bd-list .list-items-find-wrap {
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 66px;
  text-align: center;
  display: none;
  opacity: 0;
  background-color: #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0,
    white 35%,
    white
  );
}
.recommend-bd-list .list-items-find {
  height: 28px;
  width: 120px;
  display: inline-block;
  font-size: 12px;
  border: 1px solid #353131;
  border-radius: 15px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  margin-top: 18px;
  background-color: #333;
  color: #fff !important;
  background-color: #000000;
}
.items-find-icon {
  display: inline-block;
  margin-top: -4px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  background-size: 16px 16px;
  margin-right: 4px;
  background-image: url(../../assets/136.png);
}
.recommend-bd-list .bd-list-items a:hover .list-items-img {
  opacity: 0.8;
}
</style>
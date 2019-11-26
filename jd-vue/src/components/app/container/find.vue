<template>
  <div class="find-com">
    <div class="box-hd">
      <a href class="box-hd-lk">
        <h3 class="box-title">发现</h3>
        <i class="box-arrow"></i>
      </a>
    </div>
    <div class="find-bd">
      <a href>
        <img :src="findCom['imggoods']" alt class="find-img" />
        <p class="find-name">{{findCom['title']}}</p>
        <div class="find-author">
          <img :src="findCom['imgAuthor']" alt class="author-img" />
          <span class="author-name">{{findCom['author']}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindCom",
  props: ["findCom"]
};
</script>

<style scoped>
.find-com .find-bd {
  width: 290px;
  height: 250px;
  padding: 0 15px;
}
.find-com .find-bd a:hover .find-name {
  color: #ce141c;
}
.find-com .find-bd .find-img {
  display: block;
}
.find-com .find-bd .find-name {
  font-size: 14px;
  line-height: 20px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
  margin-top: 18px;
  text-align: center;
}
.find-author {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.author-name {
  position: relative;
  display: inline-block;
  font-size: 14px;
  max-width: 116px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.author-img {
  border-radius: 50%;
  margin-right: 10px;
}
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
</style>
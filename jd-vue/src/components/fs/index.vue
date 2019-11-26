<template>
  <div class="fs" id="fs">
    <div class="fs-wraper">
      <aside>
        <ul>
          <li class="aside-items aside-items_1" v-for="(item,index) in dataList" :key="index">
            <a v-for="(name,nindex) in item['name']" :key="nindex">
              {{name}}
              <span class="oblique-line" v-if="!(nindex===item['name'].length-1)">/</span>
            </a>
            <div class="menu menu_1">
              <div class="submenu-left">
                <div class="subtop">
                  <a v-for="(title,tindex) in item['title']" :key="tindex">
                    {{title}}
                    <i class="arrow-right"></i>
                  </a>
                </div>
                <div class="subbottom">
                  <dl v-for="(content,cindex) in item['content']" :key="cindex">
                    <dt>
                      <a>
                        {{content["generalName"]}}
                        <i class="arrow-right_1"></i>
                      </a>
                    </dt>
                    <dd>
                      <a v-for="(goods,gindex) in content['goods']" :key="gindex">{{goods}}</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="submenu-right">
                <div class="picture-top">
                  <a href v-for="(src,tsindex) in item['pictureT']" :key="tsindex">
                    <img :src="src" alt />
                  </a>
                </div>
                <div class="picture-bottom">
                  <a href v-for="(src,bsindex) in item['pictureB']" :key="bsindex">
                    <img :src="src" alt />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </aside>
      <section>
        <div class="sec-left">
          <a>
            <img :src="secLeft"/>
          </a>
        </div>
        <div class="sec-right">
          <a href v-for="(secSrc,index) in secRight" :key="index">
            <img :src="secSrc"/>
          </a>
        </div>
      </section>
      <div class="user-right">
        <div class="user">
          <div class="user-top">
            <div class="login-icon">
              <a href>
                <img :src="ImgOne" alt />
              </a>
            </div>
            <div>
              <a href>Hi~欢迎逛京东！</a>
              <p>
                <a href>登录</a> |
                <a href>注册</a>
              </p>
            </div>
          </div>
          <div class="user-bottom">
            <a href>新人福利</a>
            <a href>PLUS会员</a>
          </div>
        </div>
        <div class="jd-news">
          <div class="news-header">
            <h3>京东快报</h3>
            <a href>
              更多
              <i class="icon-r"></i>
            </a>
          </div>
          <div class="news-list">
            <ul>
              <li v-for="(news,newindex) in news" :key="newindex">
                <a>
                  <span class="hot-info">{{news['title']}}</span>
                  {{news['content']}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="other-info">
          <div class="icon-list">
            <ul>
              <li class="items" v-for="(info,foindex) in info" :key="foindex">
                <a href>
                  <i :class="iconNum(foindex)"></i>
                  <span class="items-info">{{info}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="j-logo">
        <a href class="j-left"></a>
        <a href class="j-right"></a>
      </div>
    </div>
  </div>
</template>

<script>
import ImgOne from '../../assets/29.jpg'
export default {
  name: "Fs",
  data: function() {
    return {
      dataList: [],
      secLeft: "",
      secRight: [],
      news: [],
      info: [],
      url: "/fs.json",
      ImgOne:ImgOne
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.dataList = res.data["dataList"];
        this.secLeft = res.data["secLeft"];
        this.secRight = res.data["secRight"];
        this.news = res.data["news"];
        this.info = res.data["info"];
      });
    },
    iconNum: function(index) {
      return `icon_${index + 1}`;
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>
.fs {
  height: 480px;
  width: 100%;
  margin-bottom: 30px;
}
.space-line {
  width: 100%;
  margin-top: 10px;
}
.fs .fs-wraper {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.j-left {
  display: inline-block;
  width: 250px;
  height: 470px;
  background-image: url(../../assets/13.png);
}
.j-right {
  display: inline-block;
  width: 0px;
  height: 470px;
  background-image: url(../../assets/14.jpg);
  transition: width 1s ease;
}
.j-logo {
  position: absolute;
  width: 1030px;
  height: 470px;
  left: -250px;
  top: 0;
  z-index: 0;
  margin-top: 10px;
}
.j-logo:hover {
  z-index: 4;
}
.j-logo:hover .j-right {
  width: 780px;
}
aside {
  padding: 10px 0 0 0px;
  position: relative;
  z-index: 3;
  background-color: white;
  height: 470px;
  width: 190px;
  margin-top: 10px;
}
.fs .aside-items {
  padding-left: 10px;
  height: 25px;
  line-height: 25px;
}
.fs .aside-items:hover .menu_1 {
  visibility: visible;
}
.fs .aside-items:hover .menu_2 {
  visibility: visible;
}
.fs .aside-items:hover .menu_3 {
  visibility: visible;
}
.fs .aside-items:hover .menu_4 {
  visibility: visible;
}
.fs .aside-items:hover .menu_5 {
  visibility: visible;
}
.fs .aside-items:hover .menu_6 {
  visibility: visible;
}
.fs .aside-items:hover .menu_7 {
  visibility: visible;
}
.fs .aside-items:hover .menu_8 {
  visibility: visible;
}
.fs .aside-items:hover .menu_9 {
  visibility: visible;
}
.fs .aside-items:hover .menu_10 {
  visibility: visible;
}
.fs .aside-items:hover .menu_11 {
  visibility: visible;
}
.fs .aside-items:hover .menu_12 {
  visibility: visible;
}
.fs .aside-items:hover .menu_13 {
  visibility: visible;
}
.fs .aside-items:hover .menu_14 {
  visibility: visible;
}
.fs .aside-items:hover .menu_15 {
  visibility: visible;
}
.fs .aside-items:hover .menu_16 {
  visibility: visible;
}
.fs .aside-items:hover .menu_17 {
  visibility: visible;
}
.fs .aside-items:hover .menu_18 {
  visibility: visible;
}
.fs .aside-items:hover {
  background-color: #ddd;
}
.fs .aside-items > a {
  font-size: 14px;
  /* color: #333; */
  cursor: pointer;
}
.fs .aside-items > a:hover {
  color: #f10215;
}
.fs .oblique-line {
  padding: 0 3px;
}
.fs .menu {
  position: absolute;
  height: 480px;
  width: 920px;
  border: 1px solid #ddd;
  background-color: white;
  left: 180px;
  top: 0;
  padding: 20px 0 0 10px;
  display: flex;
  visibility: hidden;
  z-index: 8;
}
.fs .subtop a {
  height: 24px;
  margin-right: 10px;
  padding: 0px 10px 2px 10px;
  background-color: black;
  color: white;
  display: inline-block;
}
.fs .subtop a:hover {
  background-color: #ce141c;
}
.fs .subtop {
  padding-left: 20px;
}
.fs .submenu-left {
  width: 730px;
}
.fs .submenu-right {
  width: 198px;
}
.fs .arrow-right {
  display: inline-block;
  border: solid white;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(-45deg);
  margin-left: 5px;
}
.fs .arrow-right_1 {
  display: inline-block;
  border: solid black;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(-45deg);
  margin-left: 5px;
}
.fs .subbottom dt a {
  margin-right: 10px;
  padding: 2px 10px 0px 10px;
  display: inline-block;
  color: #333;
}
.fs .subbottom dt {
  width: 90px;
  text-align: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: absolute;
  top: -2px;
  left: 0;
}
.fs .subbottom dt a:hover {
  color: #f10215;
}
.fs .subbottom dt a:hover .arrow-right_1 {
  border: solid #f10215;
  border-width: 0 2px 2px 0;
}
.fs .subbottom {
  padding: 10px 0 0 10px;
}
.fs .subbottom dl {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
  position: relative;
}
.fs .subbottom dd {
  overflow: hidden;
  margin-inline-start: 80px;
  display: block;
}
.fs .subbottom dd a {
  display: inline-block;
  margin-right: 10px;
  white-space: nowrap;
  color: #999999;
  cursor: pointer;
}
.fs .subbottom dt a {
  cursor: pointer;
}
.fs .subbottom dd a:hover {
  color: #f10215;
}
.fs .picture-top {
  width: 168px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.fs .picture-top a {
  display: inline-block;
  width: 83px;
  height: 35px;
  margin: 0 0 1px 1px;
  background-color: #e7e7e7;
}
.fs .picture-bottom {
  margin: 10px auto 0;
  width: 168px;
}
.fs .picture-bottom a {
  display: block;
  margin-bottom: 1px;
  height: 134px;
  background-color: #e7e7e7;
}
section {
  position: relative;
  width: 800px;
  height: 480px;
  z-index: 1;
  padding-left: 10px;
  padding-top: 10px;
  display: flex;
  background-color: #f4f4f4;
}
section .sec-right {
  margin-left: 10px;
}
section .sec-right a {
  display: block;
  margin-bottom: 10px;
}
section .sec-right a:hover {
  opacity: 0.7;
}
section .sec-right a img {
  display: block;
  width: 190px;
  height: 150px;
}
.fs .user-right {
  width: 200px;
  height: 480px;
  margin-left: 10px;
}
.fs .user {
  height: 102px;
  margin-top: 10px;
  background-color: #fff;
  position: relative;
}
.fs .user .user-top {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
.fs .user .user-top p a {
  color: #333;
}
.fs .user .user-top p a:hover {
  color: #f10215;
}
.user .login-icon {
  margin-right: 10px;
}
.user .login-icon img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.fs .user .user-bottom {
  text-align: center;
  padding-top: 10px;
}
.fs .user .user-bottom a:nth-child(1) {
  display: inline-block;
  width: 70px;
  height: 25px;
  line-height: 25px;
  color: white;
  background-color: #e1251b;
  border-radius: 25px;
}
.fs .user .user-bottom a:nth-child(2) {
  display: inline-block;
  width: 70px;
  height: 25px;
  line-height: 25px;
  color: #c3b87e;
  background-color: #363634;
  border-radius: 25px;
}
.fs .user .user-bottom a:hover {
  background-color: #ce141c;
}
.fs .user .user-bottom a:nth-child(2):hover {
  color: white;
}
.fs .user::after {
  position: absolute;
  height: 1px;
  left: 15px;
  right: 15px;
  background: linear-gradient(270deg, white, #eeeeee, #eeeeee, white);
  content: " ";
  bottom: 0;
}
.fs .jd-news {
  height: 130px;
  background-color: #fff;
  position: relative;
}
.fs .jd-news .news-header {
  height: 20px;
  line-height: 20px;
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
}
.fs .jd-news .news-header a {
  margin-right: 20px;
}
.fs .jd-news .news-header a:hover .icon-r {
  border: solid #f10215;
  border-width: 0 2px 2px 0;
}
.fs .jd-news .news-header .icon-r {
  display: inline-block;
  height: 2px;
  width: 2px;
  border: solid #999999;
  border-width: 0 2px 2px 0;
  padding: 2px;
  transform: rotate(-45deg);
  margin-left: 8px;
  margin-bottom: 2px;
}
.fs .jd-news .news-list {
  padding: 10px 10px 0px 20px;
}
.fs .jd-news .news-list li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  cursor: pointer;
  color: #999999;
}
.fs .hot-info {
  display: inline-block;
  font-size: 12px;
  height: 16px;
  width: 41px;
  line-height: 16px;
  text-align: center;
  color: #e1251b;
  background-color: rgba(225, 37, 27, 0.08);
  margin-right: 6px;
}
.fs .jd-news::after {
  position: absolute;
  height: 1px;
  left: 15px;
  right: 15px;
  background: linear-gradient(90deg, white, #eeeeee, #eeeeee, white);
  content: " ";
  top: 130px;
  z-index: 3;
}
.fs .other-info {
  height: 238px;
  background-color: white;
}
.fs .icon-list ul {
  display: flex;
  width: 200px;
  height: 238px;
  padding: 10px 0px 0 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.fs .icon-list li a {
  display: block;
}
.fs .icon-list li a img {
  height: 28px;
  width: 28px;
  margin: 0 auto;
}
.fs .icon-list ul li {
  position: relative;
  text-align: center;
  width: 63px;
  height: 53px;
  cursor: pointer;
}
.fs .icon-list li .icon_1 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/30.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_2 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/31.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_3 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/32.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_4 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/33.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_5 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/34.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_6 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/35.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_7 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/36.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_8 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/37.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_9 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/38.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_10 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/39.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_11 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/40.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list li .icon_12 {
  display: block;
  height: 28px;
  width: 28px;
  background-image: url(../../assets/41.png);
  background-size: 28px 28px;
  margin: 0 auto;
}
.fs .icon-list ul li:hover .icon_1 {
  background-image: url(../../assets/42.png);
}
.fs .icon-list ul li:hover .icon_2 {
  background-image: url(../../assets/43.png);
}
.fs .icon-list ul li:hover .icon_3 {
  background-image: url(../../assets/44.png);
}
.fs .icon-list ul li:hover .icon_4 {
  background-image: url(../../assets/45.png);
}
.fs .icon-list ul li:hover .icon_5 {
  background-image: url(../../assets/46.png);
}
.fs .icon-list ul li:hover .icon_6 {
  background-image: url(../../assets/47.png);
}
.fs .icon-list ul li:hover .icon_7 {
  background-image: url(../../assets/48.png);
}
.fs .icon-list ul li:hover .icon_8 {
  background-image: url(../../assets/49.png);
}
.fs .icon-list ul li:hover .icon_9 {
  background-image: url(../../assets/50.png);
}
.fs .icon-list ul li:hover .icon_10 {
  background-image: url(../../assets/51.png);
}
.fs .icon-list ul li:hover .icon_11 {
  background-image: url(../../assets/52.png);
}
.fs .icon-list ul li:hover .icon_12 {
  background-image: url(../../assets/53.png);
}
.fs .items span {
  display: block;
  height: 27px;
  line-height: 25px;
  border-bottom: 2px solid #fff;
  color: #333;
  text-align: center;
}
.fs .icon-list ul li:hover .items-info {
  color: #f10215;
}
.sec-left img{
    display: inline-block;
    width: 590px;
    height: 470px;
}
</style>
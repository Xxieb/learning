<template>
  <ul class="container-wrap">
    <li>
      <div class="space-menu">
        <a href class="login">你好，请登录</a>
        <a href class="red">免费注册</a>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="space-menu">
        <a href>我的订单</a>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="menu">
        <span class="site-navigation" style="width:80px" href>
          {{menuOne}}
          <i class="arrow"></i>
        </span>

        <div class="submenu">
          <div class="myjdlist" v-for="(content,pindex) in menu['two']" :key="pindex">
            <RightMenu
              v-for="(item,index) in content"
              :key="index"
              :item="item"
              @getItem="changeMenuOne"
            ></RightMenu>
          </div>
        </div>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="spce-manu">
        <a href>京东会员</a>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="menu">
        <span href class="site-navigation" style="width:80px">
          {{menuTwo}}
          <i class="arrow"></i>
        </span>
        <div class="submenu">
          <div class="cglist" v-for="(content,pindex) in menu['three']" :key="pindex">
            <RightMenu
              v-for="(item,index) in content"
              :key="index"
              :item="item"
              @getItem="changeMenuTwo"
            ></RightMenu>
          </div>
        </div>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="menu">
        <span class="site-navigation" style="width:80px">
          {{menuThree}}
          <i class="arrow"></i>
        </span>
        <div class="submenu_2">
          <div v-for="(content,pindex) in menu['four']" :key="pindex">
            <p>
              <b>{{content["title"]}}</b>
            </p>
            <div class="fwlist">
              <RightMenu
                v-for="(item,index) in content['info']"
                :key="index"
                :item="item"
                @getItem="changeMenuThree"
              ></RightMenu>
            </div>
          </div>
        </div>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="menu">
        <span class="site-navigation" style="width:100px">
          {{menuFour}}
          <i class="arrow"></i>
        </span>
        <div class="submenu_3">
          <div class="dhlist">
            <div class="dhlist-items" v-for="(content,pindex) in menu['one']" :key="pindex">
              <div class="dhlist_1">
                <p>
                  <b>{{content['name']}}</b>
                </p>
                <div :class="dhlistClass(pindex)">
                  <RightMenu
                    v-for="(item,index) in content['content']"
                    :key="index"
                    :item="item"
                    @getItem="changeMenuFour"
                  ></RightMenu>
                </div>
              </div>
              <div :class="isVertical(pindex)"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <div class="partition-line"></div>
    <li>
      <div class="space-menu last-menu">
        <p>手机京东</p>
        <div class="menu-last">
          <div class="menu-last-list">
            <div class="item">
              <div>
                <img :src="ImgOne" />
              </div>
              <div class="item-wrap">
                <h5 class="mobile_pop_tit">
                  <a href>手机京东</a>
                </h5>
                <p class="mobile_pop_value">新人专享大礼包</p>
                <div class="phone-list">
                  <a href class="item1"></a>
                  <a href class="item2"></a>
                  <a href class="item3"></a>
                </div>
              </div>
            </div>
            <div class="item">
              <div>
                <img :src="ImgTwo" />
              </div>
              <div class="item-wrap">
                <h5 class="mobile_pop_tit">关注京东微信</h5>
                <p class="mobile_pop_value">
                  微信扫一扫关注
                  <br />京东服务号订阅
                  <br />更多促销优惠福
                  <br />利
                </p>
              </div>
            </div>
            <div class="item">
              <div>
                <img :src="ImgThree" />
              </div>
              <div class="item-wrap">
                <h5 class="mobile_pop_tit">
                  <a href>京东金融客户端</a>
                </h5>
                <p class="mobile_pop_value">新人专享大礼包</p>
                <div class="phone-list">
                  <a href class="item1"></a>
                  <a href class="item2"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import RightMenu from "../menu";
import ImgOne from "../../../assets/2.png";
import ImgTwo from "../../../assets/3.jpg";
import ImgThree from "../../../assets/4.jpg";
export default {
  name: "right",
  props: ["menu"],
  data: function() {
    return {
      menuOne: "我的京东",
      menuTwo: "企业采购",
      menuThree: "客户服务",
      menuFour: "网站导航",
      ImgOne: ImgOne,
      ImgTwo: ImgTwo,
      ImgThree: ImgThree
    };
  },
  components: {
    RightMenu
  },
  methods: {
    isVertical: function(index) {
      if (index === 3) {
        return {
          "vertical-line": false
        };
      } else {
        return {
          "vertical-line": true
        };
      }
    },
    dhlistClass: function(index) {
      if (index === 0) {
        return {
          "dhlist_1-list": true
        };
      } else {
        return {
          "dhlist_2-list": true
        };
      }
    },
    changeMenuTwo: function(val) {
      this.menuTwo = val;
    },
    changeMenuThree: function(val) {
      this.menuThree = val;
    },
    changeMenuFour: function(val) {
      this.menuFour = val;
    },
    changeMenuOne: function(val) {
      this.menuOne = val;
    }
  }
};
</script>

<style scoped>
#nav .container-right .menu {
  border: 1px solid #e3e4e5;
  height: 31px;
  z-index: 4;
  position: relative;
  padding-right: 5px;
}
#nav .container-right .menu a {
  margin-left: 5px;
  color: #999999;
  cursor: pointer;
}
#nav .container-right .menu a:hover {
  color: #f10215;
}
#nav .container-right .space-menu {
  border: 1px solid #e3e4e5;
  height: 31px;
  z-index: 2;
  position: relative;
}
#nav .container-right .last-menu {
  margin-right: 5px;
  position: relative;
}
#nav .container-right .menu:hover {
  border: 1px solid #ddd;
  border-bottom: none;
  background-color: white;
}
#nav .container-right .menu:hover .submenu {
  display: block;
}
#nav .container-right .menu:hover .submenu_2 {
  display: block;
}
#nav .container-right .menu:hover .submenu_3 {
  display: block;
}
#nav .container-right .submenu {
  display: none;
  position: absolute;
  z-index: 5 !important;
  left: -1px;
  top: 30px;
  border: 1px solid #ddd;
  border-top: none;
  background-color: white;
}
#nav .container-right .submenu_2 {
  display: none;
  position: absolute;
  left: -76px;
  top: 30px;
  border: 1px solid #ddd;
  border-top: none;
  z-index: 5;
  background-color: white;
}
#nav .container-right .submenu_3 {
  display: none;
  position: absolute;
  left: -1111px;
  top: 30px;
  border: 1px solid #ddd;
  border-top: none;
  z-index: 5;
  background-color: white;
}
#nav .container-right .myjdlist {
  padding: 10px 0 10px 15px;
  width: 215px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(99, 99, 99, 0.1);
}
#nav .container-right .myjdlist .items {
  width: 100px;
}
#nav .container-right .cglist {
  width: 175px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px 10px 15px;
}
#nav .container-right .cglist .items {
  width: 70px;
}
#nav .container-right .fwlist {
  width: 165px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 10px 15px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.1);
}
#nav .container-right .fwlist .items {
  width: 70px;
}
#nav .container-right .dhlist {
  width: 1220px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px;
}
#nav .container-right .vertical-line {
  height: 174px;
  width: 1px;
  background-color: #ddd;
  margin: 10px 10px 0;
  opacity: 0.5;
}
#nav .container-right .dhlist .dhlist_1-list {
  display: flex;
  flex-wrap: wrap;
  width: 340px;
}
#nav .container-right .dhlist .dhlist-items {
  display: flex;
  flex-wrap: nowrap;
}

#nav .container-right .dhlist .dhlist_1-list .items {
  width: 80px;
}
#nav .container-right .dhlist .dhlist_2-list {
  display: flex;
  flex-wrap: wrap;
  width: 260px;
}
#nav .container-right .dhlist .dhlist_2-list .items {
  width: 80px;
}
#nav .container-right .dhlist .dhlist_3-list {
  display: flex;
  flex-wrap: wrap;
  width: 260px;
}
#nav .container-right .dhlist .dhlist_3-list .items {
  width: 80px;
}
#nav .container-right .dhlist .dhlist_4-list {
  display: flex;
  flex-wrap: wrap;
  width: 260px;
}
#nav .container-right .dhlist .dhlist_4-list .items {
  width: 80px;
}
#nav .container-right .jdcode {
  position: absolute;
  top: 35px;
  height: 56px;
  width: 56px;
}
#nav .container-right .menu-last {
  display: none;
  position: absolute;
  top: 30px;
  left: -150px;
  width: 220px;
  border: 1px solid #ddd;
  border-bottom: 2px solid black;
  background-color: white;
}
#nav .container-right .menu-last img {
  width: 76px;
  height: 76px;
}
#nav .container-right .menu-last-list .item {
  display: flex;
  flex-wrap: nowrap;
  padding: 10px 0px 10px 10px;
  border-bottom: 1px solid #ddd;
}
#nav .container-right .phone-list .item1 {
  display: inline-block;
  background-image: url(../../../assets/5.jpg);
  width: 25px;
  height: 25px;
  background-position: 0px 0px;
}
#nav .container-right .phone-list .item2 {
  display: inline-block;
  background-image: url(../../../assets/5.jpg);
  width: 25px;
  height: 25px;
  background-position: 0px 25px;
}
#nav .container-right .phone-list .item3 {
  display: inline-block;
  background-image: url(../../../assets/5.jpg);
  width: 25px;
  height: 25px;
  background-position: 0px 50px;
}
#nav .container-right .item-wrap {
  margin: 0 5px;
}
#nav .container-right .mobile_pop_tit {
  font-size: 12px;
  line-height: 17px;
}

#nav .container-right .mobile_pop_value {
  margin: 3px 0;
  line-height: 14px;
  color: #f10214;
}
.mobile_pop_tit,
.mobile_pop_tit a {
  color: #666 !important;
}
#nav .container-right .last-menu:hover .menu-last {
  display: block;
}
.site-navigation {
  color: #999999;
  display: inline-block;
  margin-left: 5px;
  text-align: center;
}
.submenu_2 p{
  text-indent: 10px;
}

.selected:hover {
  background-color: #f10215 !important;
}
.dhlist .addContent div a {
  color: #999999;
}
.dhlist p {
  text-indent: 5px;
}
#nav .arrow {
  border: solid #999999;
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin: 0px 5px 2px 5px;
  transform: rotate(45deg);
  padding: 2px;
  display: inline-block;
}
#nav .container-wrap {
  display: flex;
}
#nav .red {
  color: #f10215;
}
#nav .partition-line {
  width: 1px;
  height: 12px;
  background-color: #ccc;
  margin: 10px 10px;
}
#nav .container-right .dhlist .dhlist-items {
  display: flex;
  flex-wrap: nowrap;
}
.login {
  margin-right: 10px;
}
.dhlist_1 :first-child {
  text-indent: 5px;
}
.last-menu :first-child {
  color: #999999
}
</style>
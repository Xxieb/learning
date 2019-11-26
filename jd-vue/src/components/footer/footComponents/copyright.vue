<template>
  <div class="mod-copyright-wrap">
    <div class="mod-copyright">
      <p class="mod-copyright-link">
        <a v-for="(info,index) in copyRight" :key="index">
          {{info}}
          <span v-if="!(index === copyRight.length - 1)">|</span>
        </a>
      </p>
      <div class="mod_copyright_info">
        <div class="mod_copyright_cert">
          <p>
            <a href>京公网安备 11000002000088号</a>
            <span class="vertical-line">|</span>
            <span>京ICP证070359号</span>
            <a href>互联网药品信息服务资格证编号(京)-经营性-2014-0008</a>
            <span class="vertical-line">|</span>
            <span>新出发京零字第大120007号</span>
          </p>
          <p>
            <span>互联网出版许可证编号新出网证(京)字150号</span>
            <span class="vertical-line">|</span>
            <a href>出版物经营许可证</a>
            <span class="vertical-line">|</span>
            <a href>网络文化经营许可证京网文[2014]2148-348号</a>
            <span class="vertical-line">|</span>
            <span>违法和不良信息举报电话：4006561155</span>
          </p>
          <p>
            <span>Copyright © 2004 - 2019 京东JD.com 版权所有</span>
            <span class="vertical-line">|</span>
            <span>消费者维权热线：4006067733</span>
            <a href>经营证照</a>
            <span class="vertical-line">|</span>
            <span>(京)网械平台备字(2018)第00003号</span>
            <span class="vertical-line">|</span>
            <a href>营业执照</a>
          </p>
        </div>
        <div class="mod_copyright_inter">
          <p>
            <a v-for="(item,index) in country" :key="index">
              <i :class="itemNum(index)"></i>
              {{item}}
              <span
                class="vertical-line"
                v-if="!(index === country.length - 1)"
              >|</span>
            </a>
          </p>
        </div>
        <div class="mod_copyright_subsites">
          <p>
            <span>京东旗下网站：</span>
            <a href>京东钱包</a>
            <span class="vertical-line">|</span>
            <a href>京东云</a>
          </p>
        </div>
      </div>
      <div class="mod-end">
        <a href class="item1"></a>
        <a href class="item2"></a>
        <a href class="item3"></a>
        <a href class="item4"></a>
        <a href class="item5"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
  props: ["copyRight", "country"],
  methods: {
    itemNum: function(index) {
      return `item${index + 1}`;
    }
  }
};
</script>

<style scoped>
.mod-copyright-wrap {
  height: 265px;
  width: 100%;
}
.mod-copyright {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  padding: 15px 0;
}
.mod-copyright-link,
.mod_copyright_cert {
  text-align: center;
}
.mod-copyright-link a {
  color: #666;
  cursor: pointer;
}
.mod-copyright-link a:hover {
  color: #ce141c;
}
.mod-copyright-link span {
  margin: 0 10px;
  color: #ccc;
}

.mod_copyright_info {
  padding: 15px 0;
  text-align: center;
}
.mod_copyright_cert {
  color: #999;
  line-height: 22px;
}
.vertical-line {
  margin: 0 10px;
  color: #ddd;
}
.mod_copyright_inter,
.mod_copyright_subsites {
  line-height: 22px;
}
.mod_copyright_inter .item1 {
  display: inline-block;
  background-image: url(../../../assets/81.png);
  background-position: -108px -155px;
  width: 15px;
  height: 12px;
  margin-top: -1px;
  margin-right: 10px;
  vertical-align: -1px;
}
.mod_copyright_inter .item2 {
  display: inline-block;
  background-image: url(../../../assets/81.png);
  background-position: -168px -155px;
  width: 15px;
  height: 12px;
  margin-top: -1px;
  margin-right: 10px;
  vertical-align: -1px;
}
.mod_copyright_inter .item3 {
  display: inline-block;
  background-image: url(../../../assets/81.png);
  background-position: -148px -154px;
  width: 15px;
  height: 12px;
  margin-top: -1px;
  margin-right: 10px;
  vertical-align: -1px;
}
.mod_copyright_inter .item4 {
  display: inline-block;
  background-image: url(../../../assets/81.png);
  background-position: -128px -154px;
  width: 15px;
  height: 12px;
  margin-top: -1px;
  margin-right: 10px;
  vertical-align: -1px;
}
.mod_copyright_inter .item5 {
  display: inline-block;
  background-image: url(../../../assets/81.png);
  background-position: -108px -170px;
  width: 15px;
  height: 12px;
  line-height: 12px;
  margin-right: 10px;
}
.mod_copyright_subsites p span:nth-child(1) {
  color: #999999;
}
.mod-end {
  text-align: center;
}
.mod-end .item1 {
  display: inline-block;
  width: 103px;
  height: 32px;
  background-image: url(../../../assets/81.png);
  background-position: -205px -111px;
  margin-right: 5px;
}
.mod-end .item2 {
  display: inline-block;
  width: 103px;
  height: 32px;
  background-image: url(../../../assets/81.png);
  background-position: -205px -74px;
  margin-right: 5px;
}
.mod-end .item3 {
  display: inline-block;
  width: 103px;
  height: 32px;
  background-image: url(../../../assets/81.png);
  background-position: -205px -37px;
  margin-right: 5px;
}
.mod-end .item4 {
  display: inline-block;
  width: 103px;
  height: 32px;
  background-image: url(../../../assets/81.png);
  background-position: -205px 0;
  margin-right: 5px;
}
.mod-end .item5 {
  display: inline-block;
  width: 103px;
  height: 32px;
  background-image: url(../../../assets/81.png);
  background-position: 0 -155px;
  margin-right: 5px;
}
</style>
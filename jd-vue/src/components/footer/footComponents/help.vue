<template>
  <div class="mod-help">
    <div class="help-wrap">
      <div class="help-nav" v-for="(item,index) in helpNav" :key="index">
        <h5 class="help-nav-tit">{{item['title']}}</h5>
        <ul>
          <li v-for="(info,index) in item['info']" :key="index">
            <a>{{info}}</a>
          </li>
        </ul>
      </div>
      <div class="help-cover">
        <h5 class="help-nav-tit">{{helpCover['title']}}</h5>
        <div class="help-cover-con">
          <p class="help-cover-info">{{helpCover['info']}}</p>
          <div class="help-cover-more-wrap">
            <div class="help-cover-more">
              <a href>
                {{helpCover['detail']}}
                <i class="right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Help",
    props:["helpNav","helpCover"]
}
</script>

<style scoped>
.mod-help {
  width: 100%;
  height: 200px;
  position: relative;
  margin: 20px 0;
}
.mod-help .help-wrap {
  width: 1190px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  color: #666;
  border-bottom: 1px solid #ddd;
}
.help-nav {
  width: 198px;
  line-height: 22px;
}
.help-nav-tit {
  font-size: 14px;
  margin-bottom: 5px;
}
.help-nav a {
  color: #666;
  cursor: pointer;
}
.help-nav a:hover {
  color: #ce141c;
}
.help-cover {
  width: 200px;
  height: 150px;
  background-image: url(../../../assets/81.png);
}
.help-cover-more-wrap {
  text-align: right;
  line-height: 22px;
  display: block;
  height: 22px;
  width: 100%;
}
.help-cover-more a {
  color: #666;
}
.help-cover-more .right-arrow {
  display: inline-block;
  border: solid #666;
  border-width: 0 2px 2px 0;
  padding: 2px;
  margin-bottom: 1px;
  transform: rotate(-45deg);
}
.help-cover-more a:hover {
  color: #ce141c;
}
.help-cover-more a:hover .right-arrow {
  border: solid #ce141c;
  border-width: 0 2px 2px 0;
}
</style>
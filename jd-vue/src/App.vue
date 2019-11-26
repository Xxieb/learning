<template>
  <div id="app">
    <Nav></Nav>
    <Head></Head>
    <Fs></Fs>
    <jd-app></jd-app>
    <Square></Square>
    <Recommend></Recommend>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "./components/nav/index";
import Head from "./components/header/index";
import Fs from "./components/fs/index";
import JdApp from "./components/app/index";
import Square from "./components/square/index";
import Recommend from "./components/recommend/index";
import Foot from "./components/footer/index";
export default {
  name: "App",
  components: {
    Nav,
    Head,
    Fs,
    JdApp,
    Square,
    Recommend,
    Foot,
  },
  data:function(){
    return {
      showLoadding:false
    }
  },
  methods: {}
};
</script>

<style>
body {
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    "\5B8B\4F53", sans-serif;
  background-color: #f4f4f4;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:link,
a:visited {
  color: #999999;
}
a:hover {
  color: #f10215;
}
</style>

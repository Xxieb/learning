<template>
  <nav id="nav">
    <div class="container">
      <div class="container-left">
        <NavLeft :data="citys" :countries="countries"></NavLeft>
      </div>
      <div class="container-right">
        <NavRight :menu="menu"></NavRight>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLeft from "./navLeft/left";
import NavRight from "./navRight/right";
export default {
  name: "Nav",
  data: function() {
    return {
      url: "/nav.json",
      citys: "",
      countries: [],
      menu: {
        one: [],
        two: [],
        three: [],
        four: []
      }
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.citys = res.data["cityList"];
        this.countries = res.data["countries"];
        this.menu["one"] = res.data["menu"]["one"]["title"];
        this.menu["two"] = res.data["menu"]["two"]["content"];
        this.menu["three"] = res.data["menu"]["three"]["content"];
        this.menu["four"] = res.data["menu"]["four"]["content"];
        return res.data["cityList"];
      });
    }
  },
  components: {
    NavLeft,
    NavRight
  },
  created() {
    this.getData();
  }
};
</script>


<style scoped>
#nav {
  height: 31px;
  background-color: #e3e4e5;
  border-bottom: 1px solid #ddd;
}
#nav .container {
  position: relative;
  width: 1190px;
  height: 31px;
  line-height: 31px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #e3e4e5;
}
.loading {
  width: 100%;
  height: 200px;
}
</style>

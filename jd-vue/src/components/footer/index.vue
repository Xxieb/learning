<template>
  <footer id="jd-footer">
    <div class="mod-service-wrap">
      <Service :service="service"></Service>
    </div>
    <div class="mod-help">
      <Help :helpNav="helpNav" :helpCover="helpCover"></Help>
    </div>
    <div class="mod-copyright-wrap">
      <CopyRight :copyRight="copyRight" :country="country"></CopyRight>
    </div>
  </footer>
</template>

<script>
import Service from "./footComponents/service";
import Help from "./footComponents/help";
import CopyRight from "./footComponents/copyright";
export default {
  name: "Footer",
  components: {
    Service,
    Help,
    CopyRight
  },
  data: function() {
    return {
      helpNav: [],
      helpCover: [],
      copyRight: [],
      service: [],
      country: [],
      url: "/help.json"
    };
  },
  methods: {
    getData: function() {
      this.$http.get(this.url).then(res => {
        this.helpNav = res.data["helpNav"];
        this.helpCover = res.data["helpCover"];
        this.copyRight = res.data["copyRight"];
        this.service = res.data["service"];
        this.country = res.data["country"];
      });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scoped>

</style>
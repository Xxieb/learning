<template>
  <div class="items">
    <a href @click.prevent="changeCity(item)">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["item", "index"],
  methods: {
    changeCity: function(val) {
      this.$emit("getItem", val);
    }
  }
};
</script>

<style scoped>
.items a {
  display: inline-block;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  color: #999999;
  cursor: pointer;
  white-space: nowrap;
}
.items a:hover {
  color: #f10215;
}
.selected a:hover{
  background-color: #f10215 !important;
  color: white
}
</style>
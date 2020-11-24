<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
div {
  height: 50/360 * 100vw;
  line-height: 50/360 * 100vw;

  h2 {
    position: relative;
    padding-left: 9px;
    font-size: 17px;
  }
  h2::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9/360 * 100vw;
    width: 2px;
    height: 16/360 * 100vw;
    background-color: #d33a31;
  }
}
</style>
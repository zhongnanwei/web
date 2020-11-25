<template>
  <div class="content">
    <div class="message">
      <p>{{ message.name }}</p>
      <span>{{ message.song.artists[0].name }} - {{ message.name }}</span>
    </div>
    <div class="play">
      <span class="iconfont iconshipin"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="less" scoped>
.content {
  margin-left: 10 /360 * 100vw;
  padding: 6 /360 * 100vw 0;
  height: 54 /360 * 100vw;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  .message {
    flex: 1;
    height: 54 /360 * 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    p {
      font-size: 17px;
    }
    span {
      font-size: 12px;
      color: #888;
      position: relative;
      padding-left: 18 /360 * 100vw;
      &::before {
        content: "";
        position: absolute;
        top: 2 /360 * 100vw;
        left: 0;
        width: 12 /360 * 100vw;
        height: 8 /360 * 100vw;
        background: url(../assets/index.png) 0 0 ~"/" 166 /360 * 100vw 97 /360 *
          100vw;
      }
    }
  }
  .play {
    padding: 0 10 /360 * 100vw;
    display: flex;
    align-items: center;
    span {
      font-size: 22 /360 * 100vw;
      color: #aaaaaa;
      border: 1px solid #aaaaaa;
      border-radius: 50%;
    }
  }
}
</style>
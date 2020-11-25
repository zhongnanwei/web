<template>
  <div class="home">
    <header>
      <h1>网易云音乐</h1>
      <span>下载APP</span>
    </header>
    <van-tabs sticky>
      <van-tab title="推荐音乐">
        <Title title="推荐音乐"></Title>
        <!-- http://localhost:3000/playlist/detail?id=**** -->
        <ul class="recomond">
          <li v-for="song in personalized" :key="song.id">
            <div class="playCount">{{ song.playCount }}</div>
            <img :src="song.picUrl" alt="" />
            <p>{{ song.name }}</p>
          </li>
        </ul>
        <Title title="最新音乐"></Title>
        <Music :message="song" v-for="song in songs" :key="song.id"></Music>
      </van-tab>
      <van-tab title="热歌榜">热歌榜</van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Title from "../components/title.vue";
import Music from "../components/music.vue";
export default {
  components: {
    Title,
    Music,
  },
  data() {
    return {
      personalized: [],
      songs: [],
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "/personalized?limit=6",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.personalized = res.data.result;
        this.personalized.forEach((song) => {
          if (song.playCount > 100000000)
            song.playCount = Math.floor(song.playCount / 10000000) / 10 + "亿";
          if (song.playCount > 10000)
            song.playCount = Math.floor(song.playCount / 1000) / 10 + "万";
        });
      }
    });
    this.$axios({
      method: "get",
      url: "/personalized/newsong",
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        this.songs = res.data.result;
      }
    });
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10/360 * 100vw;
  width: 100vw;
  height: 84/360 * 100vw;
  background-color: #d43c33;
  box-sizing: border-box;
  h1 {
    float: left;
    color: #fff;
  }
  span {
    display: block;
    float: right;
    height: 36/360 * 100vw;
    line-height: 36/360 * 100vw;
    font-size: 16/360 * 100vw;
    width: 100/360 * 100vw;
    text-align: center;
    color: #d43c33;
    background-color: #fff;
    border-radius: 18/360 * 100vw;
  }
}
.recomond {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 118/360 * 100vw;
    height: 154/360 * 100vw;
    margin-bottom: 16 /360 * 100vw;
    position: relative;
    img {
      display: block;
      width: 118 /360 * 100vw;
      height: 118 /360 * 100vw;
    }
    p {
      padding: 6/360 * 100vw 2/360 * 100vw 0 6/360 * 100vw;
      height: 30/360 * 100vw;
      line-height: 1.2;
      font-size: 13/360 * 100vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .playCount {
    position: absolute;
    right: 5px;
    top: 2px;
    z-index: 3;
    padding-left: 13px;
    color: #fff;
    font-size: 12px;
  }
}
</style>

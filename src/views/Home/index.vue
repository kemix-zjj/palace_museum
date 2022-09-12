<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 内容部分 -->
    <Content></Content>
    <!-- 故宫——藏品 -->
    <block></block>
    <!-- 文章部分 -->
    <Article></Article>
    <!-- 下面——滑动 -->
    <huad></huad>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import Content from "./Content";
import block from "./block";
import Article from "./Article";
import huad from "./huad";
export default {
  name: "Home",
  components: {
    Carousel,
    Content,
    block,
    Article,
    huad,
  },
};
</script>

<style scoped>
</style>
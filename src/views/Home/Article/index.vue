<template>
  <div class="article">
    <!-- 文章左侧 -->
    <ArticleLeft></ArticleLeft>
    <!-- 文章中间 -->
    <ArticleCenter></ArticleCenter>
    <!-- 文章右侧 -->
    <ArticleRight></ArticleRight>
  </div>
</template>

<script>
import ArticleRight from "./ArticleRight";
import ArticleCenter from "./ArticleCenter";
import ArticleLeft from "./ArticleLeft";
export default {
  name: "Article",
  components: {
    ArticleRight,
    ArticleCenter,
    ArticleLeft,
  },
};
</script>

<style scoped>
.article {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 25px;
}
</style>
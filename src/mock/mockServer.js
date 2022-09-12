//1引入mockjs
import Mock from 'mockjs';

import banner from './banner.json';
import history from './history.json';
import content from './content.json';
import header from './header.json';
import talks from './talks.json'
import books from './books.json'
import article from './article.json'
import footer from './footer.json'

// 2
//mock数据
Mock.mock("/mock/banner", {
    code: 200,
    data: banner
}); //模拟首页轮播图数据
Mock.mock("/mock/history", {
    code: 200,
    data: history
}); //模拟详情页上半部分数据
Mock.mock("/mock/content", {
    code: 200,
    data: content
}); //模拟首页盒子左边组件数据
Mock.mock("/mock/header", {
    code: 200,
    data: header
}); //模拟首页头部的导航数据
Mock.mock("/mock/talks", {
    code: 200,
    data: talks
}) //模拟详情页中的论坛的数据

Mock.mock("/mock/books", {
    code: 200,
    data: books
}) //模拟详情页中的书目的数据

Mock.mock("/mock/article", {
    code: 200,
    data: article
}) //模拟主页的块级盒子的数据

Mock.mock("/mock/footer", {
    code: 200,
    data: footer
}) //模拟底部第三方链接的数据
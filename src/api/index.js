import mockRequests from './mockAjax';

//获取banner(home首页轮播图接口)--模拟发请求->在组件加载完毕后要发请求（mounted）
export const reqGetBannerList = () => mockRequests.get('/banner');

//获取partone(partone轮数据接口)--模拟发请求->在组件加载完毕后要发请求（mounted）
export const reqGetHistoryList = () => mockRequests.get('/history');

//获取content(数据接口)--模拟发请求->在组件加载完毕后要发请求（mounted）
export const reqGetContentList = () => mockRequests.get('/content');


// 获取talks(详情页中的论坛的接口)
export const reqTalksList = () => mockRequests.get('/talks')
// 获取books(详情页中的书目的接口)
export const reqBooksList = () => mockRequests.get('/books')

// 获取article(主页中的博物馆活动，学术研究的接口)
export const reqArticleList = () => mockRequests.get('/article')

// 获取header(主页头部接口)--模拟发请求->在组件加载完毕后要发请求（mounted）
export const reqGetHeadList = () => mockRequests.get('/header');

// 获取footer(主页底部第三方链接数据的接口)
export const reqFooterList = () => mockRequests.get('/footer')
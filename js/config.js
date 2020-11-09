/*
 * 接口管理文件
 */
//由于url以后实践中出现很多种，因此需要分类接口
var SIFE_URL = 'http://localhost:';
var post = 3000;


//保存所有接口，保存在一个全局的对象里，
var URL = {
  banner: SIFE_URL + post + '/banner',
  index: SIFE_URL + post + '/personalized',
  newest: SIFE_URL + post + '/album/newest',
  toplist: SIFE_URL + post + '/toplist/detail'
}
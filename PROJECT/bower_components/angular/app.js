var App = angular.module('myApp', ['ui.router']);
    App.config(function($stateProvider, $urlRouterProvider) {

	//路由重定向$urlRouterProvide
	$urlRouterProvider.otherwise('/index');
	//状态配置
	$stateProvider
		.state('index', {
			url: 'index',
			templateUrl: 'index.html'
		})
		.state('yc_help', {
			url: 'html/优橙协助',
			templateUrl: 'html/韩涛/优橙协助.	html'
		})
		.state('dingdan_status', {
			url: 'dingdan_status',
			templateUrl: 'html/我的订单/商品订单/我的订单-商品订单.html'
		})
		.state('my_store', {
			url: 'my_store',
			templateUrl: 'html/我的店铺/index.html'
		})	
		.state('Fans',{
			url:"Fans",
			templateUrl: 'html/韩涛/粉丝列表.html'
		})
		.state('Names',{
			url:"Names",
			templateUrl: 'html/我的店铺/店铺个人信息/店铺名称.html'
		})
		.state('Comment',{
			url:"Comment",
			templateUrl: 'html/韩涛/评论管理.html'
		})
//		.state("names",{
//			url"names",
//			templateUrl:"html/我的店铺/店铺个人信息/店铺名称.html"
//		})
})
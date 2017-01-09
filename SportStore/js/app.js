/**
 * Created by hxsd on 2016/12/15.
 */
//创建一个新模块,负责管理过滤器
var myFilter=angular.module("myFilter",[]);

//创建一个新模块,负责管理购物车service
var cartModule=angular.module("cartModule",[]);

//创建主模块
var myApp=angular.module("myApp",["myFilter","cartModule","ngRoute","ngMessages"]);

//配路由:首页(商品浏览页),结账页面,下订单页面,感谢页面
myApp.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"view/productsList.html",controller:"productListCtrl"})
        .when("/checkout",{templateUrl:"view/checkoutSummary.html",controller:"checkoutCtrl"})
        .when("/order",{templateUrl:"view/placeOrder.html"})
        .when("/thanks",{templateUrl:"view/thankYou.html"})
        .otherwise("/",{templateUrl:"view/productsList.html",controller:"productListCtrl"})
});
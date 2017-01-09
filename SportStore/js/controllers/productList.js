/**
 * Created by hxsd on 2016/12/15.
 */
//注册一个负责商品类别和商品显示操作的控制器
myApp.controller("productListCtrl",function($scope,shopCart){
    //用户选中的当前商品的类型
    $scope.selectedCategory=null;

    //响应用户对商品类别的选择
    $scope.selectCategory=function(category){
        $scope.pageNum=1;   //请求的页码
        //将用户选中的商品类别保存为当前的类别
        $scope.selectedCategory=category;
    };

    //定义一个按商品类别过滤商品信息的函数
    $scope.filterByCategory=function(product){
        //如果用户点击的是"首页",显示全部商品
        return $scope.selectedCategory==null || product.category==$scope.selectedCategory;
    };

    //与分页有关的数据
    $scope.pageNum=1;   //请求的页码
    $scope.pageSize=4;  //页面大小

    //分页按钮响应函数
    $scope.page=function(p){
        $scope.pageNum=p;
    };

    //实现"添加购物车"功能
    $scope.add=function(product){
        shopCart.add(product);  //将商品加入购物车
    };
});
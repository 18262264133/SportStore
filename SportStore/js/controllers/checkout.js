/**
 * Created by hxsd on 2016/12/16.
 */
myApp.controller("checkoutCtrl",function($scope,shopCart){
    //获得购物车中的商品
    $scope.cart=shopCart.findAll();

    //计算购物车商品总金额的函数
    $scope.summary=function(){
        var total=0;
        //遍历统计
        angular.forEach($scope.cart,function(item){
            total+=item.quantity*item.product.price; //累加购买金额
        });
        return total;
    };

    //删除商品的函数
    $scope.remove=function(item){
        shopCart.removeProducts(item)
    }
});
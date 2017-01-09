/**
 * Created by hxsd on 2016/12/16.
 */
cartModule.factory("shopCart",function(){
    var cart=[];    //等价于购物车中的购物篮
    return {
        //将商品加入购物车
        add:function(product){
            for(var i=0;i<cart.length;i++){
                var item=cart[i];
                if(item.product.name==product.name){
                    //说明购物车中已有该商品,需要修改购买数量
                    item.quantity++;
                    return;     //结束执行函数
                }
            }
            cart.push({product:product,quantity:1});
        },
        //查看购物车中的所有商品的方法
        findAll:function(){
            return cart;
        },
        //清空购物篮内的商品
        clearProducts:function(){
            cart.length=0;
            return cart;
        },
        //删除购物篮内指定的商品
        removeProducts:function(item){
            var index=cart.indexOf(item);
            cart.splice(index,1);
            return cart;
        }
    }
})
//注册控制器
.controller("cartCtrl",function($scope,shopCart){
    //获得购物车中的所有商品
    var cart=shopCart.findAll();
    //计算商品的购买总数量
    $scope.count=function(){
        var total=0;
        //遍历统计
        angular.forEach(cart,function(item){
            total+=item.quantity; //累加购买数量
        });
        return total;
    };
    //计算商品的购买总金额
    $scope.money=function(){
        var total=0;
        //遍历统计
        angular.forEach(cart,function(item){
            total+=item.quantity*item.product.price; //累加购买金额
        });
        return total;
    };
});
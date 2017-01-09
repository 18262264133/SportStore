/**
 * Created by hxsd on 2016/12/15.
 */
//在主模块中创建一个顶层的控制器
//要用到的商品数据,都在这个控制器中
myApp.controller("sportStoreCtrl",function($scope,shopCart,$location,$http){
    $scope.data={
        //商品类别
        categories:[
            {id:"10001",category:"商品类别01"},
            {id:"10002",category:"商品类别02"},
            {id:"10003",category:"商品类别03"},
            {id:"10004",category:"商品类别04"}
        ],
        //商品明细
        products:[
            {name:"大唐商会商品0101",category:"商品类别01",price:100,desc:"2016新款外观",imgsrc:"images/TB1_50x50.jpg"},
            {name:"大唐商会商品0102",category:"商品类别01",price:100,desc:"2016新款外观",imgsrc:"images/TB1_50x50.jpg"},
            {name:"大唐商会商品0103",category:"商品类别01",price:100,desc:"2016新款外观",imgsrc:"images/TB1_50x50.jpg"},
            {name:"大唐商会商品0201",category:"商品类别02",price:180,desc:"2016新款外观",imgsrc:"images/TB2_50x50.jpg"},
            {name:"大唐商会商品0202",category:"商品类别02",price:180,desc:"2016新款外观",imgsrc:"images/TB2_50x50.jpg"},
            {name:"大唐商会商品0301",category:"商品类别03",price:230,desc:"2016新款外观",imgsrc:"images/TB3_50x50.jpg"},
            {name:"大唐商会商品0302",category:"商品类别03",price:260,desc:"2016新款外观",imgsrc:"images/TB2_50x50.jpg"},
            {name:"大唐商会商品0303",category:"商品类别03",price:200,desc:"2016新款外观",imgsrc:"images/TB3_50x50.jpg"},
            {name:"大唐商会商品0401",category:"商品类别04",price:200,desc:"2016新款外观",imgsrc:"images/TB2_50x50.jpg"},
            {name:"大唐商会商品0402",category:"商品类别04",price:300,desc:"2016新款外观",imgsrc:"images/TB1_50x50.jpg"},
            {name:"大唐商会商品0403",category:"商品类别04",price:560,desc:"2016新款外观",imgsrc:"images/TB3_50x50.jpg"},
            {name:"大唐商会商品0403",category:"商品类别04",price:560,desc:"2016新款外观",imgsrc:"images/TB3_50x50.jpg"}
        ],
        //保存用户的收货信息
        shipping:{}
    };

    //发送订单的方法
    //1) $http 2)购物商品信息+收货人信息
    $scope.send=function(){
        //"打包"好要发送到服务器端的数据
        var order={};
        order.cart=shopCart.findAll();
        order.shipping=angular.copy($scope.data.shipping);


        //使用http发送,并处理:1)成功 2)失败 3)收尾
        var url="order.json";    //服务器订单处理接口
        $http.post(url,order)
            .success(function(data){
                //将服务器端的订单号保存起来,并显示在thank You页面上
                $scope.data.orderId=data.orderId;
                //清空购物车
                shopCart.clearProducts();
            })
            .error(function(err){
                //将错误信息保存起来,并显示在thank You页面上
                $scope.data.orderErr=err;
            })
            //不管http请求是否成功,最后都会执行finally里的函数
            .finally(function(){
                //跳转到thank You页面, $location.path(".....")
                $location.path("/thanks")
            });

    }
});
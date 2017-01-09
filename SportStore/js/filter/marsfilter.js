/**
 * Created by hxsd on 2016/12/15.
 */
//注册一个分页过滤器
myFilter.filter("pageFilter",function(){
    /**
    * 参数1.products--被过滤出的商品数组
    * 参数2.pageNum--请求的页码数
    * 参数3.pageSize--页面大小
    **/
    return function (products,pageNum,pageSize){
        //要让代码更加健壮,最好是对转入的参数进行判断
        if(!angular.isArray(products) || !angular.isNumber(pageNum) || !angular.isNumber(pageSize)){
            //将被过滤出的数组原封不动的返回
            return products;
        }
            //计算出请求的数据的初始值索引值
            var startIndex=(pageNum-1)*pageSize;

            //判断起始索引是否在数组范围内
            if(startIndex>=products.length){
                //如果是智联,是跳到最后一页
                //这里返回一个空数组
                return [];
            }
            //提取一页的数据到新数组中
            var newArr=products.slice(startIndex,startIndex+pageSize);
            //返回新数组用于view显示
            return newArr;
        }
})
.filter("btnFilter",function(){
    return function (products,pageSize){
        //生成页码
        var pageArr = [];

        //获得页码数
        var page=Math.ceil(products.length/pageSize);

        for(var i=0;i<page;i++){
            pageArr.push(i+1);
        }

        return pageArr;
    }
});
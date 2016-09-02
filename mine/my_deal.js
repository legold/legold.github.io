//为了解决点击阅读全文后，跳转的页面不是从顶部开始，而是跳转到上一个页面的滚动条所在的位置
var md = (function(){
   var getByClass = function(oParent,sClass){
       if(document.getElementsByClassName){
         sClass = arguments.length == 1 ?arguments[0]:arguments[1];
         return document.getElementsByClassName(sClass);
      }else{
        var aResult = [];
        if(arguments.length == 1){
          sClass = arguments[0];
          oParent = document;
        }
        var aEle = oParent.getElementsByTagName('*');
        var re = new RegExp("\\b"+sClass+"\\b","g");  
        for(var i=0,l=aEle.length;i<l;i++){
           if(aEle[i].className.search(re) != -1){
              aResult.push(aEle[i]);
           }
        }
        return aResult;
      }
   };

   return {
   	  getClass:getByClass
   }
})();

window.onload = function(){
	var aa = md.getClass('posts','btn');
    //console.log(aa.length,aa);
    console.log('hello body!');
    for(var i=0,len=aa.length;i<len;i++){    	
    	var a_href = aa[i].href;
    	//console.log(a_href);
    	var n_href = a_href.substring(0,a_href.length-5);
    	aa[i].href = n_href;
    	//console.info(n_href);
    }

};

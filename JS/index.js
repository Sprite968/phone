            //需求：无缝滚动。
            //思路：赋值第一张图片放到ul的最后，然后当图片切换到第五张的时候
            //     直接切换第六章，再次从第一张切换到第二张的时候先瞬间切换到
            //     第一张图片，然后滑动到第二张
            //步骤：
            //1.获取事件源及相关元素。（老三步）
            //2.复制第一张图片所在的li,添加到ul的最后面。
            //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
            //4.鼠标放到ol的li上切换图片
            //5.添加定时器
            //6.左右切换图片（鼠标放上去隐藏，移开显示）

window.onload=function(){
//1.获取事件源及相关元素。（老三步）
// var box= document.getElementsByClassName("con-body");
// var ul=box.firstElementChild || box.firstChild;
// var imgWidth=box.offectWidth;
// var ol = box.children[1];
// var div=document.getElementById("arr");
// var spanArr=div.children;

            var box =document.getElementsByClassName("con-body")[0];
            
            var imgWidth = box.offsetWidth;
            var ul = box.firstElementChild || box.firstChild;
            
            var ol = box.children[1];
            var div = box.lastElementChild || box.lastChild;
            var spanArr = div.children;


//2.复制第一张图片所在的li,添加到ul的最后面。
var ulNewLi=ul.children[0].cloneNode(true);
ul.appendChild(ulNewLi);


//3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。

      for (var i =0; i <ul.children.length-1; i++) {
            var olNewLi=document.createElement("li");
            ol.appendChild(olNewLi);
            
      }
            var olLiArr=ol.children;
            olLiArr[0].style.background="yellow";
            





//4.鼠标放到ol的li上切换图片
for (var i = 0;i<olLiArr.length; i++) {
      olLiArr[i].index=i;
      olLiArr[i].onmouseover=function(){
            for (var j=0;j<olLiArr.length;j++){
                  olLiArr[j].style.background="#fff";
            }
            this.style.background="yellow";
            //鼠标放到小的方块上的时候索引值和key以及square同步
            key=square=this.index;
            animate(ul,-this.index*imgWidth);
      }


}
//5.添加定时器
            var timer=setInterval(autoPlay,2000);
//固定向右切换图片
            //两个定时器（一个记录图片，一个记录小方块）
            var key = 0;
            var square = 0;
            function autoPlay(){
                //通过控制key的自增来模拟图片的索引值，然后移动ul
               key++;
               if (key>olLiArr.length) {
                  //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
                  ul.style.left=0;
                  key=1;
               }
               animate(ul,-key*imgWidth);

                //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                square++;
                if (square>olLiArr.length-1) {
                  square=0
                  }
                  for (var i=0;i<olLiArr.length;i++) {
                        olLiArr[i].style.background="#fff";
                  }
                  olLiArr[square].style.background="yellow";

                }
                

            //鼠标放上去清除定时器，移开后在开启定时器
            box.onmouseover = function () {
                div.style.display = "block";
                clearInterval(timer);
            }
            box.onmouseout = function () {
                div.style.display = "none";
                timer = setInterval(autoPlay,2000);
            }

      
//6.左右切换图片（鼠标放上去隐藏，移开显示）
        spanArr[0].onclick=function(){
            key--;
            if (key<0) {
                  ul.style.left=-imgWidth*(olLiArr.length)+"px";
                  key=olLiArr.length-1;
            }
            animate(ul,-key*imgWidth)
            square--;
            if (square<0) {
                  square=olLiArr.length-1;
            }
                  for (var i = 0; i < olLiArr.length; i++) {
                        olLiArr[i].style.background="#fff";
            }    
                  olLiArr[square].style.background="yellow";
            
        }  
        spanArr[1].onclick=function(){
            key++;
            if (key>olLiArr.length) {
                  ul.style.left=0;
                  key=1;
                  
            }
            animate(ul,-key*imgWidth)



            square++;
            if (square>olLiArr.length-1) {
                  square=0;
            }
                  for (var i = 0; i < olLiArr.length; i++) {
                        olLiArr[i].style.background="#fff";
                  }
                  olLiArr[square].style.background="yellow";
            
        }  


      function animate(ele,target){
            clearInterval(ele.timer);
            var speed=target>ele.offsetLeft?10:-10;
            ele.timer=setInterval(function(){
                  var val=target-ele.offsetLeft;
                  ele.style.left=ele.offsetLeft+speed+"px";
                  if (Math.abs(val)<Math.abs(speed)) {
                        ele.style.left=target+"px";
                        clearInterval(ele.timer);
                  }
            },5)
      }    
      
      // var welcome =document.getElementById("welcome");
      // welcome.onclick=function(){
      //   welcome.innerHTML="<a href='#'>zhou 欢迎你！</a>";
      // }
}
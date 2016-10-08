
//轮播图
window.onload=function(){
	var btnss=document.getElementsByClassName("btnone");
	var banners=document.getElementsByClassName("item");
	for(var i=0;i<btnss.length;i++){
    btnss[i].aa=i;
    btnss[i].onmouseover=function(){
    	for (var i = 0; i < banners.length; i++) {
    		banners[i].style.zIndex="1";
    		btnss[i].style.background="#211616";
    	};
    	btnss[this.aa].style.background="#e5004f";
    	banners[this.aa].style.zIndex="2"
    }
	}
 var lunbo1=setInterval(move,3000)
	var num=0;
	function move(){
		num++;
		if(num==4){
			num=0;
		}
		for (var i = 0; i < banners.length; i++) {
    		banners[i].style.zIndex="1";
    		btnss[i].style.background="#211616";
    	};
    	btnss[num].style.background="#e5004f";
    	banners[num].style.zIndex="2"
	}

var banner_box=document.getElementsByClassName("banner-box")[0]
    banner_box.onmouseover=function(){
  clearInterval(lunbo1)
}
banner_box.onmouseout=function(){
  lunbo1=setInterval(move,3000)
}



// //美丽优雅 选项卡



    var box=getClass("box")//大盒子
  var leftbtn=getClass("leftbtn")//左边箭头
  var rightbtn=$(".rightbtns")//右边箭头
  console.log(rightbtn)
  // var bigbtn=getClass("bigbtn") //小圆点的盒子
// var circles=bigbtn.getElementsByClassName("bigbtns") //小圆点
  var btns1=$(".btns1")
  console.log(btns1)
  var btns2=$(".btns2")
  var inner=getClass("btnbtn") //箭头的盒子
  var boxs=getClass("bigphoto")//图片盒子


   
   for (var i = 0; i < box.length; i++) {
   lunbooo(box[i],leftbtn[i],rightbtn[i],btns1[i],btns2[i],boxs[i])

   };
function lunbooo(box,leftbtn,rightbtn,btns1,btns2,boxs){
//  var yuan=bigbtn.getElementsByTagName("div")
//  console.log(yuan)
// var circles=bigbtn.getElementsByClassName("bigbtns")
// console.log(circles)



  var flog=true;
  box.onmouseover=function(){
    animate(leftbtn,{left:0},200)
     animate(rightbtn,{right:0},200)
  }
  box.onmouseout=function(){
    animate(leftbtn,{left:-30},200)
     animate(rightbtn,{right:-30},200)
  }//鼠标移入移除箭头让箭头颜色改变
  leftbtn.onmouseover=function(){
    this.style.backgroundPosition="left bottom"
  }
 leftbtn.onmouseout=function(){
     this.style.backgroundPosition="left top"
  }

  rightbtn.onmouseover=function(){
    if(flog){
      flog=true
   
    this.style.backgroundPosition="right bottom"
     }
  }
 rightbtn.onmouseout=function(){
     this.style.backgroundPosition="right top"
  }
// 箭头和圆圈的点击效果
rightbtn.onclick=moveright;
leftbtn.onclick=moveleft;
btns1.onclick=moveleft;
btns2.onclick=moveright;
function moveright(){
  animate(boxs,{marginLeft:-390})
  btns1.style.background="#555"
  btns2.style.background="#E5004F"
  flog=false
}
function moveleft(){
  animate(boxs,{marginLeft:0})
  btns2.style.background="#555";
  btns1.style.background="#E5004F"
   flog=true
}


}





// 热门推荐
var counters=document.getElementsByClassName("counters-bottom-right-bottom-box1");
  var btns=document.getElementsByClassName("counters-bottom-right-top1");
  var biaoti=document.getElementsByClassName("counters-right-biaoti")
  var top1=document.getElementsByClassName("counters-right-top1"); 
  for (var i = 0; i < btns.length; i++) {
    btns[i].index=i;
    btns[i].onmouseover=function(){
      for (var i = 0; i < btns.length; i++) {
        counters[i].style.display="none";
                btns[i].style.borderColor="rgb(51,51,51)";
                biaoti[i].style.color="#666"
                biaoti[i].style.fontWeight="400"
                top1[i].style.display="none";
                   
      };
      counters[this.index].style.display="block";
      this.style.borderColor="rgb(231,0,80)";
      biaoti[this.index].style.color="rgb(65,65,65)"
      biaoti[this.index].style.fontWeight="700"
      top1[this.index].style.display="block"
    }
  };
      
//推荐
     var btns1=document.getElementsByClassName("recommended-border");
     var text=document.getElementsByClassName("recommended-font");
     var biaoti1=document.getElementsByClassName("recommended-jiantou");
     var recommend=document.getElementsByClassName("recommended-left2-1");
   for (var i = 0; i < btns1.length; i++) {
        btns1[i].index=i;
        btns1[i].onmouseover=function(){
          for (var i = 0; i < btns1.length; i++) {
            recommend[i].style.display="none";
            btns1[i].style.borderColor="#333";
            biaoti1[i].style.display="none";
            text[i].style.fontWeight="400";
            text[i].style.color="rgb(102,102,102)";
            
          };
          recommend[this.index].style.display="block";
          this.style.borderColor="rgb(229,0,79)"
          biaoti1[this.index].style.display="block"
          text[this.index].style.fontWeight="700";
          text[this.index].style.color="#000";
          
        }
      }

      



// 侧导航
 var items=document.getElementsByClassName("cenavone");
  var masks=document.getElementsByClassName("mask");
  for (var i = 0; i < items.length; i++) {
    items[i].index=i;
    items[i].onmouseover=function(){
      masks[this.index].style.opacity="1";
     };
     items[i].onmouseout=function(){
        masks[this.index].style.opacity="0";  
  };
}


 var cenav=$(".cenav")[0];
  document.documentElement.scrollTop=1;
  if(document.documentElement.scrollTop==1){
    var scrollobj=document.documentElement;
  }else{
    var scrollobj=document.body;
  }
  var flag=true;flag2=true;
  window.onscroll=function(){
    var st=scrollobj.scrollTop;
    if(st>650){
      if(flag){
           flag=false;flag2=true;
      
      
      animate(cenav,{width:50,height:545})
    }
    }else{
      if(flag2){
       flag=true;flag2=false;
    
      
      animate(cenav,{width:0,height:0})
    }
    }
  }
  var cenavone=$(".cenavone");
  var sssmallbox=$(".ss-smallbox");
  for (var i = 0; i < cenavone.length; i++) {
    cenavone[i].index=i;
    cenavone[i].onclick=function(){
      var ot=sssmallbox[this.index].offsetTop;

      animate(scrollobj,{scrollTop:ot})
    }
  };

  var obj=document.documentElement;
    var fanhui=$(".fanhui")[0];
    fanhui.onclick=function(){
      //火狐 谷歌的兼容性问题
      obj=document.body.scrollTop==0?document.documentElement:document.body;
      animate(obj,{scrollTop:0})
    }

//下拉菜单
var myyintai=$(".myyintai")[0];
    var myshoucang=$(".myshoucang")[0];
    hover(myyintai,function(){     // hover 解决鼠标移入移出的多次问题 两个回调函数 一个移入 一个移出 
       myyintai.style.background="#fff" 
      myshoucang.style.display="block"  //鼠标移入下拉菜单出现
    },
    function(){
      myshoucang.style.display="none"  //鼠标移出下拉菜单收回
      myyintai.style.background=""
    })




//左动画
    var scroller=$(".shi-l-tpbox");
      var lefts=$(".jiantou1");
      var rights=$(".jiantou2");
      
      console.log(rights)
      for (var i = 0; i < scroller.length; i++) {
        lunbo(scroller[i],lefts[i],rights[i])
      }
      function lunbo(scroller,lefts,rights){
      rights.onclick=function(){
        
        animate(scroller,{marginLeft:-230},500,function(){
          var first=getFirst(this);
          this.appendChild(first);
          this.style.marginLeft=0;
        })
      } 
        lefts.onclick=function(){
          var last=getLast(scroller);
          var first=getFirst(scroller);
          scroller.insertBefore(last,first);
          scroller.style.marginLeft="-230px";
          animate(scroller,{marginLeft:0},500)
          
        }
      }


//按需加载 优化
var floors=$(".gabrielle");
    var tops=[];
    //兼容性
    for (var i = 0; i < floors.length; i++) {
      tops.push(floors[i].offsetTop);   
      //文档流的高度
    }

    var doc=document.body;
    doc.scrollTop=1;
      if (doc.scrollTop!=1) {
        doc=document.documentElement;
      }

    var ch=document.documentElement.clientHeight;
    // alert(ch)     浏览器的高度
    // doc.scrollTop=41;
    function xx(){
      var scroll=doc.scrollTop;  //滚动条高度
      for (var i = 0; i < floors.length; i++) {
        if (scroll+ch>tops[i]&&floors[i].getAttribute("flag")!="true") {  
        //比较当前滚动条的高度与容器的高度。比较二者的高度
          var imgs=$('img',floors[i]);  
          for (var j = 0; j < imgs.length; j++) {
            imgs[j].src=imgs[j].getAttribute("asrc")
          

          };
        floors[i].setAttribute('flag',true)
        };
      };
    }
    addEvent(window,'scroll',xx)




//线条
        function border(obj,time){
         obj.style.position="relative";
         var div1=document.createElement("div");
         var div2=document.createElement("div");
         var div3=document.createElement("div");
         var div4=document.createElement("div");
          div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px"
          div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px"
          div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px"
          div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px"
          obj.appendChild(div1)
          obj.appendChild(div2)
          obj.appendChild(div3)
          obj.appendChild(div4)
          var width=parseInt(getStyle(obj,"width"))+2
          var height=parseInt(getStyle(obj,"height"))+2
          obj.onmouseover=function(){
            animate(div1,{width:width},time)
            animate(div2,{height:height},time)
            animate(div3,{width:width},time)
            animate(div4,{height:height},time)
          }
          obj.onmouseout=function(){
            animate(div1,{width,width:0},time)
            animate(div2,{height,height:0},time)
            animate(div3,{width,width:0},time)
            animate(div4,{height,height:0},time)
          }
        }

     

  

     var tu1=$(".righttutu1")
     var tu2=$(".righttutu2")
     var tu3=$(".righttutu3")
     var tu4=$(".righttutu4")


      for(var i=0;i<tu1.length;i++){
        border(tu1[i],500); 
      };
      for(var i=0;i<tu2.length;i++){
        border(tu2[i],500);    
      };
      for(var i=0;i<tu3.length;i++){
        border(tu3[i],500);
      };
       for(var i=0;i<tu4.length;i++){
        border(tu4[i],500);
      };

    
 var box=$(".recommended-left2-1-1");
 var box1=$(".counters-small11")

 // var box2=$(".counters-bottom-right-bottom1")
 //  var box3=$(".counters-bottom-right-bottom2")
 //   var box4=$(".counters-bottom-right-bottom3")
 //    var box5=$(".counters-bottom-right-bottom4")
 //     var box6=$(".counters-bottom-right-bottom5")
 //      var box7=$(".counters-bottom-right-bottom6")
     for (var i = 0; i < box.length; i++) {
        border(box[i],300);
     };
     for (var i = 0; i < box1.length; i++) {
        border(box1[i],300);    
      };


//       for (var i = 0; i < box2.length; i++) {
//         border(box2[i],300);    
//       };
     
//  for (var i = 0; i < box3.length; i++) {
//         border(box3[i],300);    
//       };

// for (var i = 0; i < box4.length; i++) {
//         border(box4[i],300);    
//       };
// for (var i = 0; i < box5.length; i++) {
//         border(box5[i],300);    
//       };
// for (var i = 0; i < box6.length; i++) {
//         border(box6[i],300);    
//       };
// for (var i = 0; i < box7.length; i++) {
//         border(box7[i],300);    
//       };



}
















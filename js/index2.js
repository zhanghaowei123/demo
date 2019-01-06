window.onload = function(){

	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = "fixed";
		}else{
			cover.style.position = "static";
		}
	}
	/*放大镜*/
	//1 获取元素
	var box = document.getElementById("box");
	var img1 = document.getElementById("img1");
	var slider = document.getElementById("slider");
	var img2 = document.getElementById("img2");
	var Bimg = document.getElementById("Bimg");

	//2 给左侧的小图绑定鼠标移入、移出、移动事件
	img1.onmouseover = function(){
		box.style.width="816px";
		slider.style.display = "block";
		img2.style.display = "block";
	}
	img1.onmouseout = function(){
		slider.style.display = "none";
		img2.style.display = "none";
		box.style.width="408px";
	}
	img1.onmousemove = function(ev){
		var ev = ev || window.event;
		//(1)根据鼠标的位置，计算放大镜的位置
		var stt = document.documentElement.scrollTop || document.body.scrollTop;
		var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
		var top = ev.clientY + stt - box.offsetTop - slider.offsetHeight/2;
		var maxleft = img1.offsetWidth - slider.offsetWidth;
		var maxtop = img1.offsetHeight - slider.offsetHeight;
		left = left>maxleft?maxleft:left<0?0:left;
		top = top>maxtop?maxtop:top<0?0:top;

		//(2)设置放大镜的位置
		slider.style.left = left+"px";//移动比例
		slider.style.top = top+"px";
		//根据左侧放大镜的位置，计算右侧大图移动比例
		var w = left/maxleft;
		var h = top/maxtop;
		//计算大图的最大的移动范围
		var BimgLeft = img2.offsetWidth-Bimg.offsetWidth;
		var BimgTop = img2.offsetHeight-Bimg.offsetHeight;
		//计算大图的移动的距离，设置位置
		Bimg.style.left = w * BimgLeft+"px";
		Bimg.style.top = h * BimgTop+"px";
	}
	/*图片的切换*/
	var underimg1 = document.getElementById("underimg1");
	var underimg2 = document.getElementById("underimg2");
	var imgl = document.getElementById("imgl");
	var imgr = document.getElementById("imgr");
	var img1_1 = document.getElementById("img1_1");
	underimg1.onmouseover = function(){
		underimg2.style.border = "2px #ff9003";
		underimg1.style.border = "2px #ff9003 solid";
		img1_1.setAttribute("src","images/pp0.jpeg");
		Bimg.setAttribute("src","images/pp0.jpeg");
	}
	imgl.onclick=function(){
		underimg2.style.border = "2px #ff9003";
		underimg1.style.border = "2px #ff9003 solid";
		img1_1.setAttribute("src","images/pp0.jpeg");
		Bimg.setAttribute("src","images/pp0.jpeg");
	}
	underimg2.onmouseover = function(){
		underimg1.style.border = "2px #ff9003";
		underimg2.style.border = "2px #ff9003 solid";
		img1_1.setAttribute("src","images/pp1.jpeg");
		Bimg.setAttribute("src","images/pp1.jpeg");
	}
	imgr.onclick = function(){
		underimg1.style.border = "2px #ff9003";
		underimg2.style.border = "2px #ff9003 solid";
		img1_1.setAttribute("src","images/pp1.jpeg");
		Bimg.setAttribute("src","images/pp1.jpeg");
	}
}

	
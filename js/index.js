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
	/*轮播图*/
	var box = document.getElementById("box");
	var oNavlist = document.getElementById('box_nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;
	box.onmouseover = function(){
			animate(left,{opacity:80})
			animate(right,{opacity:80})
			clearInterval(timer)
		}
	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next, 3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for( var i=0; i<oNavlist.length; i++ ){
		(function(i){
			oNavlist[i].onclick = function(){
				index = i+1;
				navmove();
				animate(slider,{left:-800*index});
			}
		})(i);
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left = '-800px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left = '-4800px';
				index = 6;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].className = "";
		}
		if(index >6 ){
			oNavlist[0].className = "active";
		}else if(index<=0){
			oNavlist[5].className = "active";
		}else {
			oNavlist[index-1].className = "active";
		}
	}
	timer = setInterval(next, 3000);
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)

	/*充话费*/
	var select = document.getElementById("select");
	var money = document.getElementById("money");
	var select_child = select.children;
	select.onchange = function(){
		for(var i = 0;i<select_child.length;i++)
			if(select_child[i].selected)
				money.innerHTML="¥"+select_child[i].value;	
	}
}
function animatell(obj){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var now = parseInt(getStyle(obj,"right"));
		if(now == 0){
			clearInterval(obj.timer);
		}else{
			obj.style.right = now + 1 + "px";
		}
	})
}
function animatel(obj){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var nowl = parseInt(getStyle(obj,"right"));
		if(nowl == -85){
			clearInterval(obj.timer);
		}else{
			obj.style.right = nowl -1 + "px";
		}
	})
}


// JavaScript Document
window.onload=function(){
	var oBtn_1=document.getElementById('li4');
	var oContent_1=document.getElementById('content');
	oBtn_1.onmouseover=function(){
		oContent_1.style.display='block';
	};
	oBtn_1.onmouseout=function(){
		oContent_1.style.display='none';
	};
	/*屏幕右下方固定定位按钮*/
	var oBtn_2=document.getElementById('square');
	var oContent_2=document.getElementById('fixed_border');
	oBtn_2.onmouseover=function(){
		oContent_2.style.display='block';
	};
	oBtn_2.onmouseout=function(){
		oContent_2.style.display='none';
	};
};


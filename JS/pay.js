
	//添加商品部分：
	var wechat=document.getElementById('wechat');
	var alipay=document.getElementById('alipay');
	var header=document.getElementById('header');
	var image=document.getElementById('image');
	var add=document.getElementById('add');
	var addPro=document.getElementById('addPro');
	var close=document.getElementById('close');
	var cancel=document.getElementById('cancel');
	wechat.onclick=function(){
		add.style.visibility= 'visible';
		addPro.style.visibility='visible';
		header.innerText="微信支付";
		image.src='images/wepay.png'
	}
	alipay.onclick=function(){
		add.style.visibility= 'visible';
		addPro.style.visibility='visible';
		header.innerText="支付宝支付";
		image.src='images/alipay.jpg'

	}
	close.onclick=hide;
	cancel.onclick=hide;
	function hide(){
		add.style.visibility= 'hidden';
		addPro.style.visibility='hidden';
	}
	//添加后保存：
	var save=document.getElementById('save');
	save.onclick=function(){
		//
		}

//导航栏部分js：
var headline=document.getElementById("main-top");
var nav=document.getElementById("adNav");
var navArr=nav.children;

var conArr=document.getElementsByClassName("main-con");
for ( i = 0; i < navArr.length; i++) {
	navArr[i].index=i;
	navArr[i].onclick=function(){
		for (var j = 0; j < navArr.length; j++) {
			navArr[j].style.color="#000";
		}
		this.style.color="#FF9326";
		ind =this.index;
 		headline.innerHTML=navArr[ind].innerText;
 		for (var j = 0; j < conArr.length; j++) {
 			conArr[j].style.display="none";
 		}
 		conArr[ind].style.display="inline"
	}
}

//账户管理部分的js：


//商品管理部分的js：
var order=
	 [{
		"path": "images/show/huawei1.jpg",
		"desc": "荣耀9i 全网通 4GB+64GB（幻夜黑）",
		"price": "1399.00"
	},
	{
		"path": "images/show/huawei2.jpg",
		"desc": "荣耀Play 全网通 4GB+64GB（幻夜黑)",
		"price": "1999.00"
	},
	{
		"path": "images/show/huawei3.jpg",
		"desc": "华为畅享7S 3GB+32GB 全网通标配版（蓝色）",
		"price": "1499.00"
	},
	{
		"path": "images/show/huawei4.jpg",
		"desc": "HUAWEI nova 3GB+32GB 移动全网通定制版（皓月银）",
		"price": "1899.00"
	}];
	var str=[];
  		for (var i = 0; i <order.length; i++) {
		str[i]="";

		var list=document.getElementById("admProducts");
		// var newDiv=document.createElement("div");
		
	
		str[i]+="<tr><td><img src='"+order[i].path+"'></td>";
		str[i]+="<td><input type='text'value='"+order[i].desc+"'style='width:300px'></td>";
		str[i]+="<td>￥<input type='text'value='"+order[i].price+"'style='width:80px'></td>";
		str[i]+="<td><input type='text'value='"+1+"' style='width:50px'></td>";
		str[i]+="<td><input type='text'value='"+"在售"+"'style='width:60px'></td>";
		str[i]+="<td style='cursor: pointer;color:#FF5C26' onclick=edit(this)>修改</td></tr>";
		// newDiv.innerHTML=str[i];
		// list.appendChild(str[i]);
		list.innerHTML+=str[i];
		}


		function edit(aaa){
				
			if(confirm("确定修改吗？")){
				tdArr=aaa.parentNode.children;
				alert(tdArr[1].children[0].value);
				// ajax_tool('url','proDesc="tdArr[1].children[0].value"&proPrice="tdArr[2].children[0].value"&proNum="tdArr[3].children[0].value"&proState="tdArr[4].children[0].value"','post',function(){
				// 	alert("修改成功！");
				// });
			}
		}


	//添加商品部分：
	var addProduct=document.getElementById('addProduct');
	var add=document.getElementById('add');
	var addPro=document.getElementById('addPro');
	var close=document.getElementById('close');
	var cancel=document.getElementById('cancel');
	addProduct.onclick=show;
	close.onclick=hide;
	cancel.onclick=hide;

	function show(){
		add.style.visibility= 'visible';
		addPro.style.visibility='visible';
	}
	function hide(){
		add.style.visibility= 'hidden';
		addPro.style.visibility='hidden';
	}
	//添加后保存：
	var save=document.getElementById('save');
	save.onclick=function(){
		if(confirm("确认保存？")){
			document.getElementById('proForm').submit();
			alert('添加成功！');
		}
	}


//订单管理部分的js：
	var p=
	[{
		'Order':[{
				"orderNum":"14725836910",
				"user":"shuyan",
				"userPhone":"16620449686",
				"address":"海珠区东沙街24号"
			},
			{
				"orderNum":"36985214785",
				"user":"zhouzhou",
				"userPhone":"15626161645",
				"address":"仲恺农业工程学院",
			}]
		},
	{ 'Orderitem':[{
				"path": "images/show/huawei1.jpg",
				"desc": "荣耀9i 全网通 4GB+64GB（幻夜黑）",
				"price": "1399.00",
				"num":"100"
			},
			{
				"path": "images/show/huawei2.jpg",
				"desc": "荣耀Play 全网通 4GB+64GB（幻夜黑)",
				"price": "1999.00",
				"num":"99"
			}]
	},
	{
		'Orderitem':[{
				"path": "images/show/huawei6.jpg",
				"desc": "HUAWEI nova 3e 4GB+128GB 全网通版（克莱因蓝）",
				"price": "¥2199.00",
				"num":"955"
			},
			{
				"path": "images/show/huawei5.jpg",
				"desc": "H华为畅享8 3GB+32GB 全网通标配版（粉色)",
				"price": "¥1299.00",
				"num":"899"
			}]
	}]

var box=document.getElementById('box');
var stri=[];
for (var i = 0; i < p[0].Order.length; i++) {
	console.log(p[0].Order[i]);
	stri[i]="";
	stri[i]+='<div class="admOrder">'
	stri[i]+='<div class="orderMessage">'
	stri[i]+='订单编号：<span>'+p[0].Order[i].orderNum+'</span>'
	stri[i]+='联系人：<span>'+p[0].Order[i].user+'</span>'
	stri[i]+='联系电话：<span>'+p[0].Order[i].userPhone+'</span><br><br>'
	stri[i]+='发货地址：<span>'+p[0].Order[i].address+'</span>'
	stri[i]+='</div>'
	stri[i]+='<div class="order"><table cellspacing="0"><tr style="font-weight: 700"><td>商品名称</td><td>商品价格</td><td>购买数量</td></tr>';

	

	var strin=[];
	for (var j = 0; j < p[i+1].Orderitem.length; j++) {
		console.log(p[i+1].Orderitem[j]);
		strin[j]="";
		strin[j]+='<tr><td>'+p[i+1].Orderitem[j].desc+'</td>';
		strin[j]+='<td>'+p[i+1].Orderitem[j].price+'</td>';
		strin[j]+='<td>'+p[i+1].Orderitem[j].num+'</td></tr>';
		stri[i]+=strin[j];
	}
	stri[i]+='</table><div class="ta"><span class="fl">合计</span><span class="fr">￥1499.00</span></div><div class="ta"><span class="goSend fr">去发货</span></div></div></div>'
	box.innerHTML+=stri[i]
}




































//封装ajax方法：
function ajax_tool(url,data,method,success) {
	// 异步对象
	var ajax = new XMLHttpRequest();

	// get 跟post  需要分别写不同的代码
	if (method=='get') {
		// get请求
		if (data) {
			// 如果有值
			url+='?';
			url+=data;
		}else{

		}
		// 设置 方法 以及 url
		ajax.open(method,url);

		// send即可
		ajax.send();
	}else{
		// post请求
		// post请求 url 是不需要改变
		ajax.open(method,url);

		// 需要设置请求报文
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		// 判断data send发送数据
		if (data) {
			// 如果有值 从send发送
			ajax.send(data);
		}else{
			// 木有值 直接发送即可
			ajax.send();
		}
	}

	// 注册事件
	ajax.onreadystatechange = function () {
		// 在事件中 获取数据 并修改界面显示
		if (ajax.readyState==4&&ajax.status==200) {
			// console.log(ajax.responseText);

			// 将 数据 让 外面可以使用
			// return ajax.responseText;

			// 当 onreadystatechange 调用时 说明 数据回来了
			// ajax.responseText;

			// 如果说 外面可以传入一个 function 作为参数 success
			success(ajax.responseText);
		}
	}

}
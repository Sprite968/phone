window.onload=function(){

	// var zonghe =document.getElementById("zonghe");
	// var up=document.getElementById('up');
	// var down=document.getElementById('down');
	var sort=document.getElementById('sort');

	// zonghe.onclick=function(){
	// 	ajax_tool("url","data","post",function(data){
	// 		product=JSON.parse(data);
			
	// 	})
	// }
	for (var i = 0; i < sort.children.length; i++) {
			sort.children[i].index=i
		sort.children[i].onclick=function(){
			ajax_tool("url","data=this.index","post",function(data){
	 		product=JSON.parse(data);
			
		})
	}
}





var huawei=
	 [{
		"path": "images/show/huawei1.jpg",
		"desc": "荣耀9i 全网通 4GB+64GB（幻夜黑）",
		"price": "¥1399.00"
	},
	{
		"path": "images/show/huawei2.jpg",
		"desc": "荣耀Play 全网通 4GB+64GB（幻夜黑)",
		"price": "¥1999.00"
	},
	{
		"path": "images/show/huawei3.jpg",
		"desc": "华为畅享7S 3GB+32GB 全网通标配版（蓝色）",
		"price": "¥1499.00"
	},
	{
		"path": "images/show/huawei4.jpg",
		"desc": "HUAWEI nova 3GB+32GB 移动全网通定制版（皓月银）",
		"price": "¥1899.00"
	},
	{
		"path": "images/show/huawei5.jpg",
		"desc": "H华为畅享8 3GB+32GB 全网通标配版（粉色)",
		"price": "¥1299.00"
	},
	{
		"path": "images/show/huawei6.jpg",
		"desc": "HUAWEI nova 3e 4GB+128GB 全网通版（克莱因蓝）",
		"price": "¥2199.00"
	}];


// var huaweii=JSON.parse(huawei);
console.log(huawei.length);

console.log(huawei);

var str=[];
for (var i = 0; i < huawei.length; i++) {
	str[i]="";

	 show=document.getElementById("show");
	// var newDiv=document.createElement("div");
	// show.appendChild(newDiv);
	
	str[i]+="<div><img src='"+huawei[i].path+"'>";
	str[i]+="<p>"+huawei[i].desc+"</p>";
	str[i]+="<span>"+huawei[i].price+"</span></div>";
	// newDiv.innerHTML=str[i];
	show.innerHTML+=str[i]
	}




for (var i = 0; i < show.children.length; i++) {
	show.children[i].index=i;
	show.children[i].onclick=function(){
		
		alert(huawei[this.index].desc);

		// ajax_tool("url","productName=huawei[this.index].desc",post)
	}
}

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
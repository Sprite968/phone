
var headline=document.getElementById("show-top");
var nav=document.getElementById("nav");
var navArr=nav.children;

var conArr=document.getElementsByClassName("show-con");
for ( i = 0; i < navArr.length; i++) {
	navArr[i].index=i;
	navArr[i].onclick=function(){
		ind =this.index;
 		headline.innerHTML=navArr[ind].innerText;
 		for (var j = 0; j < conArr.length; j++) {
 			conArr[j].style.display="none";
 		}
 		conArr[ind].style.display="inline"
	}
}
//修改信息：
function edit(aaa){
				
			if(confirm("确定修改吗？")){
				document.getElementById('perForm').submit();
				// ajax_tool('url','proDesc="tdArr[1].children[0].value"&proPrice="tdArr[2].children[0].value"&proNum="tdArr[3].children[0].value"&proState="tdArr[4].children[0].value"','post',function(){
				// 	alert("修改成功！");
				// });
			}
		}



//订单管理部分开始：
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

var box=document.getElementById('order');
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
	stri[i]+='<div class="order"><table cellspacing="0"><tr style="font-weight: 700"><td style="width: 600px">商品名称</td><td style="width: 150px">商品价格</td><td style="width: 150px">购买数量</td></tr>';

	

	var strin=[];
	for (var j = 0; j < p[i+1].Orderitem.length; j++) {
		console.log(p[i+1].Orderitem[j]);
		strin[j]="";
		strin[j]+='<tr><td>'+p[i+1].Orderitem[j].desc+'</td>';
		strin[j]+='<td>'+p[i+1].Orderitem[j].price+'</td>';
		strin[j]+='<td>'+p[i+1].Orderitem[j].num+'</td></tr>';
		stri[i]+=strin[j];
	}
	stri[i]+='</table><div class="ta"><span class="fl">合计</span><span class="fr">￥1499.00</span></div><div class="ta"><span class="goSend fr">去支付</span></div></div></div>'
	box.innerHTML+=stri[i]
}
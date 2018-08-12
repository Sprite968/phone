order= [{
		"path": "images/show/huawei1.jpg",
		"desc": "荣耀9i 全网通 4GB+64GB（幻夜黑）",
		"price": "1399.00",
		"num":"100"
	},
	{
		"path": "images/show/huawei2.jpg",
		"desc": "荣耀Play 全网通 4GB+64GB（幻夜黑)",
		"price": "1999.00",
		"num":"600"
	}]
	var str=[];
  		for (var i = 0; i <order.length; i++) {
		str[i]="";

		var table=document.getElementById("orderTable");
		// var newDiv=document.createElement("div");
		
	
		str[i]+="<tr><td>"+order[i].desc+"</td>";
		str[i]+="<td>￥"+order[i].price+"</td>";
		str[i]+="<td>"+order[i].num+"</td></tr>";
		// newDiv.innerHTML=str[i];
		// list.appendChild(str[i]);
		table.innerHTML+=str[i];
		}
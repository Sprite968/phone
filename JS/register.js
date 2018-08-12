window.onload=function(){
	 inpArr =document.getElementsByTagName("input");
 flag1=0;
 flag2=0;
 flag3=0;
 flag4=0;
	inpArr[0].onblur=function(){
		var div =this.nextElementSibling;
		if (this.value=="") {
			this.style.border="1px solid red";
			div.innerHTML="用户名不能为空";
			// div.style.color="red";
			flag1=0;
		}
		else if (this.value.length<3 || this.value.length>6) {
			this.style.border="1px solid red";
			div.innerHTML="请输入3到6位的用户名";
			flag1=0;
		}
		else{
			this.style.border="1px solid #CACAD9";
			div.innerHTML="<img src='images/register/right.jpg'>";
			flag1=1;
		}
	}


	inpArr[1].onblur=function(){
		var div =this.nextElementSibling;
		if (this.value=="") {
			this.style.border="1px solid red";
			div.innerHTML="密码不能为空";
			flag2=0;
		}
		else if (this.value.length<6 || this.value.length>12) {
			this.style.border="1px solid red";
			div.innerHTML="请输入6到12位的密码";
			flag2=0;
		}
		else{
			this.style.border="1px solid #CACAD9";
			div.innerHTML="<img src='images/register/right.jpg'>";
			flag2=1;
		}
	}
	inpArr[2].onblur=function(){
		var div =this.nextElementSibling;
		if (this.value=="") {
			this.style.border="1px solid red";
			div.innerHTML="确认密码不能为空";
			flag3=0;
		}
		else if (this.value != inpArr[1].value) {
			this.style.border="1px solid red";
			div.innerHTML="密码不一致";
			flag3=0;
		}
		else{
			this.style.border="1px solid #CACAD9";
			div.innerHTML="<img src='images/register/right.jpg'>";
			flag3=1;
		}
	}

}	
function check(){
		if (inpArr[3].checked) {
		flag4=1;
	}else{
		flag4=0;
	}
		if (flag1==1&&flag2==1&&flag3==1&&flag4==1) {
			alert(1);
		}else{
			alert("请正确输入信息！")
		}
	}
	console.log(check);

	 



// 	function check(ele){
// 		var div =ele.nextElementSibling;
// 			if(ele.value==""){
// 			// var newspan=document.createElement("span");
// 			// div.appendChild(newspan);
// 			div.innerHTML="内容不能为空"
// 			div.style.color="red";

// 			}else{
// 			div.innerHTML="<img src='images/register/right.jpg'>"	
// 			}
// 		}
		
// check(inpArr[0]);

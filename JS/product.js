var bigbox=document.getElementById('bigbox');
var ul=document.getElementById('smallbox');
var smallbox=ul.children;
for (var i = 0; i < smallbox.length; i++) {
	
	smallbox[i].onmouseover=function(){
		
		bigbox.src=this.children[0].src;
		for (var j = 0; j < smallbox.length; j++) {
			smallbox[j].style.border="1px solid #DBDBEA";
		}
		this.style.border="1px solid #D90000";
	}
}


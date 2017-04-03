rwb.prototype.grow = function() {
	var selector = document.querySelector(query);
	var max = 200;
	function cWidth() {
		var x;
		for (var i=1;i<=y;i++){
			if(i>max){
				break;
			}
			x=i;
			return x;
		}
	}
}
function cHeight() {
	var x;
	for (var i=1;i<=y;i++) {
		if(i>max){
			break;
		}
		x=i;
		return x;
	}
}

selector.style.width = cWidth();
selector.style.height = cHeight(); 
};
rwb.prototype.shrink = function() {
	var selector = document.querySelector(query);
	var min = 200;
	function cWidth() {
		var x;
		var y=1;
		for (var i=selector.style.width;i<=y;i--){
			if(i>min){
				break;
			}
			x=i;
			return x;
		}
	}
}
function cHeight() {
	var x;
	for (var i=selector.style.width;i<=y;i--) {
		if(i>min){
			break;
		}
		x=i;
		return x;
	}
}

selector.style.width = cWidth();
selector.style.height = cHeight(); 
};
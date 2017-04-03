(function(root, factory) {
	/* ======= Global RWB ======= */
	(typeof module === "object" && module.exports) ? module.exports = factory() : root.RWB = factory();
}(this, function() {
	//=require index.js
	return RWB;
}));
(function(){
	// just run any passed function. no scope trickery involved, this is intended for annonymus wrappers rather than your actual code
	function _run(func){
		if(typeof func==='function') {
			func();
		}
	}
	// run any existing functions in the q array
	var i = 0, l = q.length;
	for(; i < l; i++) {
		_run(q[i]);
	}
	// replace its native push method with our run utility
	q.push = _run;
})();
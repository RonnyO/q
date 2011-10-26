// and in the async q.js file
(function(){

window.q = q || [];
var q = q;
var oldPush = q.push;

var emptyQ = function(){
  for (var i = 0, l = q.length; i < l; i++){
    var el = q[i];
    var func = window[ el[0] ];
    if (typeof func === 'function') {
        func.apply(func, el.slice(1));
    }
  }
};
var run = function(){};

q.push = function(/* string */ method /* , optional args /*){

};

emptyQ();

})()
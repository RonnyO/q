# q.js - queue your callbacks
No matter how you attach your event handlers, you're probably missing something.

Normally, you have two choices:
1. Unobtrosive attachment of events means firing them before the attaching code loads will do nothing
1. Plain old obtrusive `onwhatever="something()"` results in errors if fired too soon.		
		__q.js__ solves this with a plain queue for those deffered actions.
		This is how you add things to q:

```
<button onclick="q.push( function(){ alert('hi there'); } )">Hello</button>
<button onclick="q.push( function(){ myApp.init('first argument.', 'second.'); } )">Some app action</button>
```html

q 'remembers' the desired actions and runs them ASAP
This is done using a quick one-liner in the `<head>` which declares a global array named q: `<script>q = [];</script>`

After your app is done loading, just load or embed q.min.js and it will take care of the rest. As simple as:
`/* q.min.js */ (function(){function b(a){"function"===typeof a&&a()}for(var a=0,c=q.length;a&lt;c;a++)b(q[a]);q.push=b})();`
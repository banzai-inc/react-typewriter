!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.TypeWriter=t(require("react")):e.TypeWriter=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o);t["default"]=i["default"],e.exports=t["default"]},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),p=r(l),f=n(3),c=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={visibleChars:0},n._handleTimeout=n._handleTimeout.bind(n),n}return s(t,e),u(t,[{key:"componentDidMount",value:function(){this._timeoutId=setTimeout(this._handleTimeout,this.props.initDelay)}},{key:"componentWillUnmount",value:function(){clearInterval(this._timeoutId)}},{key:"componentWillReceiveProps",value:function(e){var t=e.typing,n=this.props.typing;n>0&&t<0?this.setState({visibleChars:this.state.visibleChars-1}):n<=0&&t>0&&this.setState({visibleChars:this.state.visibleChars+1})}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.props.children,r=e.children,o="string"==typeof n&&"string"==typeof r,i=o&&n!==r,a=this.state.visibleChars!==t.visibleChars;return a||i}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.maxDelay,o=n.minDelay,i=n.delayMap,a=n.onTypingEnd,s=n.onTyped,u=(0,f.componentTokenAt)(this,t.visibleChars),l=(0,f.componentTokenAt)(this,this.state.visibleChars);if(u&&s&&s(u,t.visibleChars),l){var p="string"==typeof u,c=Math.round(Math.random()*(r-o)+o);if(i)for(var d=0;d<i.length;d++){var y=i[d];if(y.at===t.visibleChars||p&&u.match(y.at)){c+=y.delay;break}}this._timeoutId=setTimeout(this._handleTimeout,c)}else a&&a()}},{key:"reset",value:function(){this.setState({visibleChars:0})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.fixed,r=o(e,["children","fixed"]),i=this.state.visibleChars,a=p["default"].createElement("span",r,t),s=n?{visibility:"hidden"}:{display:"none"};return(0,f.styleComponentSubstring)(a,s,i)}},{key:"_handleTimeout",value:function(){var e=this.props.typing,t=this.state.visibleChars;this.setState({visibleChars:t+e})}}]),t}(p["default"].Component);c.propTypes={fixed:p["default"].PropTypes.bool,delayMap:p["default"].PropTypes.arrayOf(p["default"].PropTypes.shape({at:p["default"].PropTypes.oneOfType([p["default"].PropTypes.string,p["default"].PropTypes.number,p["default"].PropTypes.instanceOf(RegExp)]),delay:p["default"].PropTypes.number})),typing:function(e,t){var n=e[t];if(Number(n)!==n||n%1!==0||n<-1||n>1)return new Error("typing property must be an integer between 1 and -1")},maxDelay:p["default"].PropTypes.number,minDelay:p["default"].PropTypes.number,onTypingEnd:p["default"].PropTypes.func,onTyped:p["default"].PropTypes.func},c.defaultProps={typing:0,initDelay:1e3,maxDelay:100,minDelay:20},t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.componentTokenAt=t.styleComponentSubstring=void 0;var o=n(1),i=r(o),a=n(4),s=r(a);t.styleComponentSubstring=function(){function e(e){var u=e.props,l=u.children,p=u.stamp,f=u.style,c=void 0;return p?(a>=n&&(!r||a<r)&&(c={style:(0,s["default"])(f||{},o)}),a++):c={children:i["default"].Children.map(l,t)},c?i["default"].cloneElement(e,c):e}function t(t){if("string"!=typeof t)return e(t);var s=t.length+a;if(s>n&&(!r||a<r)){var u=n-a,l=r?r-a:s,p=t.substring(0,u),f=t.substring(u,l),c=t.substring(l,s),d=i["default"].createElement("span",{style:o},f);t=[p,d,c]}return a=s,t}var n=void 0,r=void 0,o=void 0,a=void 0;return function(t,i,s,u){return o=i||{},s>u?(r=s,n=u):(n=s||0,r=u),a=0,e(t)}}(),t.componentTokenAt=function(){function e(n){var r=n.props.children,o=i["default"].Children.count(r),a=void 0;o<=1&&(r=[r]);for(var s=0;!a&&s<o;){var u=r[s++];"string"!=typeof u?u.props&&u.props.stamp?t?t--:a=u:a=e(u):t-u.length<0?a=u.charAt(t):t-=u.length}return a}var t=void 0;return function(n,r){if(!(r<0))return t=r,e(n)}}()},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,a,s=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)o.call(r,l)&&(s[l]=r[l]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(r);for(var p=0;p<a.length;p++)i.call(r,a[p])&&(s[a[p]]=r[a[p]])}}return s}}])});
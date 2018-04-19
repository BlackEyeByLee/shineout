webpackJsonp([4],{1186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=n(119),i=n(118),u=n(78),l=n(982),c=n.n(l),s=n(983),p=n.n(s),f=Object(u.a)(c.a,p.a),d=[{title:Object(u.a)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base"),component:n(984).default,rawText:n(985)},{title:Object(u.a)("大小 \n 提供了三种尺寸的输入框","Size"),component:n(986).default,rawText:n(987)},{title:Object(u.a)("数字 \n type=number 时，会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","number type"),component:n(988).default,rawText:n(989)},{title:Object(u.a)("组合 Input.Group \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group"),component:n(990).default,rawText:n(991)},{title:Object(u.a)("禁用","Disabled"),component:n(992).default,rawText:n(993)},{title:Object(u.a)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","tip"),component:n(994).default,rawText:n(995)},{title:Object(u.a)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","validate"),component:n(996).default,rawText:n(997)}];t.default=Object(a.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:d}))})},505:function(e,t,n){"use strict";var r=n(506),o=n(520),a=n(1),i=n.n(a),u=(n(4),n(526)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),l(t,[{key:"invalidNumber",value:function(e){var t=this.props,n=t.digits;if("number"!==t.type)return!1;var r="^-?\\d*";return void 0===n?r+="\\.?\\d*":n>0&&(r+="\\.?\\d{0,"+n+"}"),r+="$",!(r=new RegExp(r)).test(e)}},{key:"handleChange",value:function(e){var t=e.target.value;this.invalidNumber(t)||this.props.onChange(t)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.value,r=(e.defaultValue,e.digits,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type","value","defaultValue","digits"]));return i.a.createElement("input",Object.assign({},Object(u.a)(r),{type:"password"===t?t:"text",value:n,onChange:this.handleChange}))}}]),t}();c.defaultProps={type:"text",value:""};var s=c,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["PureComponent"]),p(t,[{key:"handleChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["onChange"]));return i.a.createElement(s,Object.assign({},t,{onChange:this.handleChange}))}}]),t}(),d=n(527);var h=function(e){var t=e.children,n=(e.style,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","style"]));return a.Children.toArray(t).map(function(e,t){return"string"==typeof e?i.a.createElement("span",{key:t},e):Object(a.cloneElement)(e,n)})},m=function(e){return Object(r.a)(Object(d.a)({}),Object(o.a)({delay:400,imeEvent:!0}))(e)},y=m(s);y.Group=Object(d.a)({tag:"div",isGroup:!0})(h),y.Number=m(f);t.a=y},506:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}},t.b=function e(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(r.length>=t.length)return t.apply(void 0,r);return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e.apply(void 0,[t.bind.apply(t,[t].concat(r))].concat(o))}}},510:function(e,t,n){"use strict";t.a=function(e){return null===e||void 0===e||e!=e||(void 0!==e.length?0===e.length:!(e instanceof Date)&&"object"===(void 0===e?"undefined":r(e))&&0===Object.keys(e).length)};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},511:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(1)),o=a(n(529));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},514:function(e,t,n){"use strict";t.a=function(e){return e&&e[0].toUpperCase()+e.slice(1)},t.b=function(e,t){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,n){return"\\"===e.charAt(0)?e.slice(1):null===t[n]||void 0===t[n]?"":t[n]});if("function"==typeof e){var n=e(t);return n===t&&"object"===(void 0===n?"undefined":r(n))&&(n=Object.assign({},t)),n}return""};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},520:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(4),i=(n.n(a),n(506)),u=n(117),l=n(523),c=n(522),s=n(524),p=n(525),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var d=Object(i.a)(Object(c.b)(["formDatum","disabled","onError"]),s.a,p.a);t.a=Object(i.b)(function(e,t){var n,a,i=e.delay,c=void 0===i?0:i;return d((a=n=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)),r=e.formDatum,o=e.loopContext,a=e.name,i=e.defaultValue;return t.state={error:void 0,value:e.value||i},t.itemName=Object(u.b)(),t.handleChange=t.handleChange.bind(t),t.handleUpdate=t.handleUpdate.bind(t),t.handleDatumBind=t.handleDatumBind.bind(t),t.validate=t.validate.bind(t),r&&a&&(r.bind(a,t.handleUpdate,i,t.validate),t.state.value=r.get(a)),o&&o.bind(t.validate),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["PureComponent"]),f(n,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.formDatum,n=e.name,r=e.loopContext;t&&n&&t.unbind(n,this.handleUpdate),r&&r.unbind(this.validate)}},{key:"getValue",value:function(){if(this.changeLocked)return this.state.value;var e=this.props,t=e.formDatum,n=e.name,r=e.value;return t&&n?t.get(n):void 0===r?this.state.value:r}},{key:"handleDatumBind",value:function(e){this.datum=e}},{key:"validate",value:function(e,t){var n=this,r=this.props,o=r.onError,a=r.name,i=r.formDatum,u=r.type;void 0===e&&(e=this.getValue());var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.props.rules));return i&&a&&(c=c.concat(i.getRule(a)),t||(t=i.getValue())),this.datum&&(e=this.datum),Object(l.a)(e,t,c,u).then(function(){return o(n.itemName,null),n.setState({error:void 0}),!0},function(e){return o(n.itemName,e),n.setState({error:e}),e})}},{key:"change",value:function(e){var t,n=this.props,r=n.formDatum,o=n.name;r&&o?r.set(o,e):this.validate(e);for(var a=arguments.length,i=Array(a>1?a-1:0),u=1;u<a;u++)i[u-1]=arguments[u];this.props.onChange&&(t=this.props).onChange.apply(t,[e].concat(i))}},{key:"handleUpdate",value:function(e){this.setState({value:e}),this.validate(e)}},{key:"handleChange",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];0!==this.props.delay?(this.setState({value:e}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){t.changeLocked=!1,t.change.apply(t,[e].concat(r))},this.props.delay)):this.change.apply(this,[e].concat(r))}},{key:"render",value:function(){var e=this.props,n=(e.formDatum,e.value,e.required,e.loopContext,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["formDatum","value","required","loopContext"]));return console.log("render input",this.props.name,this.getValue()),o.a.createElement(t,Object.assign({},n,{error:this.state.error,value:this.getValue(),onChange:this.handleChange,onDatumBind:this.handleDatumBind}))}}]),n}(),n.defaultProps={delay:c,onError:function(){},rules:[]},a))})},522:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return h});var r=n(1),o=n.n(r),a=n(4),i=(n.n(a),n(511)),u=n.n(i),l=n(506),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=u()(),p=s.Provider,f=s.Consumer,d=function(e){return function(t){var n=t.datum,r=t.labelWidth,a={formDatum:n,disabled:t.disabled,labelWidth:r};return o.a.createElement(p,{value:a},o.a.createElement(e,t))}},h=Object(l.b)(function(e,t){return function(n){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r["PureComponent"]),c(a,[{key:"render",value:function(){var n=this;return o.a.createElement(f,null,function(r){return o.a.createElement(t,Object.assign({},n.props,(i={},(a=r)?e?(e.forEach(function(e){var t=a[e];void 0!==t&&(i[e]=t)}),i):a:i)));var a,i})}}]),a}()})},523:function(e,t,n){"use strict";var r=n(514),o=n(510),a=function(e){return function(t,n,r){Object(o.a)(t)?r(!0):e(t,n,r)}},i=function(e){return a(function(t,n,r){var o=e.min,a=e.max,i=e.message,u=parseFloat(t);r(!("number"==typeof o&&u<o||"number"==typeof a&&u>a)||new Error(i))})},u=function(e){return function(t,n,r){var a=e.min,i=e.max,u=e.message,l=new Error(u);if(Object(o.a)(t))r(!a||l);else{var c=t.length;r(!("number"==typeof a&&c<a||"number"==typeof i&&c>i)||l)}}},l=function(e){return function(t,n,r){var o=e.message;void 0===t||null===t||0===t.length?r(new Error(o)):r(!0)}},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={email:/^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,integer:/^[-+]?[0-9]*$/,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,tel:/^[\d\s ().-]+$/,hex:/^#[0-9a-f]{6}?$/i,rgb:new RegExp("^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*\\)$"),rgba:new RegExp("^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*((0.[1-9]*)|[01])\\s*\\)$"),hsv:new RegExp("^hsv\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$"),url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")},p=function(e,t){return a(function(n,r,o){var a=new Error(t);if("json"!==e){var i=s[e];i||(console.error("Type '"+e+"' not existed."),o(new Error("Validate failured. Type '"+e+"' not existed."))),i.test(n)?o(!0):o(a)}else!function(e){if("object"===(void 0===e?"undefined":c(e)))return!0;if(!/^[\],:{}\s]*$/.test(e.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return!1;try{return JSON.parse(e),!0}catch(e){return!1}}(n)?o(a):o(!0)})},f=function(e,t){return a(function(n,r,o){var a=t.message;("string"==typeof e?new RegExp(e):e).test(n)?o(!0):o(new Error(a))})};function d(e,t){if("function"==typeof e)return e;var n=e.type,o=void 0===n?t:n,a=e.message,c=e.regExp,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type","message","regExp"]);if(s.message=Object(r.b)(a,s),s.required)return l(s);if(c)return f(c,s);if(void 0!==s.min||void 0!==s.max)return"number"===o||"integer"===o?i(s):u(s);if(o)return p(o,s.message);var d=new Error("Rule "+JSON.stringify(e)+" is not valid.");throw console.error(d),d}t.a=function e(t,n,r,o){return new Promise(function(a,i){var u=r.shift();u?d(u,o)(t,n,function(u){!0===u?e(t,n,r,o).then(a,i):i(u)}):a(!0)})}},524:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return y});var r=n(1),o=n.n(r),a=n(171),i=n(511),u=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=u()(),d=f.Provider,h=f.Consumer,m=function(e){return function(t){function n(e){c(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={errors:{}},t.handleError=t.handleError.bind(t),t}return p(n,r["PureComponent"]),l(n,[{key:"handleError",value:function(e,t){this.setState(Object(a.a)(function(n){t?n.errors[e]=t:delete n.errors[e]}))}},{key:"render",value:function(){return o.a.createElement(d,{value:this.handleError},o.a.createElement(e,Object.assign({},this.props,{formItemErrors:this.state.errors})))}}]),n}()},y=function(e){return function(t){function n(){return c(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r["PureComponent"]),l(n,[{key:"createErrorHandle",value:function(e){var t=this.props.onError;return function(n,r){e&&e(n,r),t&&t(n,r)}}},{key:"render",value:function(){var t=this;return o.a.createElement(h,null,function(n){return o.a.createElement(e,Object.assign({},t.props,{onError:t.createErrorHandle(n)}))})}}]),n}()}},525:function(e,t,n){"use strict";n.d(t,"b",function(){return h}),n.d(t,"a",function(){return m});var r=n(1),o=n.n(r),a=n(511),i=n.n(a),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=i()(),f=p.Provider,d=p.Consumer,h=function(e){return function(t){function n(e){l(this,n);var t=c(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.validations=[],t.contextValue={bind:t.bind.bind(t),unbind:t.unbind.bind(t)},t.validate=t.validate.bind(t),t}return s(n,r["PureComponent"]),u(n,[{key:"bind",value:function(e){this.validations.indexOf(e)<0&&this.validations.push(e)}},{key:"unbind",value:function(e){this.validations=this.validations.filter(function(t){return t!==e})}},{key:"validate",value:function(){return Promise.all(this.validations.map(function(e){return e()}))}},{key:"render",value:function(){return o.a.createElement(f,{value:this.contextValue},o.a.createElement(e,Object.assign({},this.props,{validate:this.validate})))}}]),n}()},m=function(e){return function(t){function n(){return l(this,n),c(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,r["PureComponent"]),u(n,[{key:"render",value:function(){var t=this;return o.a.createElement(d,null,function(n){return o.a.createElement(e,Object.assign({},t.props,{loopContext:n}))})}}]),n}()}},526:function(e,t,n){"use strict";var r=n(171),o=["onDatumBind"];t.a=function(e){return Object(r.a)(e,function(e){o.forEach(function(t){return delete e[t]})})}},527:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(4),i=(n.n(a),n(49)),u=n.n(i),l=n(171),c=n(506),s=n(56),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=Object(c.b)(function(e,t){var n,a;return a=n=function(n){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={focus:e.autoFocus,errors:{}},t.handleBlur=t.handleBlur.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleError=t.handleError.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r["Component"]),p(a,[{key:"handleBlur",value:function(){this.setState({focus:!1});var e=this.props.onBlur;e&&e()}},{key:"handleFocus",value:function(){this.setState({focus:!0});var e=this.props.onFocus;e&&e()}},{key:"handleError",value:function(e,t){this.state.errors[e]!==t&&(this.setState(Object(l.a)(function(n){t?n.errors[e]=t:delete n.errors[e]})),this.props.onError&&this.props.onError(e,t))}},{key:"renderHelp",value:function(e){var t,n,r=this.state.errors,a=this.props,i=a.tip,u=a.popover,l=["tip",u||"bottom-left"],c=(t=r,0!==(n=Object.keys(t)).length&&t[n[0]]);return c&&u?(l.push("error"),o.a.createElement("div",{className:s.i.apply(void 0,l)},c.message)):i&&e?o.a.createElement("div",{className:Object(s.i)([].concat(l))},i):null}},{key:"render",value:function(){var n=this.props,r=(n.className,n.border),a=n.style,i=n.size,l=(n.tip,n.popover,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["className","border","style","size","tip","popover"])),c=this.state,p=c.errors,f=c.focus,d=e.tag||"label",h=u()(Object(s.i)("_",f&&"focus",l.disabled&&"disabled",e.isGroup&&"group",i,a.width&&"inline",!r&&"no-border",e.noPadding&&"no-padding",e.overflow&&"overflow-"+e.overflow,Object.keys(p).length>0&&"invalid"),Object(s.c)(e.isGroup&&"group"),e.className,this.props.className);return o.a.createElement(d,{className:h,style:a},o.a.createElement(t,Object.assign({},l,{size:i,onError:this.handleError,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(f))}}]),a}(),n.defaultProps={border:!0,style:{}},a})},528:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=(n(4),n(49)),i=n.n(a),u=n(48),l=n(56);function c(e){var t=e.children,n=e.prefix,r=e.type,a=e.name,u=e.fontFamily,c=e.fontSize,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","prefix","type","name","fontFamily","fontSize"]),p=i()(Object(l.h)("_",r),e.className,n+"-"+a),f=Object.assign({},{fontFamily:u,fontSize:c},e.style);return o.a.createElement("i",Object.assign({},s,{className:p,style:f}),t)}c.defaultProps=Object.assign({},u.a,{prefix:"icon",fontFamily:"iconfont",name:"",type:"default"});var s=c;t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iconfont",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"icon";if(e||console.warning('you may add a "url" to create a icon '),!Array.from(document.getElementsByTagName("link")).find(function(t){return t.getAttribute("href")===e})){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href",e),document.head.appendChild(r)}return function(e){return o.a.createElement(s,Object.assign({fontFamily:t,prefix:n},e))}}},529:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.__esModule=!0;var o=n(1),a=c(o),i=c(n(4)),u=c(n(530)),l=c(n(531));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":r(t))&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":r(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=1073741823;t.default=a.default.createContext||function(e,t){var n,r,a="__create-react-context-"+(0,u.default)()+"__",c=function(e){function n(){var t,r,o,a;s(this,n);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return t=r=p(this,e.call.apply(e,[this].concat(u))),r.emitter=(o=r.props.value,a=[],{on:function(e){a.push(e)},off:function(e){a=a.filter(function(t){return t!==e})},get:function(){return o},set:function(e,t){o=e,a.forEach(function(e){return e(o,t)})}}),p(r,t)}return f(n,e),n.prototype.getChildContext=function(){var e;return(e={})[a]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(i=r)?0!==a||1/a==1/i:a!=a&&i!=i)?o=0:(o="function"==typeof t?t(n,r):d,"production"!==Object({SO_PREFIX:"",CSS_MODULE:!1}).NODE_ENV&&(0,l.default)((o&d)===o,"calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",o),0!=(o|=0)&&this.emitter.set(e.value,o))}var a,i},n.prototype.render=function(){return this.props.children},n}(o.Component);c.childContextTypes=((n={})[a]=i.default.object.isRequired,n);var h=function(t){function n(){var e,r;s(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=p(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!=((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},p(r,e)}return f(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?d:t},n.prototype.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?d:e},n.prototype.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[a]?this.context[a].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return h.contextTypes=((r={})[a]=i.default.object,r),{Provider:c,Consumer:h}},e.exports=t.default},530:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(t,n(120))},531:function(e,t,n){"use strict";var r=n(532);if("production"!==Object({SO_PREFIX:"",CSS_MODULE:!1}).NODE_ENV){r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}}).apply(void 0,[t].concat(r))}}}e.exports=r},532:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},536:function(e,t,n){"use strict";var r=n(528);t.a=Object(r.a)("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},982:function(e,t){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| type | string | | 同原生 input 标签的 type |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},983:function(e,t){e.exports=""},984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o);t.default=function(){return a.a.createElement(r.a,{placeholder:"input something"})}},985:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input placeholder=\"input something\" />\n  )\n}\n"},986:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o),i={width:120,marginRight:12};t.default=function(){return a.a.createElement("div",null,a.a.createElement(r.a,{size:"small",style:i,placeholder:"small size"}),a.a.createElement(r.a,{style:i,placeholder:"default size"}),a.a.createElement(r.a,{size:"large",style:i,placeholder:"large size"}))}},987:function(e,t){e.exports='/**\n * cn - 大小 \\n 提供了三种尺寸的输入框\n * en - Size\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o),i={marginBottom:12};t.default=function(){return a.a.createElement("div",{style:{width:300}},a.a.createElement(r.a,{style:i,type:"number",placeholder:"digits undefined"}),a.a.createElement(r.a,{style:i,digits:0,type:"number",placeholder:"digits 0"}),a.a.createElement(r.a,{style:i,digits:1,type:"number",placeholder:"digits 1"}),a.a.createElement(r.a,{style:i,digits:2,type:"number",placeholder:"digits 2"}),a.a.createElement(r.a,{style:i,digits:3,type:"number",placeholder:"digits 3"}))}},989:function(e,t){e.exports='/**\n * cn - 数字 \\n type=number 时，会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - number type\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},990:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(169),a=n(1),i=n.n(a),u=n(536),l={width:300,marginBottom:12};t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a.Group,{style:l},i.a.createElement(u.a,{name:"user"}),i.a.createElement(r.a,{placeholder:"first name"}),"-",i.a.createElement(r.a,{placeholder:"last name"})),i.a.createElement(r.a.Group,{style:l},i.a.createElement(r.a,{placeholder:"search text"}),i.a.createElement(u.a,{name:"search"})),i.a.createElement(r.a.Group,{style:l},i.a.createElement(r.a,{style:{flex:1},placeholder:"flex 1"}),i.a.createElement(r.a,{style:{flex:3},placeholder:"flex 3"})),i.a.createElement(r.a.Group,{style:l},i.a.createElement(r.a,{placeholder:"search text"}),i.a.createElement(o.a,{type:"primary"},"Search")),i.a.createElement(r.a.Group,{size:"small",style:l},i.a.createElement("b",null,i.a.createElement(u.a,{name:"envelope"})),i.a.createElement(r.a,{placeholder:"email"}),i.a.createElement("b",null,".com")))}},991:function(e,t){e.exports='/**\n * cn - 组合 Input.Group \\n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b><FontAwesome name="envelope" /></b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o),i={width:300,marginBottom:12};t.default=function(){return a.a.createElement("div",null,a.a.createElement(r.a.Group,{disabled:!0,style:i},a.a.createElement(r.a,{placeholder:"first name"}),"-",a.a.createElement(r.a,{placeholder:"last name"})),a.a.createElement(r.a,{disabled:!0,style:i,placeholder:"disabled input"}))}},993:function(e,t){e.exports='/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o),i=n(536),u={marginBottom:12};t.default=function(){return a.a.createElement("div",{style:{width:300}},a.a.createElement(r.a,{style:u,placeholder:"email",tip:"enter you email.",popover:"top-left"}),a.a.createElement(r.a.Group,{style:u,tip:"enter you email."},a.a.createElement(i.a,{name:"envelope"}),a.a.createElement(r.a,{placeholder:"email"})),a.a.createElement(r.a.Group,{style:u},a.a.createElement(i.a,{name:"envelope"}),a.a.createElement(r.a,{tip:"enter you email.",placeholder:"email"})))}},995:function(e,t){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - tip\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},996:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(505),o=n(1),a=n.n(o),i={marginBottom:12},u=[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}];t.default=function(){return a.a.createElement("div",{style:{width:300}},a.a.createElement(r.a,{style:i,placeholder:"email",rules:u,tip:"Email, required",popover:"top-left"}))}},997:function(e,t){e.exports="/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - validate\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst style = { marginBottom: 12 }\nconst rules = [\n  { required: true, message: 'Please enter your email.' },\n  { type: 'email', message: 'Please enter a valid email.' },\n]\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input\n        style={style}\n        placeholder=\"email\"\n        rules={rules}\n        tip=\"Email, required\"\n        popover=\"top-left\"\n      />\n    </div>\n  )\n}\n"}});
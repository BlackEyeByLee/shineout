webpackJsonp([27],{1148:function(e,n){e.exports='# Data.Form 表单数据处理\n\nForm 表单数据处理辅助类。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](#/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。'},1149:function(e,n){e.exports=""},1150:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=new(t(128).g.Form);o.setValue({email:"test@123.com",name:{lastName:"Potter"}}),o.set("age",20),o.set("name.firstName","Harry"),console.log(o.get("age")),console.log(o.get("name")),console.log(o.get("name.firstName")),console.log(o.get("name.lastName")),console.log(o.getValue())},1151:function(e,n){e.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' } })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.getValue())\n"},1403:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),a=t.n(o),s=t(130),r=t(129),u=t(625),l=t(86),c=t(1148),i=t.n(c),m=t(1149),f=t.n(m),g=Object(l.a)(i.a,f.a),d=[];u.a.start(),u.a.setType("example"),t(1150);var p=u.a.end(),v={example:{text:t(1151),log:p.example}};n.default=Object(s.a)(function(e){return a.a.createElement(r.b,Object.assign({},e,{codes:v,source:g,examples:d}))})},625:function(e,n,t){"use strict";var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var a=window.console,s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.logs={default:[]},this.current=this.logs.default}return o(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n.map(function(e){return""+JSON.stringify(e)});this.current.push(o)}}]),e}();n.a={start:function(){window.console=new s},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=a,e}}}});
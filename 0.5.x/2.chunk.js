webpackJsonp([2],{1116:function(e,n){e.exports="# Select *选择框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| clearable | bool | false | 是否可清除值 |\n| data | array | 必填 | 数据项，单条数据作为 value 的数据必须是唯一的 |\n| datum | object | 无 | 数据处理，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置 |\n| defaultValue | array | | 初始值 |\n| disabled | bool | false | 是否禁用 |\n| filterDelay | number | 400 | 毫秒。用户输入触发 fitler 事件的延时 |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string | index | 生成每一项key的辅助方法<br />不填的情况下，会使用index(不推荐，在某些情况下可能会有问题)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| onCreate | function \\| bool | 无 | 如果设置了 onCreate 事件，组件为可输入状态<br />onCreate为函数时，将此函数返回值作为新的选项拆入最上方<br />onCreate为true时，使用默认函数 text => text |\n| onFitler | function | 无 | onFilter 不为空时，可以输入过滤数据<br />onFilter 如果返回一个函数，使用这个函数做前端过滤<br />如果不返回，可以自行做后端过滤 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| renderResult | string \\| function(d) | renderItem | 选中后在结果中显示的内容，默认和 renderItem 相同 |\n| value | array | | 在Form中，value会被表单接管，value无效 |"},1117:function(e,n){e.exports="# Select\n\n<example />"},1118:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement(o.u,{style:{width:240},data:l,onChange:function(e){return console.log(e)}})}},1119:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <Select\n      style={{ width: 240 }}\n      data={data}\n      onChange={d => console.log(d)}\n    />\n  )\n}\n"},1120:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement(o.u,{style:{width:300},data:l,multiple:!0,placeholder:"Multiple select",onChange:function(e,n,t){return console.log(e,n,t)}})}},1121:function(e,n){e.exports="/**\n * cn - 多选\n *    -- multiple 属性为true时，为多选状态，默认为单选\n * en - Multiple\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <Select\n      style={{ width: 300 }}\n      data={data}\n      multiple\n      placeholder=\"Multiple select\"\n      onChange={(vs, d, c) => console.log(vs, d, c)}\n    />\n  )\n}\n"},1122:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{style:{width:240,marginBottom:12},clearable:!0,data:l,placeholder:"Select color",onChange:function(e){return console.log(e)}}),r.a.createElement("br",null),r.a.createElement(o.u,{style:{width:300},data:l,clearable:!0,multiple:!0,placeholder:"Multiple select",onChange:function(e){return console.log(e)}}))}},1123:function(e,n){e.exports="/**\n * cn - 可清空\n *    -- clearable 属性为 true 时，hover 后会显示清空图标，点击后清除所选数据\n * en - Clearable\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        clearable\n        data={data}\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n      />\n      <br />\n      <Select\n        style={{ width: 300 }}\n        data={data}\n        clearable\n        multiple\n        placeholder=\"Multiple select\"\n        onChange={d => console.log(d)}\n      />\n    </div>\n  )\n}\n"},1124:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){var e={data:l,style:{width:100,marginRight:12}};return r.a.createElement("div",null,r.a.createElement(o.u,Object.assign({},e,{size:"small",placeholder:"small"})),r.a.createElement(o.u,Object.assign({},e,{placeholder:"default"})),r.a.createElement(o.u,Object.assign({},e,{size:"large",placeholder:"large"})))}},1125:function(e,n){e.exports="/**\n * cn - 大小\n *    -- 有三种 size，['small', default, 'large']，默认为 default(不要填写)\n * en - Size\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  const props = { data, style: { width: 100, marginRight: 12 } }\n\n  return (\n    <div>\n      <Select {...props} size=\"small\" placeholder=\"small\" />\n      <Select {...props} placeholder=\"default\" />\n      <Select {...props} size=\"large\" placeholder=\"large\" />\n    </div>\n  )\n}\n"},1126:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=t(624),i=t(567),c=Object(l.a)(100),u=Object(i.b)(100),d=function(e){return console.log(e)},s={width:240,marginBottom:12,display:"block"};n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{data:c,datum:{format:"id"},keygen:"id",defaultValue:3,onChange:d,style:s,placeholder:"Select a city",renderItem:"city"}),r.a.createElement(o.u,{data:u,datum:{format:"id"},keygen:"id",defaultValue:3,onChange:d,style:s,placeholder:"Select a user",renderItem:function(e){return e.firstName+" "+e.lastName}}),r.a.createElement(o.u,{data:c,multiple:!0,keygen:"id",defaultValue:[3,4],datum:{format:"id"},onChange:d,placeholder:"Select citys",renderItem:"city"}))}},1127:function(e,n){e.exports="/**\n * cn - 数据处理\n *    -- 可以借助 Datum.List，处理复杂数据\n * en - Datum\n */\nimport React from 'react'\nimport { Select } from 'shineout'\nimport { fetchSync as fetchCity } from 'doc/data/city'\nimport { fetchSync as fetchUser } from 'doc/data/user'\n\nconst citys = fetchCity(100)\nconst users = fetchUser(100)\nconst onChange = d => console.log(d)\nconst style = { width: 240, marginBottom: 12, display: 'block' }\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        data={citys}\n        datum={{ format: 'id' }}\n        keygen=\"id\"\n        defaultValue={3}\n        onChange={onChange}\n        style={style}\n        placeholder=\"Select a city\"\n        renderItem=\"city\"\n      />\n\n      <Select\n        data={users}\n        datum={{ format: 'id' }}\n        keygen=\"id\"\n        defaultValue={3}\n        onChange={onChange}\n        style={style}\n        placeholder=\"Select a user\"\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n\n      <Select\n        data={citys}\n        multiple\n        keygen=\"id\"\n        defaultValue={[3, 4]}\n        datum={{ format: 'id' }}\n        onChange={onChange}\n        placeholder=\"Select citys\"\n        renderItem=\"city\"\n      />\n    </div>\n  )\n}\n"},1128:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=t(567),i=Object(l.b)(1e4),c=function(e){return console.log(e)},u={width:240,marginBottom:12,display:"block"};n.default=function(){return r.a.createElement(o.u,{data:i,datum:{format:"id"},keygen:"id",defaultValue:3,onChange:c,style:u,placeholder:"Select a user",renderItem:function(e,n){return e.firstName+" "+e.lastName+" ("+(n+1)+")"},renderResult:function(e){return e.firstName+" "+e.lastName}})}},1129:function(e,n){e.exports="/**\n * cn - 性能\n *    -- Select 内部实现了懒加载机制优化性能，本例加载了10000条数据。\n * en - Datum\n */\nimport React from 'react'\nimport { Select } from 'shineout'\nimport { fetchSync as fetchUser } from 'doc/data/user'\n\nconst users = fetchUser(10000)\nconst onChange = d => console.log(d)\nconst style = { width: 240, marginBottom: 12, display: 'block' }\n\nexport default function () {\n  return (\n    <Select\n      data={users}\n      datum={{ format: 'id' }}\n      keygen=\"id\"\n      defaultValue={3}\n      onChange={onChange}\n      style={style}\n      placeholder=\"Select a user\"\n      renderItem={(user, i) => `${user.firstName} ${user.lastName} (${i + 1})`}\n      renderResult={user => `${user.firstName} ${user.lastName}`}\n    />\n  )\n}\n"},1130:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{style:{width:240,marginBottom:12},disabled:!0,data:l,placeholder:"Select color"}),r.a.createElement("br",null),r.a.createElement(o.u,{style:{width:300},data:l,disabled:!0,multiple:!0,value:["orange","green"],placeholder:"Multiple select"}))}},1131:function(e,n){e.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        disabled\n        data={data}\n        placeholder=\"Select color\"\n      />\n      <br />\n      <Select\n        style={{ width: 300 }}\n        data={data}\n        disabled\n        multiple\n        value={['orange', 'green']}\n        placeholder=\"Multiple select\"\n      />\n    </div>\n  )\n}\n"},1132:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{style:{width:240,marginBottom:12},data:l,placeholder:"Select color",onChange:function(e){return console.log(e)},onFilter:function(e){return function(n){return n.indexOf(e)>=0}}}),r.a.createElement("br",null),r.a.createElement(o.u,{style:{width:300},multiple:!0,data:l,placeholder:"Select color",onChange:function(e){return console.log(e)},onFilter:function(e){return function(n){return n.indexOf(e)>=0}}}))}},1133:function(e,n){e.exports="/**\n * cn - 筛选数据 - 前端\n *    -- onFilter 返回函数时，使用这个函数做前端过滤\n * en - onFilter\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n      />\n\n      <br />\n\n      <Select\n        style={{ width: 300 }}\n        multiple\n        data={data}\n        placeholder=\"Select color\"\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n      />\n    </div>\n  )\n}\n"},1134:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=t(567),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleFilter=function(e){t.setState({loading:!0}),l.a.get("user",{username:e}).then(function(e){t.setState({loading:!1,data:e.data})})},t.state={data:[],loading:!1},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a["Component"]),i(n,[{key:"componentDidMount",value:function(){this.handleFilter("")}},{key:"render",value:function(){return r.a.createElement(o.u,{loading:this.state.loading,style:{width:240},data:this.state.data,placeholder:"Select user",onChange:function(e){return console.log(e)},onFilter:this.handleFilter,datum:{format:"id"},renderItem:function(e){return e.firstName+" "+e.lastName}})}}]),n}();n.default=c},1135:function(e,n){e.exports="/**\n * cn - 筛选数据 - 服务端\n *    -- onFilter 函数不返回结果时，可以自行去服务端筛选数据\n * en - onFilter\n */\nimport React, { Component } from 'react'\nimport { Select } from 'shineout'\nimport { fetch } from 'doc/data/user'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      data: [],\n      loading: false,\n    }\n  }\n\n  componentDidMount() {\n    this.handleFilter('')\n  }\n\n  handleFilter = (text) => {\n    this.setState({ loading: true })\n    fetch.get('user', { username: text }).then((res) => {\n      this.setState({ loading: false, data: res.data })\n    })\n  }\n\n  render() {\n    return (\n      <Select\n        loading={this.state.loading}\n        style={{ width: 240 }}\n        data={this.state.data}\n        placeholder=\"Select user\"\n        onChange={d => console.log(d)}\n        onFilter={this.handleFilter}\n        datum={{ format: 'id' }}\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n    )\n  }\n}\n"},1136:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=t(567),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleFilter=function(e){t.setState({loading:!0}),l.a.get("user",{username:e}).then(function(e){t.setState({loading:!1,data:e.data})})},t.state={data:[],loading:!1},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a["Component"]),i(n,[{key:"componentDidMount",value:function(){this.handleFilter("")}},{key:"render",value:function(){return r.a.createElement(o.u,{loading:this.state.loading,multiple:!0,data:this.state.data,placeholder:"Select user",onChange:function(e){return console.log(e)},onFilter:this.handleFilter,datum:{format:"id"},renderItem:function(e){return e.firstName+" "+e.lastName}})}}]),n}();n.default=c},1137:function(e,n){e.exports="/**\n */\nimport React, { Component } from 'react'\nimport { Select } from 'shineout'\nimport { fetch } from 'doc/data/user'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      data: [],\n      loading: false,\n    }\n  }\n\n  componentDidMount() {\n    this.handleFilter('')\n  }\n\n  handleFilter = (text) => {\n    this.setState({ loading: true })\n    fetch.get('user', { username: text }).then((res) => {\n      this.setState({ loading: false, data: res.data })\n    })\n  }\n\n  render() {\n    return (\n      <Select\n        loading={this.state.loading}\n        multiple\n        data={this.state.data}\n        placeholder=\"Select user\"\n        onChange={d => console.log(d)}\n        onFilter={this.handleFilter}\n        datum={{ format: 'id' }}\n        renderItem={user => `${user.firstName} ${user.lastName}`}\n      />\n    )\n  }\n}\n"},1138:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{style:{width:240,marginBottom:12},data:l,placeholder:"input color",onCreate:!0,onChange:function(e){return console.log(e)}}),r.a.createElement("br",null),r.a.createElement(o.u,{style:{width:400},data:l,multiple:!0,placeholder:"input color",onCreate:!0,onChange:function(e){return console.log(e)}}))}},1139:function(e,n){e.exports="/**\n * cn - 创建条目\n * en - onCreate\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        placeholder=\"input color\"\n        onCreate\n        onChange={d => console.log(d)}\n      />\n      <br />\n      <Select\n        style={{ width: 400 }}\n        data={data}\n        multiple\n        placeholder=\"input color\"\n        onCreate\n        onChange={d => console.log(d)}\n      />\n    </div>\n  )\n}\n"},1140:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(128),l=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.u,{style:{width:240,marginBottom:12},data:l,placeholder:"input label",onCreate:!0,onChange:function(e){return console.log(e)},onFilter:function(e){return function(n){return n.indexOf(e)>=0}},filterDelay:0}))}},1141:function(e,n){e.exports="/**\n * cn -\n *    -- 和 filter 配合使用\n */\nimport React from 'react'\nimport { Select } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Select\n        style={{ width: 240, marginBottom: 12 }}\n        data={data}\n        placeholder=\"input label\"\n        onCreate\n        onChange={d => console.log(d)}\n        onFilter={text => d => d.indexOf(text) >= 0}\n        filterDelay={0}\n      />\n    </div>\n  )\n}\n"},1401:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),o=t(130),l=t(129),i=t(86),c=t(1116),u=t.n(c),d=t(1117),s=t.n(d),f=Object(i.a)(u.a,s.a),m=[{name:"01-base",title:Object(i.a)("基本用法","Base"),component:t(1118).default,rawText:t(1119)},{name:"02-multiple",title:Object(i.a)("多选 \n multiple 属性为true时，为多选状态，默认为单选","Multiple"),component:t(1120).default,rawText:t(1121)},{name:"03-clearable",title:Object(i.a)("可清空 \n clearable 属性为 true 时，hover 后会显示清空图标，点击后清除所选数据","Clearable"),component:t(1122).default,rawText:t(1123)},{name:"04-size",title:Object(i.a)("大小 \n 有三种 size，[&#39;small&#39;, default, &#39;large&#39;]，默认为 default(不要填写)","Size"),component:t(1124).default,rawText:t(1125)},{name:"05-datum",title:Object(i.a)("数据处理 \n 可以借助 Datum.List，处理复杂数据","Datum"),component:t(1126).default,rawText:t(1127)},{name:"06-bigdata",title:Object(i.a)("性能 \n Select 内部实现了懒加载机制优化性能，本例加载了10000条数据。","Datum"),component:t(1128).default,rawText:t(1129)},{name:"07-disabled",title:Object(i.a)("禁用","Disabled"),component:t(1130).default,rawText:t(1131)},{name:"08-filter",title:Object(i.a)("筛选数据 - 前端 \n onFilter 返回函数时，使用这个函数做前端过滤","onFilter"),component:t(1132).default,rawText:t(1133)},{name:"09-filter",title:Object(i.a)("筛选数据 - 服务端 \n onFilter 函数不返回结果时，可以自行去服务端筛选数据","onFilter"),component:t(1134).default,rawText:t(1135)},{name:"10-filter",title:Object(i.a)("",""),component:t(1136).default,rawText:t(1137)},{name:"11-create",title:Object(i.a)("创建条目","onCreate"),component:t(1138).default,rawText:t(1139)},{name:"12-create",title:Object(i.a)(" \n 和 filter 配合使用",""),component:t(1140).default,rawText:t(1141)}];n.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:f,examples:m}))})},567:function(e,n,t){"use strict";n.b=f,t.d(n,"a",function(){return m});var a=t(17),r=t(188),o=t(192),l=t(193),i=t(194),c=t(191),u=t(190),d=1e4,s=[];!function(){for(var e=Object(r.b)(c.a,20),n=Object(r.b)(u.a,30),t=Object(r.b)(u.a,5),a=1;a<=d;a++)s.push({id:a,firstName:Object(r.a)(o.a),lastName:Object(r.a)(l.a),position:Object(r.a)(i.a),start:Object(r.c)("yyyy-MM-dd",432e9),time:Object(r.c)("hh:mm"),salary:Object(r.d)(5e5,5e4),country:Object(r.a)(e),office:Object(r.a)(n),office5:Object(r.a)(t),height:Object(r.e)(14,100)});for(var f=[],m=0;m<=o.a.length;m+=3)f.push(o.a[m])}();function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],o=t.name,l=t.order,i=void 0;switch(o){case"id":case"salary":i="asc"===l?function(e,n){return e[o]-n[o]}:function(e,n){return n[o]-e[o]};break;default:o&&(i="asc"===l?function(e,n){return e[o].localeCompare(n[o])}:function(e,n){return n[o].localeCompare(e[o])})}var c=i?Object(a.a)(s,function(e){return e.sort(i)}):s;return r&&(r=r.toLocaleLowerCase(),c=c.filter(function(e){return(e.firstName+" "+e.lastName).toLocaleLowerCase().indexOf(r)>=0})),c.slice(n,n+e)}var m={get:function(e,n){var t=n.current,a=void 0===t?1:t,o=n.pageSize,l=void 0===o?100:o,i=n.sorter,c=n.username,u=(a-1)*l;return new Promise(function(e){setTimeout(function(){e({status:1,data:f(l,u,i,c),current:a,pageSize:l,total:s.length})},Object(r.d)(500,300))})},post:function(e,n){var t=n.op,a=n.ids;return new Promise(function(e){switch(t){case"delete":s=s.filter(function(e){return a.indexOf(e.id)<0});break;case"on":case"off":s.forEach(function(e,n){a.indexOf(e.id)>=0&&(s[n]=Object.assign({},e,{status:"on"===t}))})}setTimeout(function(){e(!0)},Object(r.d)(200))})}}},624:function(e,n,t){"use strict";n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o.slice(n,n+e)};var a=t(188),r=t(190),o=Object(a.f)(r.a).map(function(e,n){return{id:n+1,city:e}})}});
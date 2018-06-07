webpackJsonp([9],{1372:function(n,t){n.exports="# menu *菜单*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | [] | 需要渲染成菜单的数据 |\n| mode | string | 'inline'| 菜单样式,提供 'inline', 'vertical', 'horizontal'三种|\n| renderItem | string \\| function | 'title' | 元素渲染方式,如果为字符串,则会以对应的值作为显示内容;如果为函数,则以函数返回的结果作为显示内容,函数参数为对应的数据对象 |\n| keygen | string \\| function | 无 | key的生成规则,如果为字符串,则会以对应的值作为key值;如果为函数,则以函数返回的结果作为key值,参数为对应的数据对象|\n| active | function | null | 验证是否激活,参数为对应的数据对象,返回true则代表该菜单激活 <br /> 参数为data,即该条数据 <br /> 注: 是否是多选由函数内部筛选规则来确定 |\n| defaultOpenKeys | array | [] | 初始展开的菜单;如果需要设置此值,则需要设置keygen,此值为一个包含key的数组|\n| onClick | function | null | 子菜单点击事件,参数为当条数据|\n| inlineIndent | number | 14 | 缩进,每一层子菜单的缩进会依次递增|\n| style | object | 无 | 最外层扩展样式 |"},1373:function(n,t){n.exports="# Menu\n\n<example />"},1374:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",onClick:!0,children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",onClick:function(){return console.log("only click")},children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1375:function(n,t){n.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    onClick: true,\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    onClick: () => console.log('only click'),\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1376:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4"}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"horizontal",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1377:function(n,t){n.exports="/**\n * cn - 水平布局\n * en - Base\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"horizontal\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1378:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"vertical",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1379:function(n,t){n.exports="/**\n * cn - 垂直样式\n * en - vertical\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"vertical\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1380:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",disabled:!0,children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four",disabled:!0}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"inline",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1381:function(n,t){n.exports="/**\n * cn - 禁用菜单\n * en - Disabled\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    disabled: true,\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n    disabled: true,\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1382:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"inline",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=c},1383:function(n,t){n.exports="/**\n * cn - 默认展开,默认选中\n * en - default opened or selected\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1384:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=e(569),l=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var c={1:o.a.createElement(r.a,{name:"home"}),3:o.a.createElement(r.a,{name:"flag"}),6:o.a.createElement(r.a,{name:"tag"}),2:o.a.createElement(r.a,{name:"github"})},d=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}];function u(n){return n.title.startsWith("Navigation")?o.a.createElement("span",null,c[n.id],"  ",n.title):n.title}var s=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),l(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"inline",keygen:"id",data:d,renderItem:u,active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=s},1385:function(n,t){n.exports="/**\n * cn - 自定义渲染\n * en - customize render\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\nimport Icon from '../Icon/FontAwesome'\n\nconst Icons = {\n  1: <Icon name=\"home\" />,\n  3: <Icon name=\"flag\" />,\n  6: <Icon name=\"tag\" />,\n  2: <Icon name=\"github\" />,\n}\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\nfunction renderItem(da) {\n  if (da.title.startsWith('Navigation')) {\n    return (<span>{Icons[da.id]}  {da.title}</span>)\n  }\n  return da.title\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={renderItem}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1386:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){a.o.info("now select is "+n.title),this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{mode:"inline",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=c},1387:function(n,t){n.exports="/**\n * cn - 自定义选中事件\n * en - customize click event\n */\nimport React from 'react'\nimport { Menu, Message } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    Message.info(`now select is ${da.title}`)\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1388:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(128),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,o.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return o.a.createElement(a.n,{keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,onClick:this.handleClick,theme:"dark"})}}]),t}();t.default=c},1389:function(n,t){n.exports="/**\n * cn - 暗系主题\n * en - Dark\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n        theme=\"dark\"\n      />\n    )\n  }\n}\n"},1418:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),o=e.n(i),a=e(130),r=e(129),l=e(86),c=e(1372),d=e.n(c),u=e(1373),s=e.n(u),p=Object(l.a)(d.a,s.a),f=[{name:"1-base",title:Object(l.a)("基本用法","Base"),component:e(1374).default,rawText:e(1375)},{name:"2-horizontal",title:Object(l.a)("水平布局","Base"),component:e(1376).default,rawText:e(1377)},{name:"3-vertical",title:Object(l.a)("垂直样式","vertical"),component:e(1378).default,rawText:e(1379)},{name:"4-disabled",title:Object(l.a)("禁用菜单","Disabled"),component:e(1380).default,rawText:e(1381)},{name:"5-selected",title:Object(l.a)("默认展开,默认选中","default opened or selected"),component:e(1382).default,rawText:e(1383)},{name:"6-itemRender",title:Object(l.a)("自定义渲染","customize render"),component:e(1384).default,rawText:e(1385)},{name:"7-click",title:Object(l.a)("自定义选中事件","customize click event"),component:e(1386).default,rawText:e(1387)},{name:"8-dark",title:Object(l.a)("暗系主题","Dark"),component:e(1388).default,rawText:e(1389)}];t.default=Object(a.a)(function(n){return o.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:p,examples:f}))})},569:function(n,t,e){"use strict";var i=e(128);t.a=Object(i.k)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")}});
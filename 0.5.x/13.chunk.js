webpackJsonp([13],{1392:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(130),i=e(129),c=e(86),l=e(694),d=e.n(l),p=e(695),u=e.n(p),s=Object(c.a)(d.a,u.a),m=[{name:"1-base",title:Object(c.a)("基本用法","Base"),component:e(696).default,rawText:e(697)},{name:"2-hover",title:Object(c.a)("hover 触发","Hover"),component:e(698).default,rawText:e(699)},{name:"3-position",title:Object(c.a)("弹出位置","Position"),component:e(700).default,rawText:e(701)},{name:"4-items",title:Object(c.a)("平铺选项","Multiple columns"),component:e(702).default,rawText:e(703)},{name:"5-split",title:Object(c.a)("组合 \n 可以放在 Button.Group 中使用","Group"),component:e(704).default,rawText:e(705)},{name:"6-type",title:Object(c.a)("样式 \n 使用了和Button相同的 type 和 size 设置样式","type"),component:e(706).default,rawText:e(707)},{name:"7-disabled",title:Object(c.a)("禁用","Disabled"),component:e(708).default,rawText:e(709)}];t.default=Object(a.a)(function(n){return r.a.createElement(i.b,Object.assign({},n,{codes:void 0,source:s,examples:m}))})},694:function(n,t){n.exports="# Dropdown *下拉*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | \\[] | 必填 | 下拉数据，详见data |\n| renderItem | func \\| string | 'content' | 设置显示的内容,如果是字符串,则为对应的值<br />如果是函数,则返回值为显示的内容,参数为当条数据\n| className | string | 无 | 扩展className |\n| disabled | bool | false | 禁用 |\n| hover | boolean | false | 为 true 时，通过 mouseenter 触发选项弹出  |\n| outline | boolean | false | 同 [Button](#/components/Button) |\n| placeholder | string \\| ReactElement | 必填 | 按钮显示内容 |\n| columns | number | 无 | 页面多元素展示,此属性需要依赖width属性,请合理的设置列数和宽度\n| size | string | 'default' | 同 [Button](#/components/Button) |\n| type | string | 'default' | 可选值 \\['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'] |\n| width | number | 无 | 弹出选项层的宽度 |\n| onClick | func | 无 | 点击事件。参数为渲染的数据, <br /> 注: 如果数据内设置了onClick，会忽略此方法，调用data.onClick |\n\n### data\n\ndata 项为 ReactElement 时，不做处理，为object时，参数如下\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| element | | 默认从content获取内容 |\n| url | string | 无 | url属性不为空时，render为一个链接 |\n| target | string | 无 | url 不为空时有效 |\n| onClick | string | "},695:function(n,t){n.exports="# Dropdown\n\n<example />"},696:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128),i=[{content:"Submenu",children:[{content:"Link to Google",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},r.a.createElement("a",{href:"#/"},"Home"),{content:"Message",onClick:function(){a.o.info("Some message.")}}];t.default=function(){return r.a.createElement(a.h,{placeholder:"Dropdown",data:i})}},697:function(n,t){n.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Dropdown, Message } from 'shineout'\n\nconst menu = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link to Google',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  <a href=\"#/\">Home</a>,\n  {\n    content: 'Message',\n    onClick: () => { Message.info('Some message.') },\n  },\n]\n\nexport default function () {\n  return (\n    <Dropdown placeholder=\"Dropdown\" data={menu} />\n  )\n}\n"},698:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128);t.default=function(){return r.a.createElement(a.h,{hover:!0,placeholder:"Hover",data:[{content:"First",id:"1",children:[{id:"3",content:"optic 1"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"topic 2",id:4,children:[{id:"6",content:"topic 3"}]}]}]})}},699:function(n,t){n.exports="/**\n * cn - hover 触发\n * en - Hover\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = [{\n    content: 'First',\n    id: '1',\n    children: [{\n      id: '3',\n      content: 'optic 1',\n    }],\n  }, {\n    content: 'Second',\n    url: 'http://www.google.com',\n    id: '2',\n    children: [{\n      content: 'topic 2',\n      id: 4,\n      children: [{\n        id: '6',\n        content: 'topic 3',\n      }],\n    }],\n  }]\n\n  return (\n    <Dropdown hover placeholder=\"Hover\" data={menu} />\n  )\n}\n\n"},700:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128);t.default=function(){var n=[{content:"First",id:"1",children:[{content:"link1",id:"4"},{content:"link2",id:"5"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"link3",id:6,onClick:function(){console.log("this is special")}},{content:"link4",id:7,children:[{id:"8",content:"link5"},{id:"9",content:"link6"}]}]}],t=100;return r.a.createElement(o.Fragment,null,r.a.createElement(a.h,{placeholder:"Right Top",width:t,position:"right-top",data:n}),r.a.createElement(a.h,{placeholder:"Bottom Left",width:t,position:"bottom-left",data:n}),r.a.createElement(a.h,{placeholder:"Bottom Right",width:t,position:"bottom-right",data:n}),r.a.createElement(a.h,{placeholder:"Left Top",width:t,position:"left-top",data:n}),r.a.createElement("br",null),r.a.createElement(a.h,{placeholder:"Right Bottom",width:t,position:"right-bottom",data:n}),r.a.createElement(a.h,{placeholder:"Top Left",width:t,position:"top-left",data:n}),r.a.createElement(a.h,{placeholder:"Top Right",width:t,position:"top-right",data:n}),r.a.createElement(a.h,{placeholder:"Left Bottom",width:t,position:"left-bottom",data:n}))}},701:function(n,t){n.exports="/**\n * cn - 弹出位置\n * en - Position\n */\nimport React, { Fragment } from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = [{\n    content: 'First',\n    id: '1',\n    children: [{\n      content: 'link1',\n      id: '4',\n    }, {\n      content: 'link2',\n      id: '5',\n    }],\n  }, {\n    content: 'Second',\n    url: 'http://www.google.com',\n    id: '2',\n    children: [{\n      content: 'link3',\n      id: 6,\n      onClick: () => { console.log('this is special') },\n    }, {\n      content: 'link4',\n      id: 7,\n      children: [{\n        id: '8',\n        content: 'link5',\n      }, {\n        id: '9',\n        content: 'link6',\n      }],\n    }],\n  }]\n  const width = 100\n\n  return (\n    <Fragment>\n      <Dropdown placeholder=\"Right Top\" width={width} position=\"right-top\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Left\" width={width} position=\"bottom-left\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Right\" width={width} position=\"bottom-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Top\" width={width} position=\"left-top\" data={menu} />\n\n      <br />\n\n      <Dropdown placeholder=\"Right Bottom\" width={width} position=\"right-bottom\" data={menu} />\n\n      <Dropdown placeholder=\"Top Left\" width={width} position=\"top-left\" data={menu} />\n\n      <Dropdown placeholder=\"Top Right\" width={width} position=\"top-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Bottom\" width={width} position=\"left-bottom\" data={menu} />\n    </Fragment>\n  )\n}\n"},702:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128);t.default=function(){for(var n=[],t=1;t<=30;t++)n.push({id:""+t,content:"item"+t});return r.a.createElement(a.h,{placeholder:"Dropdown",width:500,columns:5,data:n})}},703:function(n,t){n.exports="/**\n * cn - 平铺选项\n * en - Multiple columns\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = []\n  for (let i = 1; i <= 30; i++) {\n    menu.push((\n      {\n        id: `${i}`,\n        content: `item${i}`,\n      }\n    ))\n  }\n\n  return (\n    <Dropdown placeholder=\"Dropdown\" width={500} columns={5} data={menu} />\n  )\n}\n\n"},704:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128),i=[{content:"First"},{content:"Second",target:"_blank",url:"http://www.google.com"}];t.default=function(){return r.a.createElement(a.c.Group,null,r.a.createElement(a.c,{onClick:function(){return a.o.info("The button clicked.")}},"Click me"),r.a.createElement(a.h,{onClick:function(n){return a.o.info("The Dropdown clicked "+n.content+".")},position:"bottom-right",data:i}))}},705:function(n,t){n.exports="/**\n * cn - 组合 \\n 可以放在 Button.Group 中使用\n * en - Group\n */\nimport React from 'react'\nimport { Dropdown, Message, Button } from 'shineout'\n\nconst menu = [\n  {\n    content: 'First',\n  },\n  {\n    content: 'Second',\n    target: '_blank',\n    url: 'http://www.google.com',\n  },\n]\n\nexport default function () {\n  return (\n    <Button.Group>\n      <Button onClick={() => Message.info('The button clicked.')}>Click me</Button>\n      <Dropdown\n        onClick={data => Message.info(`The Dropdown clicked ${data.content}.`)}\n        position=\"bottom-right\"\n        data={menu}\n      />\n    </Button.Group>\n  )\n}\n\n"},706:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128),i=[{content:"Submenu",children:[{content:"Link",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},{content:"Message",onClick:function(){a.o.info("Some message.")}}];t.default=function(){return r.a.createElement(o.Fragment,null,r.a.createElement(a.h,{placeholder:"Dropdown",data:i}),r.a.createElement(a.h,{placeholder:"Link",data:i,type:"link"}),r.a.createElement(a.h,{placeholder:"Primary",type:"primary",data:i}),r.a.createElement(a.h,{placeholder:"Outline",type:"primary",outline:!0,data:i}),r.a.createElement(a.h,{placeholder:"Small",size:"small",data:i}),r.a.createElement(a.h,{placeholder:"Large",size:"large",data:i}))}},707:function(n,t){n.exports='/**\n * cn - 样式 \\n 使用了和Button相同的 type 和 size 设置样式\n * en - type\n */\nimport React, { Fragment } from \'react\'\nimport { Dropdown, Message } from \'shineout\'\n\nconst menu = [\n  {\n    content: \'Submenu\',\n    children: [\n      {\n        content: \'Link\',\n        target: \'_blank\',\n        url: \'https://google.com\',\n      },\n      {\n        content: \'Disabled\',\n        disabled: true,\n      },\n    ],\n  },\n  {\n    content: \'Message\',\n    onClick: () => { Message.info(\'Some message.\') },\n  },\n]\n\nexport default function () {\n  return (\n    <Fragment>\n      <Dropdown placeholder="Dropdown" data={menu} />\n      <Dropdown placeholder="Link" data={menu} type="link" />\n      <Dropdown placeholder="Primary" type="primary" data={menu} />\n      <Dropdown placeholder="Outline" type="primary" outline data={menu} />\n      <Dropdown placeholder="Small" size="small" data={menu} />\n      <Dropdown placeholder="Large" size="large" data={menu} />\n    </Fragment>\n  )\n}\n'},708:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),r=e.n(o),a=e(128);t.default=function(){return r.a.createElement(a.h,{disabled:!0,placeholder:"Disabled",data:[{content:"First"},{content:"Second",url:"http://www.google.com"}]})}},709:function(n,t){n.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = [\n    {\n      content: 'First',\n    },\n    {\n      content: 'Second',\n      url: 'http://www.google.com',\n    },\n  ]\n\n  return (\n    <Dropdown disabled placeholder=\"Disabled\" data={menu} />\n  )\n}\n\n"}});
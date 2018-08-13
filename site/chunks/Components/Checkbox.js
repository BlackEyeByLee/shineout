/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Checkbox/cn.md'
import en from 'doc/pages/components/Checkbox/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate('基本用法 \n 基本的 Checkbox', 'Base \n Basic Checkbox'),
    component: require('doc/pages/components/Checkbox/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-01-base.js'),
  },
  {
    name: '02-checked',
    title: locate('状态 \n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理 onChange 事件）。', 'Checked \n The checked has three values:checked, unchecked, and semi-selected. When the checked is set, it is a controlled component(this example does not handle onChange events).'),
    component: require('doc/pages/components/Checkbox/example-02-checked.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-02-checked.js'),
  },
  {
    name: '03-value',
    title: locate('选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。', 'Value \n If the htmlValue is not set,the checkbox that is selected return true and if the htmlValue is set, return the htmlValue. When the checkbox is not selected, always return undefined.'),
    component: require('doc/pages/components/Checkbox/example-03-value.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-03-value.js'),
  },
  {
    name: '04-group',
    title: locate('一组多选框 \n Checkbox.Group 可以渲染一组 Checkbox', 'Group \n Checkbox.Group can render a group of checkbox.'),
    component: require('doc/pages/components/Checkbox/example-04-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-04-group.js'),
  },
  {
    name: '05-format',
    title: locate('复杂数据 \n 复杂的数据可以使用 format 处理 value', 'Complex data \n Complex data can use format to process value.'),
    component: require('doc/pages/components/Checkbox/example-05-format.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-05-format.js'),
  },
  {
    name: '06-datum',
    title: locate(' \n 当 format 不能满足需求时，可以使用 Datum.List 进行处理', ' \n When the format fails to meet the requirements, the Datum.List can be used to process value.'),
    component: require('doc/pages/components/Checkbox/example-06-datum.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-06-datum.js'),
  },
  {
    name: '07-rawgroup',
    title: locate(' \n 可以按 React 组件方式使用', ' \n It can be used like the React component.'),
    component: require('doc/pages/components/Checkbox/example-07-rawgroup.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-07-rawgroup.js'),
  },
  {
    name: '08-block',
    title: locate('垂直布局 \n 默认是水平布局，设置 block 属性可以改为垂直布局', 'Block \n The default is horizontal layout, and setting the block property can change it to be vertical layout.'),
    component: require('doc/pages/components/Checkbox/example-08-block.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-08-block.js'),
  },
  {
    name: '09-disabled',
    title: locate('禁用 \n 设置 Checkbox.Group 的 disabled 属性，禁用全部选项', 'Disabled \n Setting the disabled property of Checkbox.Group disable all the options.'),
    component: require('doc/pages/components/Checkbox/example-09-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-09-disabled.js'),
  },
  {
    name: '10-disabled',
    title: locate(' \n disabled 为函数时，根据函数结果实现有条件禁用', 'Disabled \n When the disabled property is a function, realize conditional disabling according to the result of thc function.'),
    component: require('doc/pages/components/Checkbox/example-10-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-10-disabled.js'),
  },
  {
    name: '11-input',
    title: locate('带输入 \n 设置 inputable 属性可以显示输入框，返回值为输入框内容', 'Inputable \n Setting the inputable property can show the input box and the return value is the value of the input box.'),
    component: require('doc/pages/components/Checkbox/example-11-input.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-11-input.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))

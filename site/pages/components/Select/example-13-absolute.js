/**
 * cn - 绝对定位
 *    -- 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）
 * en - Absolute
 */
import React from 'react'
import { Select } from 'shineout'
import { fetchSync as fetchUser } from 'doc/data/user'

const users = fetchUser(10000)
const data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']

export default function () {
  return (
    <div style={{ padding: 10, height: 100, overflow: 'hidden' }}>
      <Select
        absolute
        data={data}
        style={{ width: 100, marginRight: 12 }}
        onFilter={text => d => d.indexOf(text) > -1}
        placeholder="default"
      />

      <Select
        multiple
        data={users}
        absolute
        style={{ width: 300 }}
        placeholder="Select user"
        onChange={d => console.log(d)}
        onFilter={text => d => d.firstName.indexOf(text) > -1}
        datum={{ format: 'id' }}
        renderItem={user => `${user.firstName} ${user.lastName}`}
      />
    </div>
  )
}

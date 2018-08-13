/**
 * cn - 性能
 *    -- Select 内部用懒加载机制来优化性能，本例加载了10000条数据。
 * en - Datum
 *    -- Select uses a lazy loading mechanism to optimize performance. This example loads 10,000 pieces of data.
 */
import React from 'react'
import { Select } from 'shineout'
import { fetchSync as fetchUser } from 'doc/data/user'

const users = fetchUser(10000)
const onChange = d => console.log(d)
const style = { width: 240, marginBottom: 12, display: 'block' }

export default function () {
  return (
    <Select
      data={users}
      datum={{ format: 'id' }}
      keygen="id"
      defaultValue={3}
      onChange={onChange}
      style={style}
      placeholder="Select a user"
      renderItem={(user, i) => `${user.firstName} ${user.lastName} (${i + 1})`}
      renderResult={user => `${user.firstName} ${user.lastName}`}
    />
  )
}

/**
 * cn - 链接
 *    -- 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性
 * en - Link
 *    -- Setting the href attribute can make the button be rendered as a <a> tag and you can also set the target property.
 */
import React from 'react'
import { Button } from 'shineout'

export default function () {
  return (
    <Button href="#/" target="_blank" type="primary">Home</Button>
  )
}


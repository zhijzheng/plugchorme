/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './index.css'

export default class registerLogin extends Component {
  render() {
    return (
      <div className='shortcut'>
        <div className='edition_heart'>
          <div className='float_left'>
            <ul>
              <li style={{marginRight: '10px'}}>插件市场，欢迎你!</li>
              <li className='illustrate'><a href="https://juejin.cn/post/7241859817564192805" target="_blank">*插件包安装手册</a></li>
            </ul>
          </div>
          <div className='float_right'>
            <ul>
              <li className='logo' title='插件市场'>
              <h1 style={{textIndent:'-9999px', overflow:'hidden'}}>插件市场</h1>
              </li>
              <li className='title'>插件商城</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

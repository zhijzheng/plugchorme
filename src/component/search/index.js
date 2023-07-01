import React, { Component } from 'react'
import {Input} from 'antd'
import './index.css'

export default class search extends Component {
 state={ val:''}
 searchValue=(e)=>{
  const val =e.target.value
  this.props.searchValue(val)
}
  render() {
    return (
      <div className='search'>
        <div className='inputValue'>
        <Input
        placeholder="请输入需要查找的插件"
        style={{height:'45px'}}
        onChange={this.searchValue}
        />
        </div>
      </div>
    )
  }
}

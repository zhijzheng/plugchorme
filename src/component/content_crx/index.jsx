import React, { Component } from 'react'
import axios from 'axios'
import { Button, Space } from 'antd'
import './index.css'

class ContentCrx extends Component {
  state = {
    download: false,
    vale: '',
    download_url: '',
    download_paly: false,

  }
  apply = () => {
    this.setState({
      download_paly: true
    });
  }
//取消支付
onPaly= () =>{
  this.setState({
    download_paly: false,
    Paly: 0
  })
}
// 已支付
yePaly= () =>{
  this.setState({
    download_paly: false,
  })
  window.location.href = this.state.download_url;
}

  //监控鼠标是点击
  download = (flag, vale) => {
    return () => {
      if (flag === true) {
        this.apply()
          axios.get('//m.luckyjian.cn:8090/api/pluginDown?icon=' + vale).then((res) => {
            const download = res.data.message[0].download_url
            this.setState({ download_url: download })
          }).catch((e) => {
            console.log(e);
          });
        
      }
    }
  }
  render() {
    const { res, searchVal } = this.props
    // 实现搜索能力
    const pattern = new RegExp(searchVal, 'i');
    const list = res.filter(item => {
      return pattern.test(item.icon) || pattern.test(item.name) || pattern.test(item.newname) || pattern.test(item.chrome_download)
    })
    const { download_url } = this.state
    return (
      <div className='content_crx'>
        {res !== undefined ? list.map((item) => {

          return <ul key={item.id} onMouseDown={this.download(true, item.icon)} onMouseLeave={this.download(false, '')} id='open_btn' style={{ backgroundColor: '#f8f2e7' }}>

            <a href='#'>
              <li className='list' onClick={this.handleClick}>
                <img src={item.icon} />
                <div className='title' >{item.name}
                  <div className='content'>{item.newname}</div>
                  <div style={{ fontSize: '10px', marginBlock: '5px' }}>喜爱:{item.chrome_download}</div>
                </div>
              </li>
            </a>
          </ul>
        }) : ''}
      {this.state.download_paly === true ? <div className='modal'>
        <div className='modal-content'>
          <div><img src='http://blog.luckyjian.cn/pay.jpg'></img></div>
          <div> 
          <Button type="primary" danger ghost style={{  marginLeft:'4em', marginRight:'3em', width: '70px', height: '40px'}} onClick={this.onPaly}>取消</Button>
          <Button  type="primary" ghost style={{  marginLeft:'7em', marginRight:'2em' , width: '70px', height: '40px' }} onClick={this.yePaly}>已赞赏</Button>
          </div>
        </div>
      </div> : '' }
      </div>
    )
  }
}
export default ContentCrx
import React, { Component } from "react";
import axios from 'axios'
import RegisterLogin from './component/register_login';
import Search from './component/search'
import ContentCrx from './component/content_crx'
import Bottom from './component/bottom'
import './index.css'
class App extends Component {
    state = { res: [],
    searchValue:''
    }
    // 请求包
    handBtnClick = () => {
        axios.get('//m.luckyjian.cn:8090/api/plug-in').then((res) => {
            const dateRes = res.data.message
            this.setState({
                res: dateRes
            })
        }).catch((e) => {
            console.log(e);
        })
    }
    // 刷新前先请求
    componentDidMount() {
        this.handBtnClick()
    }
    searchValue=(val)=>{
        this.setState({
            searchValue:val 
        })
    }
    render() {
        return (
            <div style={{ minHeight: '1325px' }}>
                <RegisterLogin />
                <div style={{ marginTop: '30px' }}>
                    <Search searchValue={this.searchValue} />
                </div>
                <div style={{ marginTop: '50px' }} >
                    <ContentCrx res={this.state.res} searchVal={this.state.searchValue} />
                </div>
                <div className="bottom">
                    <Bottom />
                </div>
            </div>
        )
    };
}

export default App;
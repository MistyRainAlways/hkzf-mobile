import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './index.css'
import index from '../index'
import list from '../list'
import news from '../news'
import profile from '../profile'
import { Route } from 'react-router-dom'

export class Home extends Component {
    state = {
        selectedTab: this.props.location.pathname,
    }


    render() {
        return (
            <div className='home'>
            
            <Route exact path="/Home" component={index}></Route>
            <Route path="/Home/news" component={news}></Route>
            <Route path="/Home/list" component={list}></Route>
            <Route path="/Home/profile" component={profile}></Route>

                <TabBar
                    noRenderContent
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={
                            <i className="iconfont icon-ind" />
                        }
                        selectedIcon={
                            <i className="iconfont icon-ind" />
                        }
                        selected={this.state.selectedTab === '/Home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/Home',
                            });
                            this.props.history.push('/Home')
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className="iconfont icon-findHouse" />
                        }
                        selectedIcon={
                            <i className="iconfont icon-findHouse" />
                        }
                        title="找房"
                        key="Koubei"
                        selected={this.state.selectedTab === '/Home/list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/Home/list',
                            });
                            this.props.history.push('/Home/list')
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className="iconfont icon-infom" />
                        }
                        selectedIcon={
                            <i className="iconfont icon-infom" />
                        }
                        title="资讯"
                        key="Friend"
                        selected={this.state.selectedTab === '/Home/news'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/Home/news',
                            });
                            this.props.history.push('/Home/news')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className="iconfont icon-my" />
                        }
                        selectedIcon={
                            <i className="iconfont icon-my" />
                        }
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === '/Home/profile'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '/Home/profile',
                            });
                            this.props.history.push('/Home/profile')
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Home

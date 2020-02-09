import React from 'react';
import { Button } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Button>按钮</Button> */}
     
     
        {/* 配置导航菜单 */}
        <Link to='/Home'>首页</Link>
        <Link to='/CityList'>列表</Link>

        {/* 配置路由 */}
        <Route path="/Home" component={Home}></Route>
        <Route path='/CityList' component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;

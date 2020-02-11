import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Router>
      <div className="App">
    
        {/* 配置路由 */}
        <Route exact path="/" render={() => <Redirect to="/Home" />}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route path='/CityList' component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;

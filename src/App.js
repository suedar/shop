import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
// import Header from './components/header';
import Home from './pages/home/index';
import './App.less';

const { Content } = Layout;

function App() {
  return (
    <Layout
      className="app"
      style={{
        '--color-warning': '#faad14',
        '--color-success': '#52c41a',
        '--color-success-bg': '#f6ffed',
        '--color-error': '#f5222d',
        '--color-error-bg': '#fff1f0',
        '--color-info': '#1890ff',
      }}
    >
      <Router>
        <Content>
          <div className="layout-content">
            <Home />
          </div>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
// import Header from './components/header';
import Home from './pages/home/index';
import './App.less';

const { Content } = Layout;

function App() {
    return (
        <Layout className="app" style={{
            '--color-warning': '#faad14',
            '--color-success': '#52c41a',
            '--color-success-bg': '#f6ffed',
            '--color-error': '#f5222d',
            '--color-error-bg': '#fff1f0',
            '--color-info': '#1890ff',
            }}>
            <Router>
                <Content>
                    <div className="layout-content">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {/* <Route path="/providers" component={Home} />
                            <Route path="/jobs" component={Job} exact />
                            <Route path="/jobs/:id" component={Detail} />
                            <Route path="/materials" component={Material} />
                            <Route path="/tools" component={Tool} />
                            <Route path="/user" component={User} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/monitor" exact component={Monitor} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/job-log" component={JobLog} />
                            <Route path="/auto-uploads" component={AutoUpload} />
                            <Route path="/reports/rounds/:roundId" component={ReportSyncJob} /> */}
                        </Switch>
                    </div>
                </Content>
            </Router>
        </Layout>
    );
}

export default App;

import './App.css';
import {Component} from "react";
import {Layout, Menu} from 'antd';
import {Link, Outlet} from "react-router-dom"

const {Header, Footer, Sider, Content} = Layout;


class App extends Component {
    state = {
        url: window.location.href
    };
    render() {
        return (
            <Layout className="site-layout" style={{minHeight: '100vh'}}>
                <Header className="site-layout-header" style={{padding: 0}}>Header</Header>
                <Layout>
                    <Sider className="site-layout-sider">
                    <Menu mode="inline" defaultSelectedKeys={[this.state.url]}>
                        <Menu.Item key="/">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="/info">
                            <Link to="/info">info</Link>
                        </Menu.Item>
                        <Menu.Item key="/pgadmin">
                            <Link to="/info">pgadmin</Link>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Content>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Outlet/>
                        </div>
                    </Content>
                </Layout>
                <Footer className="site-layout-footer" style={{textAlign: 'center'}}>Проект по администрированию,
                    автор Курьян К.П.</Footer>
            </Layout>
        )
    }
}

export default App;

import React, { useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../static/css/Login.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
} from '@ant-design/icons';
import AddArticle from './AddArticle';
import '../static/css/AdminIndex.css'
import ArticleList from './ArticleList';
import Wait from './Wait'

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex(props){
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };

    const handleClickArticle = e => {
        console.log(e.key === 'addArticle');
        if(e.key === 'addArticle'){
            props.history.push('/index/add/')
        }else if(e.key === 'articleList'){
            props.history.push('/index/list/')
        }
    }

    const handleClick = e => {
        console.log(e);
        if(e.key === '9'){
            props.history.push('/index/wait/')
        }else if(e.key === '2'){
            props.history.push('/index/add/')    
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleClick}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined /> }>
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu key="sub1" 
                        onClick = {handleClickArticle}
                        icon={<UserOutlined />} 
                        title="文章管理" >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
                        <div>
                            <Switch>
                                <Route path="/index/" exact component={AddArticle} />
                                <Route path="/index/add/" exact component={AddArticle} />
                                <Route path="/index/list/" exact component={ArticleList} />
                                <Route path="/index/add/:id" exact component={AddArticle} />     
                                <Route path="/index/wait/" exact component={Wait} />
                            </Switch>                       
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex
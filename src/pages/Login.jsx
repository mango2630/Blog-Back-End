import React, {useState, useEffect} from 'react'
import 'antd/dist/antd.css'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import {Card, Input, Button, Spin, message} from 'antd'
import axios from 'axios'
import '../static/css/Login.css'
import servicePath from '../config/apiUrl'


function Login (props){

    const [userName, setUserName] = useState('');
    const [passWord, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
    }, [])

    const checkLogin = ()=>{
        setIsLoading(true)
        
        if(!userName){
            message.error('用户名不能为空');
            setTimeout(()=>{
                setIsLoading(false)
            }, 500)
            return false;
        }else if(!passWord){
            message.error('密码不能为空');
            setTimeout(()=>{
                setIsLoading(false)
            }, 500)
            return false;
        }

        let dataProps = {
            'userName' : userName,
            'password' : passWord
        }

        
        axios({
            method : 'post',
            url : servicePath.checkLogin,
            data : dataProps,
            withCredentials : true
        }).then(
            res => {
                // setIsLoading(false);
                console.log(res.data);
                console.log(res.data.data);
                console.log('login: res.data.openId', res.data.openId);
                console.log('login: ', res.data.data === 'success');
                if(res.data.data === 'success'){
                    localStorage.setItem('openId', res.data.openId);
                    props.history.push('/index');
                }else{
                    message.error('用户名密码错误')
                }
            }
        )

        setTimeout(()=>{
            setIsLoading(false)
        },1000)
    }
    

    return (
        <div className="login-div">
            <Spin tip="Loading" spinning={isLoading}>
                <Card title="Mango's blog" bordered={true}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your username"
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    />
                    <br /><br />
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined className="site-form-item-icon"/>}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br /><br />

                    <Button type="primary" size="large" block onClick={checkLogin}>Login in</Button>
                </Card> 
            </Spin>
        </div>
    )
}

export default Login

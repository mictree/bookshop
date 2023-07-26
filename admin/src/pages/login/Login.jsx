import React, { useEffect, useState } from 'react'
import { Button, OutlinedInput, TextField } from '@mui/material';
import { useLogin } from '../../hooks/useLogin';
import authService from '../../services/authService';
import './login.scss'
import { setLocalStorage } from '../../utils/localStorageHandle';
import { LOGIN_LS } from '../../constants/localStorage';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_PATH } from '../../constants/path';
import { useAuth } from '../../hooks/useAuth';
import styled from '@emotion/styled';



export default function Login() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState({type:"", content: ""})
  const navigate = useNavigate()
  const {user, setUser} = useAuth()

  //Add props to styled component: https://viblo.asia/p/tuy-chinh-react-component-voi-styled-components-oOVlYR4v58W
  const MessageWrap = styled.div`
    color: ${props  => props.success ? "green" : "red"}        
`
  useEffect(()=>{
    if(user)
      {
        console.log(user)
        navigate(HOME_PATH)
      }
  }, [])

  const login = async(data) => {
    try {
      const res = await authService.login(data)
      if(res)
        {
          setLocalStorage(LOGIN_LS, res.data)
          console.log(res);
          setLocalStorage('user', res.user)
          setUser(res.user)
          setMessage({type:"success", content: "Login Successfully"})
          navigate(HOME_PATH)
        }
      
    } catch (error) {
      setMessage({type:"error", content: "Email or password is invalid"})
    }
  }

  const onEmailChange = (ev) => {
    data.email = ev.target.value
    setData(data)
  }
  const onPasswordChange = (ev) => {
    data.password = ev.target.value
    setData(data)
  }

  const onLogin = async() => {
    console.log(data);
    const res = await login(data)
    console.log(res)
  }

  return (
    <div id='login-background'>
      <div className='login-form'>
      <div>Login</div>
      <div className='input-field'>
        <label className='input-label'>Email</label>
        <TextField size='small'  onChange={(ev)=>onEmailChange(ev)} autoFocus/>
      </div>
      <div className='input-field'>
        <label className='input-label'>Mật khẩu</label>
      <TextField type='password' size='small'  onChange={(ev)=>onPasswordChange(ev)}/>
      </div>
        <MessageWrap success={message.type === "success"}>{message?.content}</MessageWrap>
      <Button className='login-button' onClick={onLogin} > Log in </Button>
      </div>
    </div>
  )
}

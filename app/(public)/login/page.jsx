"use client"; 
 
import { useDispatch, useSelector } from "react-redux"; 
import { useRouter } from "next/navigation"; 
import "./login.css"; 
 
import { login, setAuth, setUser } from "@/redux/slices/authSlice"; 
import { Button, Form, Input } from "antd"; 
import { request } from "@/server/request"; 
import { useState } from "react"; 
const Login = () => { 
  const {loading, setLoading}=useState(); 
  const { isAuth } = useSelector((state) => state.auth); 
  const dispatch = useDispatch(); 
  const router = useRouter(); 
  async function onFinish(e) { 
    try { 
      const {data:{accesstoken,user}}= await request.post(`auth/login`,e); 
      router.push("/") 
      dispatch(setAuth()) 
      dispatch(setUser(user)) 
      console.log(res); 
    } catch (err) { 
      console.log(err); 
    } 
  } 
 
 
  return ( 
    <section className="all_login"> 
      <h2 className="login_text_center">Login</h2> 
      <div className="Login_inputvs_flex container">  
          <Form className="flex_inpvs" onFinish={onFinish}> 
            <Form.Item className="fr" name="username"> 
              <input 
                type="text" 
                placeholder="username" 
              /> 
            </Form.Item> 
            <Form.Item className="fr" name="password"> 
            <input 
              type="text" 
              placeholder="password" 
               
            />  
            </Form.Item> 
            <button loading={loading} type="primary" htmlType="submit"> 
              Submit 
            </button> 
          </Form> 
      </div> 
    </section> 
  ); 
}; 
 
export default Login;
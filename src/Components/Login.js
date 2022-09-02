import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';



function Login() {

  let navigate=useNavigate();
  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

  return <>
  <div className='row'>
    <div className='col'></div>
    <div className='col gap mt-5'>
    <Form 
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
       
       <Button type="primary" htmlType="submit" onClick={()=>navigate('/markdown')}>
          Login
        </Button>
        <button className='btn btn-success mx-2' onClick={()=>navigate('/signup')}>Signup</button>
       
      </Form.Item>
    </Form>
    </div>
    <div className='col'></div>
  </div>
  
  

  </>
}

export default Login
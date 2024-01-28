import React, { useId } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import api from  '../api/contacts'
import { SetContact, contact } from './types';


type FieldType = {
  name?: string;
  email?: string;
};

const AddContactForm = ({setContacts}:SetContact) => {


  const id = useId()

  
  


  const addContactHandler = async (values: any) => {
    console.log('Success:', values);
    const request  =  {
      id:id,
      ...values
    }

    const response = await api.post("/contacts",request)

    console.log(response)

  };

  // Get failed message
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  
  // Add contact





  return(
      <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={addContactHandler}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>



          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Link to={'/'} >Cancel</Link>
        </Form>
  )



}



export default AddContactForm;
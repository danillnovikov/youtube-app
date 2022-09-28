import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post('https://typ-back-end.herokuapp.com/api/users/register', {
        login: values.email,
        password: values.password,
        isAdmin: false,
      })
      .then((response) => {
        console.log(response);
        if (+response.request.status === 200)
          message.success('Зарегистрирован');
        navigate('/login');
      })
      .catch(() => message.error('Ошибка регистрации'));
  };

  return (
    <div className="home">
      <h1 className="home_title">YouTube App</h1>
      <Form onFinish={onFinish}>
        <label className="lable" htmlFor="username">
          Login
        </label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input id="email" placeholder="email" autoComplete="off"></Input>
        </Form.Item>
        <label className="lable" htmlFor="password">
          Password
        </label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password id="password" placeholder="password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button
            className="input_button registration"
            danger
            htmlType="submit"
          >
            Registration
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;

//daniil@mail.ru
//1234dfghDf!

//sfdsgsd@gmail.com
//12312!Dst

//fdsgfsd@mail.ru
//12312!Dst

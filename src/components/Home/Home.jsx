import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.sass';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="home_title">YouTube App</h1>
      <Button
        type="primary"
        className="input_button"
        onClick={() => navigate('/login')}
        htmlType="submit"
      >
        Вход
      </Button>
      <Button
        type="primary"
        className="registration_button"
        onClick={() => navigate('/registration')}
        htmlType="submit"
      >
        Регистрация
      </Button>
    </div>
  );
};

export default Home;

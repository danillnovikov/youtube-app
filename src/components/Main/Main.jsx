// import { useNavigate } from 'react-router-dom';
import './Main.sass';

const Main = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header_block">
          <img src="" alt="logo" className="header_logo" />
          <a href="#" className="header_text">
            Поиск
          </a>
          <a href="#" className="header_text">
            Избранное
          </a>
        </div>
        <a href="#" className="header_text header_exit">
          Выйти
        </a>
      </header>
    </div>
  );
};

export default Main;

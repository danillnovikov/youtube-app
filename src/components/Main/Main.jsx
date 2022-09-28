import './Main.sass';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  //   console.log(text);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${text}&type=video&order=date&maxResults=5&key=AIzaSyCbTsQhecq1pp2hNFC7d2_qTyj_Ja71hiU`
      )
      .then((data) => setData(data.data.items));
  }, []);

  function req() {
    console.log(data);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header_block">
          {/* <img src="" alt="logo" className="header_logo" /> */}
          <Link to="#" className="header_text">
            Поиск
          </Link>
          <Link to="#" className="header_text">
            Избранное
          </Link>
        </div>
        <Link to="/login" className="header_text header_exit">
          Выйти
        </Link>
      </header>
      <main className="main">
        <h2>Поиск видео</h2>
        <div className="blocks">
          <input
            type="text"
            className="search"
            placeholder="Введите запрос"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <Button onClick={() => req()} type="primary" danger>
            Найти
          </Button>
        </div>
      </main>

      <div>{data.data}</div>
    </div>
  );
};

export default Main;

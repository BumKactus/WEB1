import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src="./images/GPT-4.svg" alt="GPT-4" className="header-logo" />
        <nav className="nav-header">
          <ul className="header-list">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Что такое GPT?</a></li>
            <li><a href="#">Open AI</a></li>
            <li><a href="#">Кейсы</a></li>
            <li><a href="#">Библиотека</a></li>
          </ul>
          <div className="btn desktop-buttons">
            <button className="btn-sign">Войти</button>
            <button className="btn-sign-primary">Регистрация</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
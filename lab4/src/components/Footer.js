import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="section-future">
        <div className="container">
          <div className="section-future-content">
            <h2 className="section-future-title">Хотите Шагнуть в Будущее Раньше Других?</h2>
            <a href="#!" className="section-future-button">Запросить ранний доступ</a>
            <div className="information-future">
              <div className="footer-column">
                <img src="./images/GPT-3.svg" alt="GPT-4 Logo" className="future-img" />
                <p className="light-text">
                  ул. Профессора Поздеева, 13, к.Г,<br />
                  Пермь, Пермский край, 614013<br /><br />
                  Все права защищены
                </p>
              </div>
              <div className="straight-columns">
                <div className="footer-column-link">
                  <h3>Ссылки</h3>
                  <a href="#!">Оверсен</a>
                  <a href="#!">Соц. сети</a>
                  <a href="#!">Счетчики</a>
                  <a href="#!">Контакты</a>
                </div>
                <div className="footer-column-link">
                  <h3>Компания</h3>
                  <a href="#!">Условия использования</a>
                  <a href="#!">Перс. данные</a>
                  <a href="#!">Контакты</a>
                </div>
                <div className="footer-column-link">
                  <h3>Контакты</h3>
                  <a href="#!">ул. Профессора<br />Поздеева, 13, к.Г, Пермь</a>
                  <a href="#!">+7 (342) 2-198-520</a>
                  <a href="#!">info@pstu.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p className="footer-text">© 2023 GPT-3. Все права защищены.</p>
      </footer>
    </>
  );
};

export default Footer;
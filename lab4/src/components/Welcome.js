import React from 'react';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome1">
          <div className="welcome-wrapper">
            <h1 className="welcome-left">Построим Что-нибудь<br />Невероятное с<br />GPT-4 OpenAI</h1>
            <p className="welcome-desk">
              Однако кровать для помощи в путешествии неприятна. Не мысли все 
              осуществляют благословение. Снисхождение ко всему, радость, 
              изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.
            </p>
            <div className="btn-welcome">
              <input type="text" className="Email-welcome" placeholder="Введите Email" />
              <button className="welcome_start">Начать</button>
            </div>
            <div className="people-welcome">
              <img className="people" src="/images/Group 81.svg" alt="People" />
              <a href="#" className="text-people">1,600 человек запросило доступ за последние 24 часа</a>
            </div>
          </div>
          <div className="welcome-image">
            <img src="./images/Header Illustration.png" alt="AI Illustration" />
          </div>
        </div>
        <div className="welcome-web">
          <img src="/images/google.svg" alt="Google" />
          <img src="/images/slack.svg" alt="Slack" />
          <img src="/images/atlassian.svg" alt="Atlassian" />
          <img src="/images/dropbox.svg" alt="Dropbox" />
          <img src="/images/shopify.svg" alt="Shopify" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
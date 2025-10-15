import React from 'react';

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-header">
          <h2>Многое Происходит,<br />Мы Ведем об Этом Блог.</h2>
        </div>
        <div className="blog-grid">
          {/* Большая карточка */}
          <div className="blog-card main-card">
            <img src="./images/RectangleB.svg" alt="Блог пост 1" className="main-card-img" />
            <div className="main-card-content">
              <div className="main-card-text-container">
                <div className="main-card-blog-date">Сентябрь 26, 2021</div>
                <div className="main-card-blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                <a href="#!" className="blog-read-more">Читать полную статью</a>
              </div>
            </div>
          </div>

          {/* Остальные карточки */}
          <div className="blog-card">
            <img src="./images/Rectangle1.svg" alt="Блог пост 2" />
            <div className="blog-content">
              <div className="blog-text-container">
                <div className="blog-date">Сентябрь 26, 2021</div>
                <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                <a href="#!" className="blog-read-more">Читать полную статью</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img src="./images/Rectangle2.svg" alt="Блог пост 3" />
            <div className="blog-content">
              <div className="blog-text-container">
                <div className="blog-date">Сентябрь 26, 2021</div>
                <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                <a href="#!" className="blog-read-more">Читать полную статью</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img src="./images/Rectangle3.svg" alt="Блог пост 4" />
            <div className="blog-content">
              <div className="blog-text-container">
                <div className="blog-date">Сентябрь 26, 2021</div>
                <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                <a href="#!" className="blog-read-more">Читать полную статью</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img src="./images/Rectangle4.svg" alt="Блог пост 5" />
            <div className="blog-content">
              <div className="blog-text-container">
                <div className="blog-date">Сентябрь 26, 2021</div>
                <div className="blog-title">GPT-4 и Openai – это будущее. Давайте разберемся, как это?</div>
                <a href="#!" className="blog-read-more">Читать полную статью</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
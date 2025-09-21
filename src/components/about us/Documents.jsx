import React from 'react';

const Documents = () => {
  return (
    <div>
      <section className="section documents">
        <div className="container container__no-padding">
          <div className="content documents__content">
            <div className="documents__img-wrap">
              <img
                src="https://m.pocketoption.com/themes/2017-09/img/pages/about/mail.png"
                alt="Mail"
                className="documents__img"
              />
            </div>
            <div className="documents__info-wrap">
              <div className="documents__left">
                <h2>Documents</h2>
                <p className="documents__desc"></p>
              </div>
              <div className="documents__right">
                <ul className="documents__list list">
                  <li
                    className="list__item animated fadeInDown"
                    style={{ visibility: 'visible', animationDelay: '0.2s' }}
                  >
                    <a
                      className="list__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li
                    className="list__item animated fadeInDown"
                    style={{ visibility: 'visible', animationDelay: '0.4s' }}
                  >
                    <a
                      className="list__link"
                      href="#"
                    >
                      Information disclosure
                    </a>
                  </li>
                  <li
                    className="list__item animated fadeInDown"
                    style={{ visibility: 'visible', animationDelay: '0.6s' }}
                  >
                    <a
                      className="list__link"
                      href="#"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li
                    className="list__item animated fadeInDown"
                    style={{ visibility: 'visible', animationDelay: '0.8s' }}
                  >
                    <a
                      className="list__link"
                      href="#"
                    >
                      AML and KYC policy
                    </a>
                  </li>
                  <li
                    className="list__item animated fadeInDown"
                    style={{ visibility: 'visible', animationDelay: '1s' }}
                  >
                    <a
                      className="list__link"
                      href="#"
                    >
                      Payment policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;

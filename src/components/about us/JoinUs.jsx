import React from "react";

const JoinUs = () => {
  return (
    <div>
      <section className="section join-us">
        <div className="container">
          <div className="join-us__bg bg">
            <img
              src="https://m.pocketoption.com/themes/2017-09/img/pages/about/join-bg.png"
              alt=""
              className="bg__item bg__item_1"
            />
          </div>
          <div className="content join-us__content">
            <h2>
              Join <span>us</span>
            </h2>
            <p className="join-us__text">
              A trader career with <span>Pocket Option</span> puts you at the
              forefront of innovation in the digital age. Work with the brightest
              minds in business to imagine and invent the future.
            </p>
            <a
              href="https://m.pocketoption.com/en/cabinet/try-demo/"
              className="join-us__btn btn btn_white"
            >
              Try demo in one click
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

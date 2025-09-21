import React from "react";

const JoinUs = () => {
  return (
    <div>
      <style>{`
      .section {
 padding-right: 300px
}

.section_light {
 color: #515151
}

.section_light h2 {
 color: #1e385b
}

.section_dark {
 background-color: #0f1c2b;
 color: #fff
}

.section_white {
 background-color: #fff;
 color: #3a4a68
}

.section_light-blue {
 background-color: #eef2f9;
 color: #3a4a68
}

@media screen and (min-width:2400px) {
 .section {
  padding-right: 0
 }
}

@media screen and (max-width:1279px) {
 .section {
  padding-right: 0
 }
}
 
.page--about-us .join-us {
 background: -webkit-gradient(linear, left top, left bottom, from(#00498c), to(#0089e0));
 background: linear-gradient(180deg, #00498c, #0089e0);
 overflow: hidden;
 position: relative;
 text-align: center
}

.page--about-us .join-us__content {
 position: relative;
 z-index: 3
}

.page--about-us .join-us .bg {
 bottom: 0;
 display: -webkit-box;
 display: flex;
 left: 0;
 position: absolute;
 right: 0;
 top: 0;
 z-index: 2;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 width: 100%
}

.page--about-us .join-us .bg__item_1 {
 margin-left: 6rem;
 margin-top: -25rem
}

.page--about-us .join-us h2 {
 margin-bottom: 2.2rem
}

@media screen and (max-width:550px) {
 .page--about-us .join-us h2 {
  text-align: center
 }
}

.page--about-us .join-us__text {
 margin: 0 auto 3rem;
 max-width: 62rem
}

.page--about-us .join-us__text span {
 font-weight: 700
}

@media screen and (max-width:550px) {
 .page--about-us .join-us__text {
  margin: 0 auto 2rem
 }
}

.page--about-us .join-us__btn {
 min-width: 17rem
}


.join-us__container {
 margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}

.join-us__container__no-padding {
 padding: 0 1.875rem
}

@media screen and (max-width:1000px) {
 .join-us__container__no-padding {
  padding: 0 1.875rem
 }
}

@media screen and (max-width:700px) {
 .join-us__container__no-padding {
  padding: 0 .938rem
 }
}

.join-us__container_small-padding {
 padding: 3.3rem 1.875rem 4.3rem
}

@media screen and (max-width:1000px) {
 .join-us__container_small-padding {
  padding: 3.15rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .join-us__container_small-padding {
  padding: 2.25rem .938rem
 }
}

@media screen and (min-width:2400px) {
 .join-us__container {
  margin-left: auto;
  margin-right: auto
 }
}

@media screen and (max-width:1279px) {
 .join-us__container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .join-us__container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .join-us__container {
  padding: 2.25rem .938rem 2.5rem
 }
}
      `}</style>
      <section className="section join-us">
        <div className="join-us__container">
          <div className="join-us__bg bg">
            <img
              src="https://m.pocketoption.com/themes/2017-09/img/pages/about/join-bg.png"
              alt=""
              className="bg__item bg__item_1"
            />
          </div>
          <div className="content join-us__content text-white">
            <h2>
              Join <span>us</span>
            </h2>
            <p className="join-us__text text-white">
              A trader career with <span>Pocket Option</span> puts you at the
              forefront of innovation in the digital age. Work with the brightest
              minds in business to imagine and invent the future.
            </p>
            <a
              onClick={e=>e.preventDefault()}
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

import React from 'react';
const WhyChooseUs = () => {
  return (
    <div>
      <style>{`
    .section {
 padding-right: 300px
}

.why_section_light {
 color: #515151
}

.why_section_light h2 {
 color: #1e385b
}

.why_section_dark {
 background-color: #0f1c2b;
 color: #fff
}

.why_section_white {
 background-color: #fff;
 color: #3a4a68
}

.why_section_light-blue {
 background-color: #eef2f9;
 color: #3a4a68
}

@media screen and (min-width:2400px) {
 .why_section {
  padding-right: 0
 }
}

@media screen and (max-width:1279px) {
 .why_section {
  padding-right: 0
 }
}


.why-choose-us_container {
//  margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}

.why-choose-us_container__no-padding {
 padding: 0 1.875rem
}

@media screen and (max-width:1000px) {
 .why-choose-us_container__no-padding {
  padding: 0 1.875rem
 }
}

@media screen and (max-width:700px) {
 .why-choose-us_container__no-padding {
  padding: 0 .938rem
 }
}

.why-choose-us_container_small-padding {
 padding: 3.3rem 1.875rem 4.3rem
}

@media screen and (max-width:1000px) {
 .why-choose-us_container_small-padding {
  padding: 3.15rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .why-choose-us_container_small-padding {
  padding: 2.25rem .938rem
 }
}

@media screen and (min-width:2400px) {
 .why-choose-us_container {
  margin-left: auto;
  margin-right: auto
 }
}

@media screen and (max-width:1279px) {
 .why-choose-us_container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .why-choose-us_container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .why-choose-us_container {
  padding: 2.25rem .938rem 2.5rem
 }
}


.content {
 max-width: 93.75rem
}

@media screen and (min-width:1279px) {
 .content {
  max-width: none
 }
}

@media screen and (min-width:2400px) {
 .content {
  margin-left: auto;
  margin-right: auto
 }
}

 .ar-lang .page--about-us .why__left,
 .fa-lang .page--about-us .why__left {
  padding-left: 2rem;
  padding-right: 0
 }
}

@media screen and (max-width:850px) {

 .ar-lang .page--about-us .why__left,
 .fa-lang .page--about-us .why__left {
  padding-left: 0;
  padding-right: 0
 }
}
 
.page--about-us .why__left {
 -webkit-box-flex: 0;
 flex: 0 0 70%;
 max-width: 70%
}

@media screen and (max-width:1000px) {
 .page--about-us .why__left {
  -webkit-box-flex: 0;
  flex: 0 0 63%;
  max-width: 63%;
  padding-right: 2rem
 }
}

@media screen and (max-width:850px) {
 .page--about-us .why__left {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 0
 }
}


    `}</style>
      <section className="why_section why_section_light why max-w-6xl">
        <div className="why-choose-us_container why-choose-us_container_small-padding why__container">
          <div className="content why__content">
            <div className="why__left">
              <h2>
                <span>Why</span> choose us?                    </h2>
              <p className="why__text">
                We started as a small company with a handful of customers. We were new, our services were not as polished and popular as today. By the end of 2017 we had:                    </p>
              <div className="why__list">
                <div className="why__col">
                  <p className="why__num">&gt;<i data-from="0" data-to="100000">100 000</i></p>
                  <p className="why__desc">active users</p>
                </div>
                <div className="why__col">
                  <p className="why__num">&gt;$<i data-from="0" data-to="500000000">500 000 000</i></p>
                  <p className="why__desc">trading turnover</p>
                </div>
                <div className="why__col">
                  <p className="why__num">&gt;<i data-from="0" data-to="95">95</i></p>
                  <p className="why__desc">countries and regions</p>
                </div>
                <div className="why__col">
                  <p className="why__num">$<i data-from="0" data-to="850">850</i>+</p>
                  <p className="why__desc">average trader income per month</p>
                </div>
              </div>
            </div>
            <div className="why__right">
              <div className="why__info info">
                <img src="https://m.pocketoption.com/themes/2017-09/img/pages/about/why-icon.png" alt="" className="info__img" />
                <div className="info__text">
                  <p>
                    The number of active users who appreciate our service increases rapidly.                            </p>
                  <p>
                    By the end of 2018 we hit our first million users mark.                            </p>
                  <p>
                    In 2019 we already had <span>more than 10 million</span> registered users.                            </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
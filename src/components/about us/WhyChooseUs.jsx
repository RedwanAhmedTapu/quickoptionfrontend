import React from 'react';
const WhyChooseUs = () => {
 return (
  <div>
   <section className="section section_light why">
    <div className="container container_small-padding why__container">
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
        <img src="https://m.pocketoption.com/themes/2017-09/img/pages/about/why-icon.png" alt="" className="info__img"/>
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
import React from 'react';
const TopSection = () => {
 return (
  <div classNameName='fa-lang page page--about-us'>
   <style>{`
  .about-us-top-section {
 padding-right: 300px
}

  @media screen and (min-width:2400px) {
 .about-us-top-section {
  padding-right: 0
 }
}

@media screen and (max-width:1279px) {
 .about-us-top-section {
  padding-right: 0
 }
}

.ar-lang .page .top-section .bg,
.fa-lang .page .top-section .bg {
 left: unset;
 right: 0
}

.ar-lang .page .top-section .bg__item_1,
.fa-lang .page .top-section .bg__item_1 {
 left: unset;
 right: 19.5rem;
 -webkit-transform: scaleX(-1);
 transform: scaleX(-1)
}

@media screen and (max-width:1279px) {
 .ar-lang .page .top-section .bg__item_1,
 .fa-lang .page .top-section .bg__item_1 {
  left: -53rem;
  right: unset
 }
}

.page .top-section {
 background: linear-gradient(180deg, #2193b0, #6dd5ed 50%, #2193b0);
 overflow: hidden;
 padding-top: 4.375rem;
 position: relative
}

.page .top-section .bg {
 bottom: 0;
 left: 0;
 position: absolute;
 top: 0;
 width: calc(100% - 18.75rem);
 z-index: 2
}

.page .top-section .bg__item {
 position: absolute;
 top: 50%
}

.page .top-section .bg__item_1 {
 left: 19.5rem;
 margin-top: -19rem
}

@media screen and (max-width:1279px) {
 .page .top-section .bg__item_1 {
  left: unset;
  right: -53rem
 }
}

.page--about-us .top-section .bg__item_1 {
 margin-top: -23rem
}

.about-us-top-container {
 margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}

@media screen and (min-width:2400px) {
 .about-us-top-container {
  margin-left: auto;
  margin-right: auto
 }
}

@media screen and (max-width:1279px) {
 .about-us-top-container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .about-us-top-container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .about-us-top-container {
  padding: 2.25rem .938rem 2.5rem
 }
}

.mobile-block .about-us-top-container {
 padding: 7.5rem 1.875rem 5.1rem
}

.has-pwa-banner .mobile-block .about-us-top-container {
 padding-top: calc(7.5rem + 72px)
}

@media screen and (max-width:1000px) {
 .mobile-block .about-us-top-container {
  padding: 6rem 1.875rem 5.1rem
 }
}

@media screen and (max-width:700px) {
 .mobile-block .about-us-top-container {
  padding-bottom: 4rem;
  padding-left: .935rem;
  padding-right: .935rem
 }
}

.page_dark-blue .page__in>section:first-child .about-us-top-container {
 position: relative
}

.page>.top .about-us-top-container {
 padding: 0 1.875rem 1rem
}

@media screen and (max-width:1000px) {
 .page>.top .about-us-top-container {
  padding: 0 1.875rem 1rem
 }
}

@media screen and (max-width:700px) {
 .page>.top .about-us-top-container {
  padding: 0 .938rem 1rem
 }
}

@media screen and (max-width:550px) {
 .page>.top .about-us-top-container {
  padding: 0 .938rem .5rem
 }
}




.pwa-page .about-us-top-container .bg {
 pointer-events: none;
 position: absolute;
 right: 18.75rem;
 top: 0;
 -webkit-user-select: none;
 -moz-user-select: none;
 user-select: none
}

@media screen and (max-width:1279px) {
 .pwa-page .about-us-top-container .bg {
  right: 0
 }
}

.page .about-us-top-top-section__container {
 padding-top: 3.2rem;
 position: relative
}

.has-pwa-banner .page .about-us-top-top-section__container {
 padding-top: 100px
}

@media only screen and (max-width:1000px) {
 .page .about-us-top-top-section__container {
  padding-top: 2.5rem
 }
}

@media only screen and (max-width:700px) {
 .page .about-us-top-top-section__container {
  padding-top: 1.5rem
 }
}

@media only screen and (max-width:550px) {
 .page .about-us-top-top-section__container {
  padding-top: .5rem
 }
}

.pwa-page .page .about-us-top-top-section__container {
 padding-bottom: 0
}

@media screen and (max-width:1000px) {

 .ar-lang .page--affiliate-program .first-section .bg,
 .fa-lang .page--affiliate-program .first-section .bg {
  left: unset;
  right: 32.563rem
 }
}

@media screen and (max-width:900px) {

 .ar-lang .page--affiliate-program .first-section .bg,
 .fa-lang .page--affiliate-program .first-section .bg {
  left: unset;
  right: 30.563rem
 }
}

@media screen and (max-width:700px) {

 .ar-lang .page--affiliate-program .first-section .bg,
 .fa-lang .page--affiliate-program .first-section .bg {
  left: unset;
  margin-left: 0;
  margin-right: -12.8rem;
  right: 50%
 }
}

.page .top-section .bg {
 bottom: 0;
 left: 0;
 position: absolute;
 top: 0;
 width: calc(100% - 18.75rem);
 z-index: 2
}

.ar-lang .page .top-section .bg__item_1,
.fa-lang .page .top-section .bg__item_1 {
 left: unset;
 right: 19.5rem;
 -webkit-transform: scaleX(-1);
 transform: scaleX(-1)
}

@media screen and (max-width:1279px) {
 .ar-lang .page .top-section .bg__item_1,
 .fa-lang .page .top-section .bg__item_1 {
  left: -53rem;
  right: unset
 }
}

.page .top-section .bg__item {
 position: absolute;
 top: 50%
}

.page .top-section .bg__item_1 {
 left: 19.5rem;
 margin-top: -19rem
}

@media screen and (max-width:1279px) {
 .page .top-section .bg__item_1 {
  left: unset;
  right: -53rem
 }
}

.page--about-us .top-section .bg__item_1 {
 margin-top: -23rem
}

.page--about-us .join-us .bg__item_1 {
 margin-left: 6rem;
 margin-top: -25rem
}

.about-us-top-content {
 max-width: 93.75rem
}

@media screen and (min-width:1279px) {
 .about-us-top-content {
  max-width: none
 }
}

@media screen and (min-width:2400px) {
 .about-us-top-content {
  margin-left: auto;
  margin-right: auto
 }
}

.page .top-section__content {
 position: relative;
 z-index: 3
}

.page--about-us .top-section__content {
 max-width: 62.5rem
}

.top-block .breadcrumbs {
 margin-bottom: 0
}

.top-block .breadcrumbs+p {
 margin-top: 1.875rem
}

@media screen and (max-width:720px) {
 .top-block .breadcrumbs {
  font-size: .875rem
 }
}

.ar-lang .breadcrumbs__item,
.fa-lang .breadcrumbs__item {
 margin-left: 28px;
 margin-right: 0
}

.ar-lang .breadcrumbs__item:before,
.fa-lang .breadcrumbs__item:before {
 left: -1.063rem;
 right: unset
}

.breadcrumbs {
 display: -webkit-box;
 display: flex;
 flex-wrap: wrap;
 -webkit-box-align: center;
 align-items: center;
 color: #96aec1;
 margin-bottom: 4.375rem
}

.breadcrumbs__item {
 font-size: .813rem;
 margin-right: .813rem;
 position: relative
}

.breadcrumbs__item:before {
 content: "/";
 position: absolute;
 right: -.5rem;
 top: 0
}

.breadcrumbs__item:last-child {
 margin-right: 0
}

.breadcrumbs__item:last-child:before {
 display: none
}

.breadcrumbs__link {
 border-bottom: 1px solid #0099fa;
 color: #fff;
 display: block;
 text-decoration: none;
 -webkit-transition: .5s;
 transition: .5s
}

.breadcrumbs__link:hover {
 border-bottom: 1px solid transparent;
 color: #fff
}

@media only screen and (max-width:1000px) {
 .breadcrumbs {
  margin-bottom: 2.375rem
 }
}

@media only screen and (max-width:600px) {
 .breadcrumbs {
  margin-bottom: 1.875rem
 }
}

.page .top-section__title {
 font-size: 3.125rem;
 letter-spacing: 2px;
 margin-bottom: 2rem;
 text-transform: uppercase
}

.page .top-section__title span {
 display: block
}

@media screen and (max-width:1000px) {
 .page .top-section__title {
  font-size: 2.3rem;
  line-height: 2.9rem;
  margin-bottom: 1.5rem
 }
}

@media screen and (max-width:700px) {
 .page .top-section__title {
  font-size: 2rem;
  line-height: 2.5rem
 }
}

@media screen and (max-width:550px) {
 .page .top-section__title {
  font-size: 1.65rem;
  line-height: 2rem
 }
}


.page .top-section__title {
 font-size: 3.125rem;
 letter-spacing: 2px;
 margin-bottom: 2rem;
 color: white;
 font-weight: bold;
 text-transform: uppercase
}

.page .top-section__title span {
 display: block
}

@media screen and (max-width:1000px) {
 .page .top-section__title {
  font-size: 2.3rem;
  line-height: 2.9rem;
  margin-bottom: 1.5rem
 }
}

@media screen and (max-width:700px) {
 .page .top-section__title {
  font-size: 2rem;
  line-height: 2.5rem
 }
}

@media screen and (max-width:550px) {
 .page .top-section__title {
  font-size: 1.65rem;
  line-height: 2rem
 }
}

.page--about-us .top-section__title span {
 display: inline-block
}

.page .top-section__desc {
 margin-bottom: 2.1rem;
 color: white;
}

@media screen and (max-width:1000px) {
 .page .top-section__desc {
 color: white;
  margin-bottom: 2rem;
 }

  `}</style>
   <section className="about-us-top-section top-section">
    <div className="about-us-top-container about-us-top-top-section__container">
     <div className="top-section__bg bg">
      {/* <img src="https://m.pocketoption.com/themes/2017-09/pages/about/about-bg.png" alt="" className="bg__item bg__item_1" /> */}
      <img src="../../../public/images/team-meeting.webp" alt="" className="bg__item bg__item_1" />
      <div className="bg__item bg__item_gradient"></div>
     </div>
     <div className="about-us-top-r
     content top-section__content">
      <div className="breadcrumbs-wrap">
       <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
         <a className="breadcrumbs__link" href="https://m.pocketoption.com/en/">Home</a>
        </li>
        <li className="breadcrumbs__item breadcrumbs__item--active">
         <span className="breadcrumbs__label">About us</span>
        </li>
       </ul>
      </div>

      <h1 className="top-section__title">
       <span>Our mission</span> is to provide the most innovative trading experience
      </h1>
      <p className="top-section__desc">
       Pocket Option was founded in 2017 by a team of talented IT and FinTech specialists who wanted to prove that people don’t need to compromise to earn on financial markets — that trading should be accessible, convenient and more fun
      </p>
      <p className="top-section__desc">
       Today, we continue to develop, improve and constantly innovate trading experience. We do believe that trading should be available to anyone in the world.
      </p>
     </div>
    </div>
   </section>
  </div>
 );
};

export default TopSection;
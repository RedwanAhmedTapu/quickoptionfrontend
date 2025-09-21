import React from "react";

const WebApps = () => {
 return (
  <div>
   <style>{`
     .applications {
 background-color: #fff;
 padding-bottom: 1rem
}

.applications__in {
 position: relative
}

.applications__in h2 {
 margin-bottom: 5rem;
 max-width: 32rem
}

@media screen and (max-width:1000px) {
 .applications__in h2 {
  margin-bottom: 3rem
 }
}

@media screen and (max-width:750px) {
 .applications__in h2 {
  margin-bottom: 2rem
 }
}

.applications__in .devices {
 display: grid;
 gap: 20px;
 grid-template-columns: repeat(4, 1fr);
 max-width: calc(62% + 1.2rem)
}

.applications__in .devices__item {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
 flex-direction: column
}

.applications__in .devices__top {
 -webkit-box-flex: 1;
 background-color: #eef2f9;
 border-radius: .75rem;
 color: #1e385b;
 flex-grow: 1;
 margin-bottom: 1.2rem;
 padding: 2rem 0 1rem;
 text-align: center;
 -webkit-transition: .5s;
 transition: .5s;
 width: 100%
}

@media screen and (max-width:1000px) {
 .applications__in .devices__top {
  padding: 1.6rem 0 .6rem
 }
}

@media screen and (max-width:700px) {
 .applications__in .devices__top {
  margin-bottom: 1rem
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices__top {
  margin-bottom: 0
 }
}

.applications__in .devices .svg-icon {
 height: 64px;
 margin: 0 auto 24px;
 width: 64px
}

@media screen and (max-width:1000px) {
 .applications__in .devices .svg-icon {
  height: 58px;
  width: 58px
 }
}

.applications__in .devices__btn {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
 flex-direction: column;
 -webkit-box-align: center;
 align-items: center;
 height: 100%;
 text-decoration: none;
 -webkit-transition: .5s;
 transition: .5s
}

.applications__in .devices__btn:hover .devices__link {
 color: #0099fa
}

.applications__in .devices__title {
 font-weight: 300;
 padding: 0 5px
}

@media screen and (max-width:950px) {
 .applications__in .devices__title {
  font-size: 85%
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices__title {
  font-size: 100%
 }
}

.applications__in .devices__link {
 border-bottom: 1px solid #0099fa;
 color: #1e385b;
 display: inline-block;
 -webkit-transition: .5s;
 transition: .5s
}

@media screen and (max-width:550px) {
 .applications__in .devices__link {
  display: none
 }
}

@media screen and (max-width:1000px) {
 .applications__in .devices {
  max-width: calc(66.6% + .65rem)
 }
}

@media screen and (max-width:950px) {
 .applications__in .devices {
  gap: 10px
 }
}

@media screen and (max-width:850px) {
 .applications__in .devices {
  max-width: calc(100% + .65rem)
 }
}

@media screen and (max-width:700px) {
 .applications__in .devices {
  font-size: .95rem
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices {
  gap: 16px;
  grid-template-columns: repeat(2, 1fr)
 }
}

@media screen and (max-width:360px) {
 .applications__in .devices {
  gap: 10px
 }
}

.applications .phone {
 opacity: 0;
 position: absolute;
 right: 0;
 -webkit-transform: translateY(100px);
 transform: translateY(100px);
 -webkit-transform-origin: bottom center;
 transform-origin: bottom center;
 -webkit-transition: 1.5s;
 transition: 1.5s;
 visibility: hidden;
 width: 15.625rem
}

.applications .phone img,
.applications .phone source {
 max-width: 100%
}

.applications .phone_iphone {
 right: 10rem;
 top: 5rem;
 z-index: 3
}

@media screen and (max-width:1000px) {
 .applications .phone_iphone {
  right: 2rem
 }
}

@media screen and (max-width:850px) {
 .applications .phone_iphone {
  display: none
 }
}

.applications .phone_android {
 right: 0;
 top: 2rem;
 z-index: 2
}

@media screen and (max-width:1000px) {
 .applications .phone_android {
  right: -4rem
 }
}

@media screen and (max-width:850px) {
 .applications .phone_android {
  display: none
 }
}

.applications .phone.fadeInUpPhone {
 -webkit-animation: fade-in-up-phone 1s ease forwards;
 animation: fade-in-up-phone 1s ease forwards
}

@media screen and (max-width:1000px) {
 .applications .phone {
  width: 11.625rem
 }
}

@media screen and (max-width:850px) {
 .applications .phone {
  display: none !important
 }
}

@media screen and (max-width:700px) {
 .applications {
  padding-bottom: 0
 }
}

.webapps-container {
 margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}

.webapps-container__no-padding {
 padding: 0 1.875rem
}

@media screen and (max-width:1000px) {
 .webapps-container__no-padding {
  padding: 0 1.875rem
 }
}

@media screen and (max-width:700px) {
 .webapps-container__no-padding {
  padding: 0 .938rem
 }
}

.webapps-container_small-padding {
 padding: 3.3rem 1.875rem 4.3rem
}

@media screen and (max-width:1000px) {
 .webapps-container_small-padding {
  padding: 3.15rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .webapps-container_small-padding {
  padding: 2.25rem .938rem
 }
}

@media screen and (min-width:2400px) {
 .webapps-container {
  margin-left: auto;
  margin-right: auto
 }
}

@media screen and (max-width:1279px) {
 .webapps-container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .webapps-container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .webapps-container {
  padding: 2.25rem .938rem 2.5rem
 }
}
 .webapps-content {
 max-width: 93.75rem
}

@media screen and (min-width:1279px) {
 .webapps-content {
  max-width: none
 }
}

@media screen and (min-width:2400px) {
 .webapps-content {
  margin-left: auto;
  margin-right: auto
 }
}
 .ar-lang .applications__in .devices__title,
.fa-lang .applications__in .devices__title {
 padding: 0 10px
}
 
.applications__in .devices {
 display: grid;
 gap: 20px;
 grid-template-columns: repeat(4, 1fr);
 max-width: calc(62% + 1.2rem)
}

.applications__in .devices__item {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
 flex-direction: column
}

.applications__in .devices__top {
 -webkit-box-flex: 1;
 background-color: #eef2f9;
 border-radius: .75rem;
 color: #1e385b;
 flex-grow: 1;
 margin-bottom: 1.2rem;
 padding: 2rem 0 1rem;
 text-align: center;
 -webkit-transition: .5s;
 transition: .5s;
 width: 100%
}

@media screen and (max-width:1000px) {
 .applications__in .devices__top {
  padding: 1.6rem 0 .6rem
 }
}

@media screen and (max-width:700px) {
 .applications__in .devices__top {
  margin-bottom: 1rem
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices__top {
  margin-bottom: 0
 }
}

.applications__in .devices .svg-icon {
 height: 64px;
 margin: 0 auto 24px;
 width: 64px
}

@media screen and (max-width:1000px) {
 .applications__in .devices .svg-icon {
  height: 58px;
  width: 58px
 }
}

.applications__in .devices__btn {
 display: -webkit-box;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
 flex-direction: column;
 -webkit-box-align: center;
 align-items: center;
 height: 100%;
 text-decoration: none;
 -webkit-transition: .5s;
 transition: .5s
}

.applications__in .devices__btn:hover .devices__link {
 color: #0099fa
}

.applications__in .devices__title {
 font-weight: 300;
 padding: 0 5px
}

@media screen and (max-width:950px) {
 .applications__in .devices__title {
  font-size: 85%
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices__title {
  font-size: 100%
 }
}

.applications__in .devices__link {
 border-bottom: 1px solid #0099fa;
 color: #1e385b;
 display: inline-block;
 -webkit-transition: .5s;
 transition: .5s
}

@media screen and (max-width:550px) {
 .applications__in .devices__link {
  display: none
 }
}

@media screen and (max-width:1000px) {
 .applications__in .devices {
  max-width: calc(66.6% + .65rem)
 }
}

@media screen and (max-width:950px) {
 .applications__in .devices {
  gap: 10px
 }
}

@media screen and (max-width:850px) {
 .applications__in .devices {
  max-width: calc(100% + .65rem)
 }
}

@media screen and (max-width:700px) {
 .applications__in .devices {
  font-size: .95rem
 }
}

@media screen and (max-width:550px) {
 .applications__in .devices {
  gap: 16px;
  grid-template-columns: repeat(2, 1fr)
 }
}

@media screen and (max-width:360px) {
 .applications__in .devices {
  gap: 10px
 }
}

.pwa-page .devices-wrap {
 display: -webkit-box;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 margin-bottom: 50px
}

.pwa-page .devices {
 display: grid;
 gap: 24px;
 grid-template-columns: 200px 200px;
 z-index: 1
}

.pwa-page .devices__item {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: center;
 border: 1px solid #96aec1;
 border-radius: 10px;
 color: #96aec1;
 cursor: pointer;
 font-size: 14px;
 font-weight: 600;
 justify-content: center;
 min-height: 44px;
 -webkit-transition: background-color .3s, border-color .3s, color .3s;
 transition: background-color .3s, border-color .3s, color .3s
}

.pwa-page .devices__item svg {
 margin-right: 10px
}

.pwa-page .devices__item:hover:not(.devices__item--active) {
 border-color: #fff;
 color: #fff
}

.pwa-page .devices__item--active {
 background-color: #0099fa;
 border-color: #0099fa;
 color: #fff
}

.pwa-page .devices__item--active svg {
 color: #fff
}

html[dir=rtl] .pwa-page .devices__item svg {
 margin-left: 10px;
 margin-right: 0
}
 @media screen and (max-width:460px) {
 .pwa-page .devices {
  flex-basis: 100%;
  gap: 12px;
  grid-template-columns: 1fr 1fr
 }
}

@media screen and (max-width:360px) {
 .pwa-page .devices {
  grid-template-columns: 1fr
 }
}

.applications .phone.fadeInUpPhone {
 -webkit-animation: fade-in-up-phone 1s ease forwards;
 animation: fade-in-up-phone 1s ease forwards
}

.ar-lang .applications .phone_android,
.fa-lang .applications .phone_android {
 left: 0;
 right: unset
}

@media screen and (max-width:1000px) {

 .ar-lang .applications .phone_android,
 .fa-lang .applications .phone_android {
  left: -4rem;
  right: unset
 }
}
 .applications .phone_android {
 right: 0;
 top: 2rem;
 z-index: 2
}

@media screen and (max-width:1000px) {
 .applications .phone_android {
  right: -4rem
 }
}

@media screen and (max-width:850px) {
 .applications .phone_android {
  display: none
 }
  .ar-lang .btn,
.fa-lang .btn {
 font-family: inherit
}

`}</style>
   <section className="section section_light applications">
    <div className="webapps-container">
     <div className="webapps-content applications__in">
      <h2>Web application for any device</h2>
      <ul className="devices">
       <li className="devices__item">
        <a
         href="https://pomain.onelink.me/PuH1?af_js_web=true&amp;af_ss_ver=2_9_3&amp;pid=web_to_app&amp;from_alanbase=0&amp;web2app=web2app&amp;afsite_id=web2app&amp;af_ss_ui=true"
         target="_blank"
         className="devices__btn devices__btn_ios js-android-link js-google-play-main-app"
         data-name="svg-link"
         data-layout='{"event":"gtm_events","ga4_event_name":"go_to_store_from_main","store_name":"android"}'
         rel="noopener noreferrer"
        >
         <div className="devices__top">
          <svg
           className="svg-icon android"
           viewBox="0 0 64 64"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M5.16142 6.84262C5 7.32688 5 7.97257 5 8.61825V54.6232C5 55.2689 5 55.7531 5.16142 56.3988L30.9887 31.0557L5.16142 6.84262Z"
            fill="currentColor"
            className="android__layer-1"
           />
           <path
            d="M30.1816 31.54L43.0953 18.7878L15.1695 2.96852C14.2009 2.32284 12.9096 2 11.6182 2C8.55121 2 5.80706 4.09847 5.16138 6.84262L30.1816 31.54Z"
            fill="currentColor"
            className="android__layer-2"
           />
           <path
            d="M30.0202 30.2486L5.16138 56.2374C5.96848 58.9815 8.55121 61.08 11.6182 61.08C12.9096 61.08 14.0395 60.7572 15.008 60.1115L43.0953 44.1308L30.0202 30.2486Z"
            fill="currentColor"
            className="android__layer-3"
           />
           <path
            d="M55.2018 25.7288L43.0952 18.7877L29.5359 30.7328L43.2567 44.1308L55.3632 37.3511C57.4617 36.2211 58.9145 33.9612 58.9145 31.5399C58.753 29.1186 57.3003 26.8587 55.2018 25.7288Z"
            fill="currentColor"
            className="android__layer-4"
           />
          </svg>
          <p className="devices__title">Android</p>
         </div>
         <div className="devices__link">Download</div>
        </a>
       </li>

       <li className="devices__item">
        <a
         href="https://poa.onelink.me/RCtj?af_js_web=true&amp;af_ss_ver=2_9_3&amp;pid=web_to_app&amp;c=apk&amp;from_alanbase=0&amp;web2app=web2app&amp;afsite_id=web2app&amp;af_ss_ui=true"
         target="_blank"
         className="devices__btn devices__btn_ios js-apk-link js-apk-main-app"
         data-name="svg-link"
         data-layout='{"event":"gtm_events","ga4_event_name":"go_to_store_from_main","store_name":"apk"}'
         rel="noopener noreferrer"
        >
         <div className="devices__top">
          <svg
           className="svg-icon apk"
           viewBox="0 0 64 64"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.73002 57.3854C12.5367 61.5382 18.6635 61.5382 30.917 61.5382H33.0832C45.3367 61.5382 51.4635 61.5382 55.2701 57.3854C59.0768 53.2328 59.0768 46.5488 59.0768 33.1813V30.8183C59.0768 17.4507 59.0768 10.7669 55.2701 6.61418C51.4635 2.46167 45.3367 2.46167 33.0832 2.46167H30.917C18.6635 2.46167 12.5367 2.46167 8.73002 6.61418C4.92334 10.7669 4.92334 17.4507 4.92334 30.8183V33.1813C4.92334 46.5488 4.92334 53.2328 8.73002 57.3854ZM31.6041 38.6159C31.8603 38.7218 32.1279 38.7747 32.4068 38.7747C32.6856 38.7747 32.9532 38.7218 33.2094 38.6159C33.4657 38.5099 33.6984 38.3593 33.9075 38.1638L41.3612 30.7491C41.7945 30.3158 42.0132 29.8125 42.0173 29.2391C42.0214 28.6657 41.8109 28.1624 41.3857 27.7291C40.9361 27.2958 40.4238 27.0747 39.8488 27.0658C39.2738 27.0569 38.7794 27.269 38.3657 27.7023L34.5452 31.5228V16.8975C34.5452 16.3009 34.3371 15.797 33.9209 15.3859C33.5047 14.9748 32.9998 14.7693 32.4062 14.7693C31.8126 14.7693 31.3113 14.9748 30.9023 15.3859C30.4933 15.797 30.2888 16.3009 30.2888 16.8975V31.5228L26.5196 27.7023C26.0863 27.269 25.585 27.0503 25.0157 27.0462C24.4464 27.0422 23.9369 27.2568 23.4873 27.6901C23.0704 28.1152 22.8554 28.6172 22.8424 29.1963C22.8294 29.7753 23.0354 30.2758 23.4606 30.6979L30.9265 38.1638C31.122 38.3593 31.3478 38.5099 31.6041 38.6159ZM18.4673 46.359C19.2915 47.1884 20.2933 47.603 21.4728 47.603H43.3446C44.5241 47.603 45.5287 47.1884 46.3585 46.359C47.1882 45.5296 47.6031 44.5255 47.6031 43.3466V41.7825C47.6031 41.1859 47.395 40.682 46.9788 40.2709C46.5626 39.8598 46.0577 39.6543 45.4641 39.6543C44.8705 39.6543 44.3692 39.8598 43.9602 40.2709C43.5512 40.682 43.3467 41.1859 43.3467 41.7825V43.3466H21.4873V41.7825C21.4873 41.1859 21.2792 40.682 20.863 40.2709C20.4468 39.8598 19.9419 39.6543 19.3483 39.6543C18.7547 39.6543 18.2534 39.8598 17.8444 40.2709C17.4354 40.682 17.2309 41.1859 17.2309 41.7825V43.3466C17.2309 44.5255 17.643 45.5296 18.4673 46.359Z"
            fill="currentColor"
           />
          </svg>
          <p className="devices__title">Apk Download</p>
         </div>
         <div className="devices__link">Download</div>
        </a>
       </li>

       {/* Repeat for Web App and Telegram sections as above (unchanged except className/style fix) */}
      </ul>

      <div className="phone-container">
       <picture
        className="phone phone_android animated fadeInUpPhone"
        style={{ visibility: "visible", animationDelay: "0.3s" }}
       >
        <source
         data-srcset="/themes/2017-09/img/apps/android-img.avif"
         type="image/avif"
         srcSet="/themes/2017-09/img/apps/android-img.avif"
        />
        <source
         data-srcset="/themes/2017-09/img/apps/android-img.webp 1x, /themes/2017-09/img/apps/android-img@2x.webp 2x"
         type="image/webp"
         srcSet="/themes/2017-09/img/apps/android-img.webp 1x, /themes/2017-09/img/apps/android-img@2x.webp 2x"
        />
        <source
         data-srcset="/themes/2017-09/img/apps/android-img.png 1x, /themes/2017-09/img/apps/android-img@2x.png 2x"
         type="image/png"
         srcSet="/themes/2017-09/img/apps/android-img.png 1x, /themes/2017-09/img/apps/android-img@2x.png 2x"
        />
        <img
         data-src="/themes/2017-09/img/apps/android-img.png?v=1"
         data-srcset="/themes/2017-09/img/apps/android-img.png?v=1 1x, /themes/2017-09/img/apps/android-img@2x.png?v=1 2x"
         alt="Android"
         className="lazyloaded"
         srcSet="/themes/2017-09/img/apps/android-img.png?v=1 1x, /themes/2017-09/img/apps/android-img@2x.png?v=1 2x"
         src="/themes/2017-09/img/apps/android-img.png?v=1"
        />
       </picture>

       <picture
        className="phone phone_iphone animated fadeInUpPhone"
        style={{ visibility: "visible", animationDelay: "0s" }}
       >
        <source
         data-srcset="/themes/2017-09/img/apps/iphone-img.avif"
         type="image/avif"
         srcSet="/themes/2017-09/img/apps/iphone-img.avif"
        />
        <source
         data-srcset="/themes/2017-09/img/apps/iphone-img.webp?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.webp?v=1 2x"
         type="image/webp"
         srcSet="/themes/2017-09/img/apps/iphone-img.webp?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.webp?v=1 2x"
        />
        <source
         data-srcset="/themes/2017-09/img/apps/iphone-img.png?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.png?v=1 2x"
         type="image/png"
         srcSet="/themes/2017-09/img/apps/iphone-img.png?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.png?v=1 2x"
        />
        <img
         data-src="/themes/2017-09/img/apps/iphone-img.png?v=1"
         data-srcset="/themes/2017-09/img/apps/iphone-img.png?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.png?v=1 2x"
         alt="Iphone"
         className="lazyloaded"
         srcSet="/themes/2017-09/img/apps/iphone-img.png?v=1 1x, /themes/2017-09/img/apps/iphone-img@2x.png?v=1 2x"
         src="/themes/2017-09/img/apps/iphone-img.png?v=1"
        />
       </picture>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default WebApps;

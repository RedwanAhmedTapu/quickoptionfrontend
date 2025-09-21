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
      <h2 className="text-[46px] font-semibold mb-10">Web application for any device</h2>
     <div className="webapps-content applications__in flex items-start justify-evenly">
      <ul className="devices mr-0">
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

       <li className="devices__item">
        <a href="https://m.pocketoption.com/en/cabinet/try-demo/" target="_blank" className="devices__btn devices__btn_ios js-web-link" data-name="svg-link" data-layout="{&quot;event&quot;:&quot;gtm_events&quot;,&quot;ga4_event_name&quot;:&quot;go_to_store_from_main&quot;,&quot;store_name&quot;:&quot;web&quot;}">
         <div className="devices__top">
          <svg className="svg-icon web" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1814 61.5384H30.8183C17.4508 61.5384 10.767 61.5384 6.61419 57.3856C2.46143 53.2329 2.46143 46.5489 2.46143 33.1814V30.8183C2.46143 17.4506 2.46142 10.7668 6.61419 6.61408C10.767 2.46155 17.4508 2.46155 30.8183 2.46155H33.1814C46.5489 2.46155 53.2328 2.46155 57.3854 6.61408C61.5383 10.7668 61.5383 17.4506 61.5383 30.8183V33.1814C61.5383 46.5489 61.5383 53.2329 57.3854 57.3856C53.2328 61.5384 46.5489 61.5384 33.1814 61.5384ZM32.9846 56.6152H31.0154C19.8758 56.6152 14.3059 56.6152 10.8453 53.8467C7.38464 51.0782 7.38464 46.6222 7.38464 37.7106L7.38454 22.1521C7.3845 19.4331 9.58729 17.2307 12.3062 17.2307L51.6932 17.2307C54.4121 17.2307 56.6153 19.4331 56.6153 22.152V37.7106C56.6153 46.6222 56.6153 51.0782 53.1546 53.8467C49.6941 56.6152 44.1242 56.6152 32.9846 56.6152ZM27.0768 9.84615C28.4355 9.84615 29.5383 10.9489 29.5383 12.3077C29.5383 13.6665 28.4355 14.7692 27.0768 14.7692C25.718 14.7692 24.6152 13.6665 24.6152 12.3077C24.6152 10.9489 25.718 9.84615 27.0768 9.84615ZM22.1537 12.3077C22.1537 10.949 21.0509 9.8462 19.6922 9.8462C18.3334 9.8462 17.2306 10.949 17.2306 12.3077C17.2306 13.6665 18.3334 14.7693 19.6922 14.7693C21.0509 14.7693 22.1537 13.6665 22.1537 12.3077ZM14.7691 12.3078C14.7691 10.949 13.6663 9.84621 12.3076 9.84621C10.9488 9.84621 9.84603 10.949 9.84603 12.3078C9.84603 13.6665 10.9488 14.7693 12.3076 14.7693C13.6663 14.7693 14.7691 13.6665 14.7691 12.3078Z" fill="currentColor"></path>
           <path d="M19.5029 30.1064C19.5029 29.479 20.0116 28.9703 20.639 28.9703C21.2665 28.9703 21.7751 29.479 21.7751 30.1064V48.2839C21.7751 48.9114 21.2665 49.42 20.639 49.42C20.0116 49.42 19.5029 48.9114 19.5029 48.2839V30.1064Z" fill="currentColor"></path>
           <path d="M30.8638 23.2899C30.8638 22.6625 31.3724 22.1538 31.9999 22.1538C32.6273 22.1538 33.136 22.6625 33.136 23.2899V46.0118C33.136 46.6392 32.6273 47.1479 31.9999 47.1479C31.3724 47.1479 30.8638 46.6392 30.8638 46.0118V23.2899Z" fill="currentColor"></path>
           <path d="M42.2249 32.3787C42.2249 31.7513 42.7335 31.2426 43.3609 31.2426C43.9884 31.2426 44.497 31.7513 44.497 32.3787V50.5562C44.497 51.1836 43.9884 51.6923 43.3609 51.6923C42.7335 51.6923 42.2249 51.1836 42.2249 50.5562V32.3787Z" fill="currentColor"></path>
           <path d="M17.2307 34.7454C17.2307 34.0657 17.7817 33.5146 18.4615 33.5146H22.8165C23.4962 33.5146 24.0473 34.0657 24.0473 34.7454V45.917C24.0473 46.5967 23.4962 47.1478 22.8165 47.1478H18.4615C17.7817 47.1478 17.2307 46.5967 17.2307 45.917V34.7454Z" fill="currentColor"></path>
           <path d="M28.5916 27.9289C28.5916 27.2492 29.1426 26.6981 29.8223 26.6981H34.1773C34.8571 26.6981 35.4081 27.2492 35.4081 27.9289V43.6448C35.4081 44.3246 34.8571 44.8756 34.1773 44.8756H29.8223C29.1426 44.8756 28.5916 44.3246 28.5916 43.6448V27.9289Z" fill="currentColor"></path>
           <path d="M39.9526 37.0177C39.9526 36.338 40.5037 35.7869 41.1834 35.7869H45.5384C46.2182 35.7869 46.7692 36.338 46.7692 37.0177V48.1893C46.7692 48.869 46.2182 49.42 45.5384 49.42H41.1834C40.5037 49.42 39.9526 48.869 39.9526 48.1893V37.0177Z" fill="currentColor"></path>
          </svg>
          <p className="devices__title">
           Web App                                        </p>
         </div>
         <div className="devices__link">Open</div>
        </a>
       </li>

       <li className="devices__item">
        <a href="https://m.pocketoption.com/cabinet/telegram/link" target="_blank" className="devices__btn devices__btn_ios js-tg-link" data-name="svg-link" data-layout="{&quot;event&quot;:&quot;gtm_events&quot;,&quot;ga4_event_name&quot;:&quot;go_to_store_from_main&quot;,&quot;store_name&quot;:&quot;telegram&quot;}">
         <div className="devices__top">
          <svg className="svg-icon tg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M61.5383 31.9986C61.5383 48.3122 48.3135 61.537 31.9998 61.537C15.6862 61.537 2.46143 48.3122 2.46143 31.9986C2.46143 15.685 15.6862 2.46021 31.9998 2.46021C48.3135 2.46021 61.5383 15.685 61.5383 31.9986ZM33.0584 24.2668C30.1853 25.4618 24.4433 27.9351 15.8322 31.6868C14.4339 32.2429 13.7014 32.7868 13.6347 33.3187C13.5221 34.2177 14.6478 34.5717 16.1807 35.0537C16.3892 35.1193 16.6053 35.1872 16.8268 35.2592C18.335 35.7494 20.3637 36.323 21.4184 36.3458C22.3751 36.3664 23.4429 35.972 24.6217 35.1625C32.6673 29.7316 36.8205 26.9865 37.0812 26.9273C37.2652 26.8855 37.5201 26.833 37.6928 26.9866C37.8655 27.1401 37.8485 27.4308 37.8302 27.5088C37.7187 27.9842 33.2998 32.0924 31.0131 34.2184C30.3002 34.8811 29.7945 35.3513 29.6911 35.4586C29.4595 35.6992 29.2235 35.9267 28.9967 36.1453C27.5956 37.496 26.5449 38.5089 29.0549 40.163C30.2611 40.9579 31.2263 41.6152 32.1893 42.271C33.2409 42.9871 34.2898 43.7014 35.6469 44.591C35.9926 44.8177 36.3229 45.0531 36.6445 45.2824C37.8683 46.1548 38.9678 46.9387 40.3262 46.8137C41.1155 46.7411 41.9308 45.9989 42.3449 43.7853C43.3234 38.554 45.2469 27.2194 45.6914 22.5487C45.7304 22.1395 45.6814 21.6158 45.642 21.3859C45.6027 21.156 45.5205 20.8284 45.2216 20.586C44.8677 20.2988 44.3214 20.2382 44.077 20.2425C42.966 20.2621 41.2615 20.8548 33.0584 24.2668Z" fill="currentColor"></path>
          </svg>
          <p className="devices__title">
           Telegram bot                                        </p>
         </div>
         <div className="devices__link">Subscribe</div>
        </a>
       </li>

       {/* Repeat for Web App and Telegram sections as above (unchanged except className/style fix) */}
      </ul>

      <div className="phone-container flex">
       <img alt="Iphone" className=" ls-is-cached lazyloaded phone_iphone animated fadeInUpPhone" style={{ visibility: "visible", animationDelay: "0s" }} src="../../public/images/iphone-img.avif" />
       <img alt="Android" className=" ls-is-cached lazyloaded phone_android animated fadeInUpPhone" src="../../public/images/android-img.avif" />
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default WebApps;



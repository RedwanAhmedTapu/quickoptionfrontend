import React from 'react';
import '../styles/styles.css';
const Navbar = () => {
 return (
  <div class="content">
   <a href="https://m.pocketoption.com/en/" class="header__logo logo ">
    <svg width="210" height="30" viewBox="0 0 210 30" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M18.764 1.39412C23.7097 3.48874 27.0949 7.94781 27.0949 13.0956C27.0949 18.2456 23.7085 22.7046 18.7628 24.7971C13.8182 22.7046 10.4307 18.2456 10.4307 13.0956C10.4307 7.94676 13.8182 3.48769 18.764 1.39412Z" fill="#002ED9"></path>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7699 1.3964C20.4838 0.486105 22.4389 0 24.5067 0C31.6944 0 37.5293 5.86913 37.5293 13.099C37.5293 20.3278 31.6944 26.1969 24.5067 26.1969C22.4389 26.1969 20.4838 25.7118 18.7688 24.8005C23.0912 22.7069 26.0525 18.2478 26.0525 13.099C26.0525 7.9501 23.0923 3.49102 18.7699 1.3964Z" fill="#0099FA"></path>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7605 24.7994C17.0455 25.7108 15.0894 26.1969 13.0226 26.1969H5.33701L1.87782 29.6764C1.56363 29.9924 1.09079 30.0869 0.679524 29.9158C0.268261 29.7446 0 29.3415 0 28.8931V1.69039C0 0.757003 0.75259 0 1.68054 0H13.0644C15.1175 0.0062996 17.059 0.492421 18.7615 1.39641C14.438 3.48998 11.4767 7.94905 11.4767 13.0979C11.4767 18.2479 14.438 22.7069 18.7605 24.7994Z" fill="#1A4DDE"></path>
     <path fill-rule="evenodd" clip-rule="evenodd" class="logo__letter-1" d="M110.169 21.9951C106.412 21.9215 103.388 18.8753 103.388 15.1092C103.388 11.342 106.423 8.28383 110.169 8.28383C113.914 8.28383 116.961 11.342 116.961 15.1092C116.961 15.4902 116.928 15.8637 116.873 16.2285H106.74C107.177 17.8122 108.607 18.9662 110.223 19.0063C111.741 19.003 113.008 18.6371 114.012 17.7505L116.033 19.8539C115.923 19.974 115.803 20.0888 115.683 20.197C114.318 21.4474 112.429 21.9973 110.169 21.9951ZM128.143 20.8076L127.684 21.0555C124.43 22.8655 120.084 22.138 119.909 17.7505L119.876 16.8964V11.25H117.736V8.55879H119.964L120.215 3.97754H123.098V8.55879H126.439V11.25H123.098V17.1357H123.109C123.098 19.423 124.91 19.1676 125.893 18.5397L128.143 20.8076ZM86.8877 20.9776C85.8722 21.5848 84.6928 21.9345 83.4261 21.9345C79.6806 21.9345 76.634 18.8753 76.634 15.1092C76.634 11.342 79.6806 8.28383 83.4261 8.28383C84.6819 8.28383 85.8612 8.62916 86.8768 9.23213C87.2917 9.47894 88.1107 10.1176 88.613 10.9793L86.3636 13.1898C85.7739 12.0326 84.7037 11.2521 83.4261 11.2521C81.5151 11.2521 80.1173 12.9798 80.1173 15.1092C80.1173 17.2374 81.5151 18.9662 83.4261 18.9662C84.7037 18.9662 85.7739 18.1857 86.3636 17.0274L88.613 19.2347C88.1107 20.0931 87.2917 20.7297 86.8768 20.9765L86.8877 20.9776ZM68.2257 8.28383C71.9712 8.28383 75.007 11.342 75.007 15.1092C75.007 18.8753 71.9712 21.9345 68.2257 21.9345C64.4802 21.9345 61.4336 18.8753 61.4336 15.1092C61.4336 11.342 64.4802 8.28383 68.2257 8.28383ZM93.7999 13.9898L95.6236 11.6819L98.7029 8.54472H103.158L97.0212 14.8656L103.671 21.7223H99.2161L94.7936 17.1627L94.0948 17.7278L94.0838 21.7223H90.7642V3.97754H94.0838V10.2962L93.7999 13.9898ZM53.1236 3.97754C56.9019 3.97754 59.9594 7.39724 59.9594 11.1947C59.9594 11.1958 59.9594 11.198 59.9594 11.2002C59.9594 14.9966 56.9019 18.57 53.1236 18.57H50.6229V21.7223H46.8447V3.97754H53.1236ZM68.2257 11.2521C70.1257 11.2521 71.4908 12.9798 71.4908 15.1092C71.4908 17.2374 70.1257 18.9662 68.2257 18.9662C66.3147 18.9662 64.8952 17.2374 64.8952 15.1092C64.8952 12.9798 66.3147 11.2521 68.2257 11.2521ZM56.2248 11.1958C56.2248 9.30898 54.8271 7.43837 52.9598 7.43837H50.6229V15.1092H52.9598C54.8271 15.1092 56.2248 13.4388 56.2248 11.1991V11.1958ZM113.565 13.9898C113.128 12.4061 111.73 11.2002 110.169 11.2002C108.618 11.2002 107.177 12.4061 106.74 13.9898H113.565Z" fill="currentColor"></path>
     <path fill-rule="evenodd" clip-rule="evenodd" class="logo__letter-2" d="M152.103 10.151C153.337 8.96567 155.007 8.23821 156.853 8.23821C160.653 8.23821 163.743 11.3429 163.743 15.1675C163.743 18.992 160.653 22.0967 156.853 22.0967C155.007 22.0967 153.337 21.3693 152.103 20.185V26.5557H149.963V8.60194H152.103V10.151ZM174.292 21.0207L173.822 21.2675C170.525 23.1056 166.932 22.0144 166.768 17.7547V10.5126H164.278V8.61601H166.768V3.89511H168.908V8.61601H172.73V10.5126H168.908V17.3477C168.908 20.6559 171.595 20.4026 172.698 19.4196L174.292 21.0207ZM187.876 8.23821C191.676 8.23821 194.766 11.3429 194.766 15.1675C194.766 18.992 191.676 22.0967 187.876 22.0967C184.076 22.0967 180.986 18.992 180.986 15.1675C180.986 11.3429 184.076 8.23821 187.876 8.23821ZM138.387 3.71324C143.411 3.71324 147.473 7.80736 147.473 12.8519C147.473 17.8965 143.411 21.9917 138.387 21.9917C133.375 21.9917 129.302 17.8965 129.302 12.8519C129.302 7.80736 133.375 3.71324 138.387 3.71324ZM178.583 8.60194H176.443V21.7189H178.583V8.60194ZM207.87 15.1675C207.87 12.2901 206.374 10.0861 203.732 10.0861C201.559 10.0861 198.992 11.3548 198.992 15.1664V21.7189H196.896V8.60194H198.992V10.2506C200.281 8.67014 202.236 8.23821 203.885 8.23821C207.608 8.23821 210.032 10.5689 210 14.7691C210 14.8763 209.989 15.0928 209.978 15.3028V21.7189H207.87V15.1675ZM187.876 9.95401C190.573 9.95401 192.768 12.2901 192.768 15.1675C192.768 18.0448 190.573 20.3809 187.876 20.3809C185.179 20.3809 182.995 18.0448 182.995 15.1675C182.995 12.2901 185.179 9.95401 187.876 9.95401ZM156.853 9.95401C159.55 9.95401 161.734 12.2901 161.734 15.1675C161.734 18.0448 159.55 20.3809 156.853 20.3809C154.156 20.3809 151.972 18.0448 151.972 15.1675C151.972 12.2901 154.156 9.95401 156.853 9.95401ZM138.387 5.612C142.133 5.612 145.169 8.85633 145.169 12.8519C145.169 16.8475 142.133 20.0919 138.387 20.0919C134.653 20.0919 131.606 16.8475 131.606 12.8519C131.606 8.85633 134.653 5.612 138.387 5.612ZM177.513 3.89511C178.321 3.89511 178.987 4.56194 178.987 5.38358C178.987 6.20414 178.321 6.87097 177.513 6.87097C176.694 6.87097 176.028 6.20414 176.028 5.38358C176.028 4.56194 176.694 3.89511 177.513 3.89511Z" fill="currentColor"></path>
    </svg>
   </a>
   <div class="header__info info">
    <div class="info__icon-wrap">
     <div class="info__icon info__icon_1"></div>
     <div class="info__icon info__icon_2"></div>
    </div>
    <div class="info__text">
     Optimized charts rendering engine reduces loading time and <span>increases battery life up to 25%.</span>                        </div>
   </div>
   <div class="header__menu">
    <ul>
     <li>
      <a href="https://m.pocketoption.com/en/quick-start/">Quick start</a>
     </li>
     <li>
      <a href="https://m.pocketoption.com/en/cabinet/try-demo/">Free demo</a>
     </li>
     <li>
      <a href="https://m.pocketoption.com/en/about-us/">About us</a>
     </li>
     <li>
      <a href="https://m.pocketoption.com/blog/en/" rel="nofollow">Pocket Option Blog</a>
     </li>
    </ul>
   </div>
   <div class="header__right">
    <div class="header__lang">
     <div class="languages js-languages">
      <div class="languages__title">
       <svg class="svg-icon language-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#a1599)">
         <path d="M12.5 24.919c-1.645 0-3.198-.315-4.658-.946a12.164 12.164 0 0 1-3.82-2.576 12.165 12.165 0 0 1-2.576-3.82A11.619 11.619 0 0 1 .5 12.919c0-1.658.315-3.214.946-4.668a12.197 12.197 0 0 1 2.576-3.81 12.166 12.166 0 0 1 3.82-2.576C9.302 1.235 10.855.92 12.5.92c1.658 0 3.214.315 4.668.946 1.453.63 2.723 1.49 3.81 2.576a12.197 12.197 0 0 1 2.576 3.81c.63 1.454.946 3.01.946 4.668a11.62 11.62 0 0 1-.946 4.658 12.166 12.166 0 0 1-2.576 3.82 12.195 12.195 0 0 1-3.81 2.576c-1.454.63-3.01.946-4.668.946Zm0-1.922a17.26 17.26 0 0 0 1.628-2.587c.44-.87.799-1.82 1.076-2.852H9.796c.293 1.064.656 2.031 1.089 2.901.432.87.97 1.716 1.615 2.538Zm-2.446-.347a13.7 13.7 0 0 1-1.305-2.37 15.497 15.497 0 0 1-.898-2.722H3.566a9.902 9.902 0 0 0 2.684 3.307 9.017 9.017 0 0 0 3.804 1.785Zm4.892 0a9.016 9.016 0 0 0 3.804-1.785 9.902 9.902 0 0 0 2.684-3.306H17.15a19.84 19.84 0 0 1-.96 2.734c-.385.885-.8 1.67-1.243 2.357ZM2.771 15.664h4.696c-.08-.47-.137-.93-.173-1.381a17.331 17.331 0 0 1 0-2.728c.036-.451.094-.911.173-1.38H2.771a10.133 10.133 0 0 0-.28 4.151c.066.463.159.909.28 1.338Zm6.59 0h6.278a15.966 15.966 0 0 0 .225-2.745 15.966 15.966 0 0 0-.226-2.745H9.362a15.977 15.977 0 0 0-.225 2.745 15.977 15.977 0 0 0 .226 2.745Zm8.172 0h4.696a10.14 10.14 0 0 0 .28-4.151 9.955 9.955 0 0 0-.28-1.339h-4.696c.08.47.137.93.173 1.381a17.32 17.32 0 0 1 0 2.728c-.036.451-.094.911-.173 1.38Zm-.384-7.385h4.285c-.675-1.328-1.564-2.43-2.666-3.306-1.102-.876-2.376-1.475-3.822-1.797.484.735.915 1.539 1.292 2.412.378.873.681 1.77.911 2.691Zm-7.353 0h5.408a16.254 16.254 0 0 0-1.107-2.918c-.444-.89-.977-1.73-1.597-2.52-.62.79-1.153 1.63-1.597 2.52-.445.89-.814 1.862-1.107 2.918Zm-6.23 0H7.85c.23-.921.533-1.818.91-2.691.378-.873.809-1.677 1.293-2.412-1.454.322-2.73.923-3.828 1.803-1.099.88-1.985 1.98-2.66 3.3Z" fill="currentColor"></path>
        </g>
        <defs>
         <clipPath id="a1599">
          <path fill="currentColor" transform="translate(.5 .919)" d="M0 0h24v24H0z"></path>
         </clipPath>
        </defs>
       </svg>
       <span class="languages__title-text">
        English        </span>
      </div>
      <ul class="languages__list">
       <li class="languages__item">
        <a class="languages__link" href="/ru/">
         Русский                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/pt/">
         Português                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/es/">
         Español                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/it/">
         Italiano                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/pl/">
         Polski                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/id/">
         Indonesian                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/fr/">
         Français                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/th/">
         Thai                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/vt/">
         Tiếng Việt                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ar/">
         العربية                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ms/">
         Malay                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/zh/">
         中文                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/tr/">
         Türkçe                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ja/">
         日本語                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ko/">
         한국어                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/fa/">
         فارسی                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/sr/">
         Српски                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ro/">
         Română                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/hr/">
         Hrvatski                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/hi/">
         हिन्दी                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/el/">
         ελληνικά                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/bn/">
         বাংলা                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/uk/">
         Українська                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/fi/">
         Pilipinas                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/sw/">
         Kiswahili                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ky/">
         Кыргызча                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/kk/">
         Қазақша                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/nl/">
         Nederlands                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/yo/">
         Yorùbá                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ig/">
         Igbo                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/ha/">
         Hausa                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/af/">
         Afrikaans                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/tg/">
         Тоҷикӣ                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/az/">
         Azərbaycan                </a>
       </li>
       <li class="languages__item">
        <a class="languages__link" href="/uz/">
         Ўзбекча                </a>
       </li>
      </ul>
     </div>
    </div>
    <div class="header__menu-btn js-trigger-btn">
     <span class="line"></span>
     <span class="line"></span>
     <span class="line"></span>
    </div>
   </div>
  </div>
 );
};

export default Navbar;
const Footer = () => (
  // <footer className="bg-black text-white py-12">
  //   <div className="container mx-auto px-4">
  //     <div className="mb-8">
  //       <p className="text-sm text-gray-400 mb-4">
  //         All materials and services provided on this site are subject to copyright and belong to "Infinite Trade LLC". Any use of materials of this website must be approved by an official representative of "Infinite Trade LLC", and contain a link to the original resource.
  //       </p>
  //       <p className="text-sm text-gray-400 mb-4">
  //         Infinite Trade LLC does not provide service to residents of the EEA countries, USA, Israel, UK, Philippines, Japan and Brazil.
  //       </p>
  //       <p className="text-sm text-gray-400">
  //         Infinite Trade LLC is registered at Republic Of Costa Rica, San Jose- San Jose Mata Redonda, Neighborhood Las Vegas, Blue Building Diagonal To La Salle High School with the registration number 4062001303240.
  //       </p>
  //     </div>

  //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
  //       <a href="#" className="text-gray-400 hover:text-white">Contacts</a>
  //       <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a>
  //       <a href="#" className="text-gray-400 hover:text-white">AML and KYC policy</a>
  //       <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
  //       <a href="#" className="text-gray-400 hover:text-white">Payment policy</a>
  //       <a href="#" className="text-gray-400 hover:text-white">One-Click Payment Policy</a>
  //     </div>

  //     <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
  //       <div className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">PocketOption</div>
  //       <p className="text-sm text-gray-400">Copyright ©2025 Pocket Option</p>
  //     </div>
  //   </div>
  // </footer>
  <>
    <style>{`
  .section {
 padding-right: 300px
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
 
.ar-lang .footer .socket__copyright,
.fa-lang .footer .socket__copyright {
 text-align: left
}

.ar-lang .footer .plus-21,
.fa-lang .footer .plus-21 {
 background-position: 0;
 padding-left: 3.438rem;
 padding-right: 0;
 text-align: left
}

@media screen and (max-width:1000px) {

 .ar-lang .footer .plus-21,
 .fa-lang .footer .plus-21 {
  padding-left: 3rem;
  padding-right: 0
 }
}

@media screen and (max-width:900px) {

 .ar-lang .footer .plus-21,
 .fa-lang .footer .plus-21 {
  background-position: 100%;
  padding-left: 0;
  padding-right: 3rem;
  text-align: right
 }
}


.footer {
 background-color: #09576b;
 color: #96aec1;
 line-height: 1.25rem
}

.footer .footer__container {
 padding: 2.25rem 1.875rem 4.375rem
}

@media screen and (max-width:1000px) {
 .footer .footer__container {
  padding: 2.25rem 1.875rem 3.6rem
 }
}

@media screen and (max-width:700px) {
 .footer .footer__container {
  padding: 2rem .938rem 3.6rem
 }
}

@media screen and (max-width:600px) {
 .footer .footer__container {
  padding: 1.9rem .938rem 3rem
 }
}

.footer__info {
 font-size: .813rem;
 line-height: 1.5rem
}

.footer__info p {
 margin-bottom: .9rem
}

.footer__info p.no-margin {
 margin-bottom: 0
}

@media screen and (max-width:500px) {
 .footer__info p {
  margin-bottom: .5rem
 }
}

.footer__info a {
 border-bottom: 1px solid #0099fa;
 color: #fff;
 display: inline-block;
 text-decoration: none;
 -webkit-transition: .5s;
 transition: .5s
}

.footer__info a:hover {
 border-bottom: 1px solid rgba(0, 153, 250, 0);
 color: #fff
}

@media screen and (max-width:600px) {
 .footer__info {
  line-height: 1.3rem
 }
}

.footer-nav {
 display: -webkit-box;
 display: flex;
 flex-wrap: wrap;
 margin: 2.75rem -1.563rem -.8rem
}

.footer-nav__item {
 padding: .8rem 1.563rem
}

@media screen and (max-width:1000px) {
 .footer-nav__item {
  padding: .5rem 1rem
 }
}

@media screen and (max-width:600px) {
 .footer-nav__item {
  padding: .3rem 1rem
 }
}

@media screen and (max-width:450px) {
 .footer-nav__item {
  -webkit-box-flex: 0;
  flex: 0 0 100%
 }
}

.footer-nav__link {
 border-bottom: 1px solid #0099fa;
 font-size: 1rem;
 padding-bottom: .1rem;
 text-decoration: none
}

.footer-nav__link,
.footer-nav__link:hover {
 color: #fff;
 -webkit-transition: .5s;
 transition: .5s
}

.footer-nav__link:hover {
 border-bottom: 1px solid rgba(0, 153, 250, 0)
}

@media screen and (max-width:1000px) {
 .footer-nav__link {
  font-size: .9rem
 }
}

@media screen and (max-width:600px) {
 .footer-nav__link {
  font-size: .813rem
 }
}

body.potrade-zone .footer-nav {
 margin-top: 0
}

@media screen and (max-width:1000px) {
 .footer-nav {
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 1.75rem -.8rem -.5rem
 }
}

@media screen and (max-width:600px) {
 .footer-nav {
  margin: 1.25rem -1rem -.3rem
 }
}

.footer .socket {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: justify;
 font-size: .813rem;
 justify-content: space-between;
 line-height: 1.5rem;
 padding-top: 4.8rem
}

.footer .socket__copyright {
 text-align: right
}

.footer .socket__logo svg {
 max-width: 13.125rem
}

.footer .socket__logo .svg-icon {
 height: 47px;
 width: 60px
}

.footer .socket__logo .po-logo {
 max-width: 6.625rem
}

@media screen and (max-width:900px) {
 .footer .socket__logo {
  margin-bottom: 1rem
 }

 .footer .socket {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 3.5rem
 }
}

@media screen and (max-width:600px) {
 .footer .socket {
  padding-top: 3rem
 }
}

.footer .plus-21 {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 background: url(/themes/2017-09/img/icon-21.svg) no-repeat 100%;
 background-size: 2.5rem;
 line-height: 1.25rem;
 min-height: 40px;
 min-width: 40px;
 padding-right: 3.438rem;
 text-align: right
}

body.potrade-zone .footer .plus-21 {
 padding-right: 0
}

@media screen and (max-width:1000px) {
 .footer .plus-21 {
  background-size: 2rem;
  padding-right: 3rem
 }
}

@media screen and (max-width:900px) {
 .footer .plus-21 {
  background-position: 0;
  padding-left: 3rem;
  padding-right: 0;
  text-align: left
 }
}

@media screen and (max-width:600px) {
 .footer p {
  margin-bottom: .5rem;
  text-align: justify
 }
}

.footer_affiliate .footer-nav {
 margin-top: 1.75rem
}

@media screen and (max-width:600px) {
 .footer_affiliate .footer-nav {
  margin-top: .65rem
 }
}

.footer_affiliate .footer__container {
 padding: 1.25rem 1.875rem 3.375rem
}

@media screen and (max-width:600px) {
 .footer_affiliate .footer__container {
  padding: 1.25rem .938rem 2rem
 }
}

.footer_affiliate .socket {
 padding-top: 2rem
}

@media screen and (max-width:600px) {
 .footer_affiliate .socket {
  -webkit-box-align: center;
  align-items: center;
  padding-top: 1.3rem
 }
}

.footer_affiliate .plus-21 {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 background-position: 0;
 min-height: 2.1rem;
 padding-left: 3.438rem;
 padding-right: 0
}

@media screen and (max-width:1000px) {
 .footer_affiliate .plus-21 {
  padding-left: 3rem
 }
}

@media screen and (max-width:600px) {
 .footer_affiliate .plus-21 p {
  margin-bottom: 0
 }

 .footer_affiliate .footer-nav__item {
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  text-align: center
 }
}

.footer__container {
 margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}


@media screen and (min-width:2400px) {
 .footer__container {
  margin-left: auto;
  margin-right: auto
 }
}

@media screen and (max-width:1279px) {
 .footer__container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .footer__container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .footer__container {
  padding: 2.25rem .938rem 2.5rem
 }
}


.footer__info {
 font-size: .813rem;
 line-height: 1.5rem
}

.footer__info p {
 margin-bottom: .9rem
}

.footer__info p.no-margin {
 margin-bottom: 0
}

@media screen and (max-width:500px) {
 .footer__info p {
  margin-bottom: .5rem
 }
}

.footer__info a {
 border-bottom: 1px solid #0099fa;
 color: #fff;
 display: inline-block;
 text-decoration: none;
 -webkit-transition: .5s;
 transition: .5s
}

.footer__info a:hover {
 border-bottom: 1px solid rgba(0, 153, 250, 0);
 color: #fff
}

@media screen and (max-width:600px) {
 .footer__info {
  line-height: 1.3rem
 }
}
 .footer__info p.no-margin {
 margin-bottom: 0
}
 .ar-lang .footer .socket__copyright,
.fa-lang .footer .socket__copyright {
 text-align: left
}
 
.footer .socket {
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: justify;
 font-size: .813rem;
 justify-content: space-between;
 line-height: 1.5rem;
 padding-top: 4.8rem
}

.footer .socket__copyright {
 text-align: right
}

.footer .socket__logo svg {
 max-width: 13.125rem
}

.footer .socket__logo .svg-icon {
 height: 47px;
 width: 60px
}

.footer .socket__logo .po-logo {
 max-width: 6.625rem
}

@media screen and (max-width:900px) {
 .footer .socket__logo {
  margin-bottom: 1rem
 }

 .footer .socket {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 3.5rem
 }
}

@media screen and (max-width:600px) {
 .footer .socket {
  padding-top: 3rem
 }
}

.footer_affiliate .socket {
 padding-top: 2rem
}

@media screen and (max-width:600px) {
 .footer_affiliate .socket {
  -webkit-box-align: center;
  align-items: center;
  padding-top: 1.3rem
 }
}

  `}</style>
    <footer className="section footer">
      <div className="footer__container">
        <div className="content footer__in">
          <div className="footer__info">
            <p className="no-margin">
              All materials and services provided on this site are subject to copyright and belong to "Infinite Trade LLC". Any use of materials of this website must be approved by an official representative of "Infinite Trade LLC", and contain a link to the original resource. Any third-party companies of "Online broker" or "Online trading" type, do not have the right to use materials of this website as well as any distorted writing of "Infinite Trade LLC". In case of violation, they will be prosecuted in accordance with legislation of intellectual property protection.                                                    </p>

            <p className="no-margin">
              Infinite Trade LLC does not provide service to residents of the EEA countries, USA, Israel, UK, Philippines, Japan and Brazil.                                                                                                                        </p>

            <p>
              Infinite Trade LLC is registered at Republic Of Costa Rica, San Jose- San Jose Mata Redonda, Neighborhood Las Vegas, Blue Building Diagonal To La Salle High School with the registration number 4062001303240.
              <br />
              All brokerage activity on this website provided by Infinite Trade LLC.                                                    </p>


            <p className="no-margin">
              * The minimum investment amount varies by region and payment method.                            </p>
          </div>


          <ul className="footer-nav">
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#">Contacts</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#" target="_blank">Terms and Conditions</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#">AML and KYC policy</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#" target="_blank">Privacy policy</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#">Payment policy</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="#">One-Click Payment Policy</a>
            </li>
          </ul>


          <div className="socket">
            <a href="#" className="socket__logo logo flex items-center gap-2">
              <img src="../../public/images/image-removebg-preview.png" alt="" className="h-12" />
              <p className="text-2xl font-bold text-white">Quick Option</p>
            </a>
            <div className="socket__copyright">
              <div className="plus-21">
                <p>
                  Copyright ©2025 Pocket Option                                                                                            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);
export default Footer;
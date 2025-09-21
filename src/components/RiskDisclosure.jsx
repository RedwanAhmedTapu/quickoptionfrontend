const RiskDisclosure = () => (
  <>
    <style>{`
  .risk-section {
 padding-right: 300px
}

@media screen and (min-width:2400px) {
 .risk-section {
  padding-right: 0
 }
}

@media screen and (max-width:1279px) {
 .risk-section {
  padding-right: 0
 }
}

.risk-disclosure {
 background: #09576b;
 color: #96aec1
}

.risk-disclosure .risk-container {
 padding: 5rem 1.875rem 1rem
}

@media screen and (max-width:1000px) {
 .risk-disclosure .risk-container {
  padding: 3.4rem 1.875rem 0
 }
}

@media screen and (max-width:700px) {
 .risk-disclosure .risk-container {
  padding: 2.4rem .938rem 0
 }
}

.risk-risk-disclosure__in {
 font-size: .813rem;
 line-height: 1.5rem
}

@media screen and (max-width:600px) {
 .risk-risk-disclosure__in {
  line-height: 1.3rem;
  text-align: justify
 }
}

.risk-risk-disclosure__title {
 background: url(/themes/2017-09/img/icon-risk.svg) no-repeat 0;
 background-size: 1.813rem;
 font-size: .938rem;
 font-weight: 700;
 margin-bottom: .4rem;
 padding-left: 2.25rem;
 text-transform: uppercase
}

@media screen and (max-width:600px) {
 .risk-risk-disclosure__title {
  background-size: 1.55rem;
  padding-left: 2.1rem
 }
}

.risk-risk-disclosure__link-title {
 margin-top: 1.25rem
}

@media screen and (max-width:600px) {
 .risk-risk-disclosure__link-title {
  margin-top: 1rem
 }
}

.risk-risk-disclosure__link {
 font-size: .938rem;
 font-weight: 300
}

.risk-container {
 margin-left: auto;
 max-width: 96.75rem;
 padding: 6.25rem 1.875rem;
 width: 100%
}

@media screen and (max-width:1279px) {
 .risk-container {
  max-width: none
 }
}

@media screen and (max-width:1000px) {
 .risk-container {
  padding: 3.25rem 1.875rem
 }
}

@media screen and (max-width:700px) {
 .risk-container {
  padding: 2.25rem .938rem 2.5rem
 }
}


.risk-content {
 max-width: 93.75rem
}

@media screen and (min-width:1279px) {
 .risk-content {
  max-width: none
 }
}

@media screen and (min-width:2400px) {
 .risk-content {
  margin-left: auto;
  margin-right: auto
 }
}

.risk-link,
a.btn {
 text-decoration: none
}

.risk-link {
 border-bottom: 1px solid #0099fa;
 font-weight: 700;
 -webkit-transition: .5s;
 transition: .5s
}

.risk-link_light,
.risk-link_light:hover {
 color: #fff
}

.ar-lang .risk-link,
.fa-lang .risk-link {
 font-weight: 500
}

  `}</style>
    <section class="risk-section risk-disclosure">
      <div class="risk-container">
        <div class="risk-content risk-risk-disclosure__in">
          <p class="risk-risk-disclosure__title">Risk warning:</p>
          <p>Investing in financial products involves risks. Past performance does not guarantee future returns, and values may fluctuate due to market conditions and changes in underlying assets. Any forecasts or illustrations are for reference only and are not guarantees. This website does not constitute an invitation or recommendation to invest. Before investing, seek advice from financial, legal, and tax professionals, and assess whether the product suits your goals, risk tolerance, and circumstances.</p>
          <p class="risk-risk-disclosure__link-title">
            <a
            onClick={e=>e.preventDefault()}
            href="https://m.pocketoption.com/en/riskdisclosure/" target="_blank"
            class="risk-risk-disclosure__link risk-link risk-link_light">
              Risk Disclosure
            </a>
          </p>
        </div>
      </div>
    </section>
  </>
);
export default RiskDisclosure;
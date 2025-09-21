import React from "react";

const Socials = () => {
  return (
    <div>
      <section className="section social section_light">
        <div className="container container_small-padding" id="social">
          <div className="content">
            <h2>
              <span>In</span> the news
            </h2>
            <p className="social__text">
              Discover how our community, services and innovations are making
              headlines in the industry, in every country, every day
            </p>

            <div className="social-link__list">
              {/* Facebook */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "0.2s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_fb"
                >
                  Facebook
                </a>
              </div>

              {/* Telegram */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "0.4s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_tg"
                >
                  Telegram
                </a>
              </div>

              {/* Instagram */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "0.6s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_ig"
                >
                  Instagram
                </a>
              </div>

              {/* Twitter */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "0.8s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_tw"
                >
                  Twitter
                </a>
              </div>

              {/* YouTube */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "1s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_yt"
                >
                  YouTube
                </a>
              </div>

              {/* Discord */}
              <div
                className="social-link__item animated "
                style={{ visibility: "visible", animationDelay: "1.2s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_dc"
                >
                  Discord
                </a>
              </div>

              {/* TikTok */}
              <div
                className="social-link__item animated fadeInDown"
                style={{ visibility: "visible", animationDelay: "1.4s" }}
              >
                <a
                  href="#"
                
                  rel="noopener noreferrer"
                  className="social-link__in social-link__in_tt"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socials;

import React from 'react'
import './features.css'


import { useTranslation } from 'react-i18next'
import Image from 'react-image-webp'

const Features = () => {
  const {t} = useTranslation(["features"])
  return (
    <section className="container container__feature">
        <h5>{t("feature_intro")}</h5>
        <div className="feature__text">
            <h2>{t("features_difference")} <span className="text__color">{t("different_t")}</span></h2>
            <p>{t( "features_main_text")}
            </p>
        </div>
        
        <main className="features__container container">
            <div className="features__first-row">


                <div className="features__box feature__green">
                    <div class="text__area">
                        <h2>{t("escrow_f")}</h2>
                        <p> {t("escrow_p")}
                        </p>
                    </div>
                    <div className="feature__image">
                        <Image
                              src={require("../../assets/Shield_perspective_matte1.png")}
                              webp={require("../../assets/Shield_perspective_matte1.webp")}
                              />
                    </div>
                </div>

                <div className="features__box feature__yellow">
                    <div class="text__area">
                        <h2>{t("save_pay_f")} </h2>
                        <p>{t("save_pay_p")}
                        </p>
                    </div>
                    <div className="feature__image">
                        <Image
                              src={require("../../assets/Money_bag_perspective_matte2.png")}
                              webp={require("../../assets/Money_bag_perspective_matte2.webp")}
                              />
                    </div>
                </div>
            </div>
          
           

          <div className="features__first-row">
              <div className="features__box feature-red">
                      <div class="text__area">
                        <h2>{t("milestone_f")}</h2>
                        <p> {t("milestone_p")}
                        </p>
                      </div>
                      <div className="feature__image">
                          <Image
                                  src={require("../../assets/Diagram_perspective_matte3.png")}
                                  webp={require("../../assets/Diagram_perspective_matte3.webp")}
                                  />
                      </div>   
              </div>

              <div className="features__box feature__purple">
                      <div class="text__area">
                        <h2>{t("api_f")} </h2>
                        <p> {t("api_p")}
                        </p>
                      </div>
                      <div className="feature__image">
                            <Image
                                  src={require("../../assets/Settings_perspective_matte4.png")}
                                  webp={require("../../assets/Settings_perspective_matte4.webp")}
                                  />
                      </div>   
              </div>
        </div>    

      </main>

    </section>
  )
}

export default Features
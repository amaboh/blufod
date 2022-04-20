import React from 'react'
import './process.css'

import {useTranslation} from "react-i18next"

const Process = () => {

  const {t } = useTranslation(["processes"])
  return (
    <section className="container container__feature">
        <h5>{t( "process_heading")} </h5>
        <div className="feature__text">
            <h2>{t("process_tag_line")} <span className="text__color">{t("process_tcolor")}</span></h2>
            <p>{t("process_explainer")}</p>
        </div>
      
      <main className="process__container container">


        <div className="process__box first__row-box">  
      
          <div className="process__frame first__process "> 
            <div className="process__item">
                <main className="heading__frame process__heading">
                  <h1 className="heading__1">1</h1>
                  <h2 className="subheading__one">{t( "process_one")}</h2>
                </main>
                <div className="description second__description">
                  <ul>
                    <li>{t("process_one_list1")}</li> 
                    <li>{t("process_one_list2")}</li> 
                    <li>{t("process_one_list3")}</li>
                  </ul>
                </div> 
            </div>
          </div>
          <div className="process__frame first__process "> 
            <div className="process__item">
                <main className="heading__frame process__heading">
                  <h1 className="heading__2">2</h1>
                  <h2  className="subheading__two">{t("process_two")}</h2>
                </main>
                <div className="description ">
                  <ul>
                    <li>{t("process_two_list1")}</li> 
                    <li> {t("process_two_list2")}</li>
                  </ul>
                </div> 
            </div>
          </div>

        </div>
        <div className="process__frame third__process "> 
            <div className="process__item process__center">
                <main className="heading__frame process__heading heading__special">
                  <h1 className="heading__3">3</h1>
                  <h2 className="subheading__three">{t("process_three")}</h2>
                </main>
                <div className="description">
                  <ul>
                    <li>{t("process_three_list1")}</li> 
                    <li> {t("process_three_list2")}</li>
                  </ul>
                </div> 
            </div>
        </div>

        <div className="process__box first__row-box">  
      
      <div className="process__frame first__process "> 
        <div className="process__item">
            <main className="heading__frame process__heading">
              <h1 className="heading__4">4</h1>
              <h2 className="subheading__four">{t("process_four")}</h2>
            </main>
            <div className="description first__">
              <ul>
                <li>{t("process_four_list1")}</li> 
              </ul>
            </div> 
        </div>
      </div>
      <div className="process__frame first__process "> 
        <div className="process__item">
            <main className="heading__frame process__heading">
              <h1 className="heading__5">5</h1>
              <h2 className="subheading__five">{t("process_five")}</h2>
            </main>
            <div className="description">
              <ul>
                <li>{t("process_five_list1")}</li> 
                
              </ul>
            </div> 
        </div>
      </div>

    </div>

      </main>

    </section>
  )
}

export default Process
import React, {useState,useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './services.css'
import phoneprotection from "../../assets/phone-protection.svg"
import padlock from "../../assets/padlock_perspective.png"
import developerSign from "../../assets/code_perspective.png"

import Faquestions from '../../general/Faquestions'

import {useTranslation} from "react-i18next"
import Swal from 'sweetalert2'

const Services = () => {
  const form = useRef();
  const {t} = useTranslation(["common", "services",])
  const Swal = require('sweetalert2')

  const initialValues = { email: ""}
  const [formValues, setFormValues] = useState(initialValues);
  const [send, setSend] = useState(false)
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange=(e)=>{
    const { name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  
  };

  const sendEmail= (e) => {
    e.preventDefault()
   
  
    if(send){
      emailjs
      .sendForm(
        "service_3h4fyz9",
        "template_8o8qwv9",
        form.current,
        "Tej-xIHn-TNxNK8Ky"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset()
          Swal.fire({
            title: "Email sucessfully delivered. We're excited to have you on board!",
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
           
          })
        }
      );     
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setSend(true)
    }
  }, [formErrors]);


  const validate=(values)=>{
    const errors = {};
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
      errors.email = "Email is required"
    }else if (!regex.test(values.email)){
      errors.email = "This is not a valid email address"
    }
    return errors;

  };

function handleClick(){
  setFormErrors(validate(formValues));
  setIsSubmit(true);
}

  return (
    <section className="container container__services">
      <div className="container__service-body">
            <main className="services__main-image">
                <img src={phoneprotection} alt="phone protection and API"/>
              </main>
            <div className="service__text-form">
              <div className="services__area">
                    <h5>{t("services:service_tag")}</h5>
                    <div className="feature__text service__car">
                      <h2 className="services__title">{t("services:service_heading")}</h2>
                      
                        <ul className="servise__list-item">
                          <li>{t("services:service_heading_list1")}</li> 
                          <li> {t("services:service_heading_list2")}</li>
                          <li>{t("services:service_heading_list2")}</li>
                          <li> {t("services:service_heading_list3")}</li>
                          <li> {t("services:service_heading_list4")}</li>
                        </ul>
                    </div>
              </div>       
          </div>
      </div>
       <main className=" service__type">
              <div className="features__box service__developer ">
                      <div class="text__area">
                        <h2 className="services__title">{t("services:service_one")}</h2>
                        <p> {t("services:service_one_text")}
                        </p>
                      </div>
                      <div  className="feature__image">
                          <img src={developerSign}/>
                      </div>
                </div>
                  <div className="features__box service__yellow">
                        <div class="text__area">
                            <h2 className="services__title">{t("services:service_two")}</h2>
                            <p>{t('services:service_two_text')}
                            </p>
                        </div>
                        <div  className="feature__image">
                          <img src={padlock}/>
                        </div>
                  </div>
       </main>
       <Faquestions/>
       <div className="container__contact">
         <div className="contact__text">
           
           <h4 class="wordCarousel">
           <h6>{t("services:why_blufod")}</h6>
                <div className="contact__anime">
                    
                    <ul className="flip4">
                        <li >
                          <h4 className="flip__text-clr">{t("services:maintainance_fee")} <span style={{color: '#0575f5'}}>None !</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                            highly secured? <span style={{color: '#0758db'}}> confam.</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                          {t("services:saving_charges")} <span style={{color: '#2e17fc'}}>No mola !</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                          {t("services:convince")}<span style={{color: '#1500d1'}}> {t("services:sign_up")}</span>
                          </h4>
                        </li>
                    </ul>
                </div>
            </h4>
         </div>

         <nav className="form-container form__contact"> 
         <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="email"
                            onChange={handleChange}
                            required className="email__input-service email-field"
                          placeholder= {t("common:enter_email")}
                        />
                      <button onClick={handleClick} className="submit-btn" > {t("common:getinvite")}</button>
                    {/* <input  type="submit" className="submit-btn" value="Get Invite"/> */}
                </form>
                
                <small> {!Object.keys(formErrors).length >= 1 ? <small>{t("privacy_text")}</small> : <small className="email__check-text2">{formErrors.email}</small>
                
                  }</small>

                
                
                
                
          </nav>
      
       </div>
</section>
  )
}


export default Services
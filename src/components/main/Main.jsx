import React, {useState, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser'
import './main.css'
import Shopper from '../../assets/blufod-main-image.png'
import Grouppic from '../../assets/profile-pic2.png'

import Swal from 'sweetalert2'

const Main = () => {
    const form = useRef();
    const {t} = useTranslation(["main","common"]);
    const Swal = require('sweetalert2')

    const numberRegistered = " +850"
    
    const initialValues = { email: ""};
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
  <section className="container__box">
      <div className="container container__main">
        <div className="container__text-main">
          <h5 className>{t("main:connecting_dots")}</h5>
          <span className="container__heading">
            <h1 className="container__title">{t("headline_text")}<span className="text-color"> {t("main:headline_tcolor")}</span></h1>
            <h2>{t("main:headline_tsmall")}</h2>
          </span>
          <p>{t("main_text")}
           </p>
           <div>
           <small className="email__check-text">{formErrors.email}</small>
          <nav className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input  type="email" name="email"
                            value={formValues.username}
                            onChange={handleChange}
                            className="email-field" required
                          placeholder=  {t("common:enter_email")}
                        />
                        <button onClick={handleClick} className="submit-btn" >{t("common:getinvite")}</button>
                    {/* <input  type="submit" className="submit-btn" value="Get Invite"/> */}
                </form>
               
          </nav>
           </div>
        
         
          <small className="wailist__tag"><img src={Grouppic} className="wailist__pic"/>{t("main:join_t")} <span className="text-color"> {numberRegistered }</span>  {t("main:join_liner")}</small>
        </div>
        <main className="main__image">
          <img src={Shopper} alt="lady holding phone and shopping"/>
        </main>
      </div>
  </section>
  )
}

export default Main
import React, {useState,useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './services.css'
import phoneprotection from "../../assets/phone-protection.svg"
import padlock from "../../assets/padlock_perspective.png"
import developerSign from "../../assets/code_perspective.png"

const Services = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
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
                <h5>Developers</h5>
                    <div className="feature__text service__car">
                      <h2 className="services__title">INTEGRATE OUR APIs To</h2>
                      
                  <ul className="servise__list-item">
                    <li>✔ Collect one-time and recurring payments from your website or online shop</li> 
                    <li> ✔ Retrieve all your transaction and customer data</li>
                    <li> ✔ Make instant transfer or conditional transfers</li>
                    <li> ✔ Make payments to verified retailers</li>
                  </ul>
                  </div>
              </div>       
          </div>
      </div>
       <main className=" service__type">
              <div className="features__box service__developer ">
                      <div class="text__area">
                        <h2 className="services__title">Built For Developers By Developers</h2>
                        <p> Programming is fun when using well documented APIs. That is just what
                           we've dedicated ourselves in creating and documenting a very easy to use 
                           API for complex projects to simple weekend hacks. Envision it, created it with Blufod  
                        </p>
                      </div>
                      <div  className="feature__image">
                          <img src={developerSign}/>
                      </div>
                </div>
                  <div className="features__box service__yellow">
                        <div class="text__area">
                            <h2 className="services__title">Protecting Both Buyers And Sellers</h2>
                            <p>Using escrow, buyers get to inspect the goods or services before accepting them, 
                              protecting the buyer. Likewise, sellers are protected from counterparty risk by 
                              no chargeback, ever.
                            </p>
                        </div>
                        <div  className="feature__image">
                          <img src={padlock}/>
                        </div>
                  </div>
       </main>
       <div className="container__contact">
         <div className="contact__text">
           
           <h4 class="wordCarousel">
           <h6>why blufod ?</h6>
                <div className="contact__anime">
                    
                    <ul className="flip4">
                        <li >
                          <h4 className="flip__text-clr">Maintaince fees? <span style={{color: '#0575f5'}}>None !</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                            highly secured? <span style={{color: '#0758db'}}> confam.</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                          Saving charges? <span style={{color: '#2e17fc'}}>No mola !</span>
                          </h4>
                        </li>
                        <li >
                          <h4 className="flip__text-clr">
                          convince?<span style={{color: '#1500d1'}}> Sign up now 😎</span>
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
                          placeholder= {'📨 Enter your email @'}
                        />
                      <button onClick={handleClick} className="submit-btn" > Get Invite</button>
                    {/* <input  type="submit" className="submit-btn" value="Get Invite"/> */}
                </form>
                
                <small> {!Object.keys(formErrors).length >= 1 ? <small>Your privacy is our priority</small> : <small className="email__check-text2">{formErrors.email}</small>
                
                  }</small>

                
                
                
                
          </nav>
      
       </div>
</section>
  )
}


export default Services
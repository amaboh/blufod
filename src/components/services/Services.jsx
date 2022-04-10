import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './services.css'
import phoneprotection from "../../assets/phone-protection.svg"
import padlock from "../../assets/padlock_perspective.png"
import developerSign from "../../assets/code_perspective.png"

const Services = () => {
  const form = useRef();


    const sendEmail = (event) => {
      event.preventDefault()
      
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
          event.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      )

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
                      <h2 className="services__title">INTEGRATE OUR APIs</h2>
                      <p className="services__p">Payments for your website, marketplace, classified site, 
                        shopping cart or mobile app with no chargebacks, ever.
                      </p>
                  </div>
              </div>       
          </div>
      </div>
       <main className=" service__type">
              <div className="features__box service__developer ">
                      <div class="text__area">
                        <h2 className="services__title">Built For Developers By Developers</h2>
                        <p>Buy or sell goods and services securely by using Blufod as means of payment 
                              which releases funds when both parties are satisfied.
                        </p>
                      </div>
                      <div>
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
                        <div>
                          <img src={padlock}/>
                        </div>
                  </div>
       </main>
       <div className="container__contact">
         <div class="contact__text">
           <h2>Stay connected with us</h2>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
         </div>
         <nav className="form-container form__contact">
         <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email"
                            className="email-field"
                          placeholder= {'📨 Enter your email @'}
                        />
                    <input  type="submit" className="submit-btn" value="Get Invite"/>
                </form>
                <small>Your privacy is our priority</small>
          </nav>
       </div>
</section>
  )
}


export default Services
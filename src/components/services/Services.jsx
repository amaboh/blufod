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
                           API for complex projects to simple weekend hacks. Envision it, created it Blufod  
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
           <h6>Why blufod ?</h6>
                <div className="contact__anime">
                    
                    <ul className="flip4">
                        <li style={{color: '#0575f5'}}>No hidde fees!</li>
                        <li style={{color: '#0758db'}}>Highly secured!</li>
                        <li style={{color: '#2e17fc'}}>No maintenance fee!</li>
                        <li style={{color: '#1500d1'}}>convince? Join us 😎</li>
                    </ul>
                </div>
            </h4>
         </div>
         <nav className="form-container form__contact">
         <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email"
                            className="email__input-service email-field"
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
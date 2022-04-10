import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './main.css'
import Shopper from '../../assets/blufod-main-image.png'
import Grouppic from '../../assets/profile-pic2.png'

const Main = () => {
    const form = useRef();


    const sendEmail= (event) => {
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
      );

    }


  return (
  <section className="container__box">
      <div className="container container__main">
        <div className="container__text-main">
          <h5>Conneting The Dots For</h5>
          <span className="container__heading">
            <h1 className="container__title">FAST, SIMPLE AND <span className="text-color">SECURED</span></h1>
            <h2>ONLINE FINANCIAL TRANSACTIONS</h2>
          </span>
          <p>Our mission is to protect both buyers and sellers in any goods or service transaction. 
              Never ship a good service and do not get paid, and never pay for service which is completed.
              We safeguard both buyers and sellers in a transaction
           </p>

          <nav className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email"
                            className="email-field"
                          placeholder= {'📨 Enter your email @'}
                        />
                    <input  type="submit" className="submit-btn" value="Get Invite"/>
                </form>
                
          </nav>
          <small className="wailist__tag"><img src={Grouppic} className="wailist__pic"/>  Join <span className="text-color"> +350 </span>  shoppers and merchants on our waitlist</small>
        </div>
        <main className="main__image">
          <img src={Shopper} alt="lady holding phone and shopping"/>
        </main>
      </div>
  </section>
  )
}

export default Main
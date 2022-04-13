import React, {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import './main.css'
import Shopper from '../../assets/blufod-main-image.png'
import Grouppic from '../../assets/profile-pic2.png'

const Main = () => {
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
  <section className="container__box">
      <div className="container container__main">
        <div className="container__text-main">
          <h5 className>Conneting The Dots For</h5>
          <span className="container__heading">
            <h1 className="container__title">FAST, SIMPLE AND <span className="text-color">SECURED</span></h1>
            <h2>ONLINE FINANCIAL TRANSACTIONS</h2>
          </span>
          <p>Our mission is to protect both buyers and sellers in any goods or service transaction. 
              Never ship a good and do not get paid, and never pay for service which is uncompleted.
              We safeguard both buyers and sellers in a transaction
           </p>
           <div>
           <small className="email__check-text">{formErrors.email}</small>
          <nav className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" autoFocus={true} name="email"
                            value={formValues.username}
                            onChange={handleChange}
                            className="email-field" required
                          placeholder= {'📨 Enter your email @'}
                        />
                        <button onClick={handleClick} className="submit-btn" > Get Invite</button>
                    {/* <input  type="submit" className="submit-btn" value="Get Invite"/> */}
                </form>
               
          </nav>
           </div>
        
         
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
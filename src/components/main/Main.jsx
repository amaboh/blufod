import React from 'react'
import './main.css'
import Shopper from '../../assets/blufod-main-image.png'
import Grouppic from '../../assets/profile-pic2.png'
import HiOutlineMail from 'react-icons/hi'

const Main = () => {
    const [formData, setFormData] = React.useState({
      email: ""
    }) 

    function handleChange(event){
      const {name, value } = event.target
      setFormData(prevForm =>{
        return{
          ...prevForm,
          [name]: value
        }
      })
    }


    function handleSubmit(event){
      event.preventDefault()      

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
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email"
                            className="email-field"
                          value={formData.value}
                          placeholder= {'📨 Enter your email @'}
                          onChange={handleChange}/>
                    <button className="submit-btn">Get Invite</button>
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
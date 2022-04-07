import React from 'react'
import './features.css'
import Shield from '../../assets/Shield_perspective_matte1.png'
import Pie from '../../assets/Diagram_perspective_matte3.png'
import Settings from '../../assets/Settings_perspective_matte4.png'
import MoneyBag from '../../assets/Money_bag_perspective_matte2.png'

const Features = () => {
  return (
    <section className="container container__feature">
        <h5>Key Features</h5>
        <div className="feature__text">
            <h2>WHAT MAKES US <span className="text__color">DIFFERENT</span></h2>
            <p>Our mission is to protect both buyers and sellers in any goods or service transaction.
               Never ship a good service and do not get paid, and never pay for service which is completed. 
               We safeguard both buyers and sellers in a transaction.</p>
        </div>
        
        <main className="features__container container">
            <div className="features__first-row">


                <div className="features__box feature__green">
                    <div class="text__area">
                        <h2>Escrow Payment</h2>
                        <p>Buy or sell goods and services securely by using Blufod as means of 
                          payment which releases funds when both parties are satisfied.
                        </p>
                    </div>
                    <div className="feature__image">
                         <img src={Shield}/>
                    </div>
                </div>

                <div className="features__box feature__yellow">
                    <div class="text__area">
                        <h2>Save Now Pay Later</h2>
                        <p>Purchase goods and services securely by making weekly or 
                          monthly savings towards payment of goods and ease the financial burden.
                        </p>
                    </div>
                    <div className="feature__image">
                        <img src={MoneyBag}/>
                    </div>
                </div>
            </div>
          
           

          <div className="features__first-row">
              <div className="features__box feature-red">
                      <div class="text__area">
                        <h2>Escrow Payment</h2>
                        <p>Agree with the buyer and pay for goods or services in installments through our milestones option.
                        </p>
                      </div>
                      <div className="feature__image">
                        <img src={Pie}/>
                      </div>   
              </div>

              <div className="features__box feature__purple">
                      <div class="text__area">
                        <h2>Wallet Api Integration</h2>
                        <p>Integrate our APIs and accept one-time or recurring payments for your website, store, or eCommerce.
                        </p>
                      </div>
                      <div className="feature__image">
                        <img src={Settings}/>
                      </div>   
              </div>
        </div>    

      </main>

    </section>
  )
}

export default Features
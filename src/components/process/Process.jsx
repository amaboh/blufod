import React from 'react'
import './process.css'

const Process = () => {
  return (
    <section className="container container__feature">
        <h5>Our Process</h5>
        <div className="feature__text">
            <h2>HOW IT <span className="text__color">WORKS?</span></h2>
            <p>Our mission is to protect both buyers and sellers in any goods or service transaction.
               Never ship a good service and do not get paid, and never pay for service which is completed. 
               We safeguard both buyers and sellers in a transaction.</p>
        </div>
      
      <main className="process__container container">


        <div className="process__box first__row-box">  
      
          <div className="process__frame first__process "> 
            <div className="process__item">
                <main className="heading__frame process__heading">
                  <h1 className="heading__1">1</h1>
                  <h2 className="subheading__one">Buyer And Seller Agree To Terms:</h2>
                </main>
                <div className="description second__description">
                  <ul>
                    <li>✔ Description of merchandise or services</li> 
                    <li> ✔ Sale price and  Shipping information</li>
                    <li> ✔ Number of days for buyer inspection</li>
                  </ul>
                </div> 
            </div>
          </div>
          <div className="process__frame first__process "> 
            <div className="process__item">
                <main className="heading__frame process__heading">
                  <h1 className="heading__2">2</h1>
                  <h2  className="subheading__two">Buyer Makes Payment to Blufod:</h2>
                </main>
                <div className="description ">
                  <ul>
                    <li>✔ Buyer submits payment via available options</li> 
                    <li> ✔Blufod verifies receipts of payment</li>
                  </ul>
                </div> 
            </div>
          </div>

        </div>
        <div className="process__frame third__process "> 
            <div className="process__item process__center">
                <main className="heading__frame process__heading heading__special">
                  <h1 className="heading__3">3</h1>
                  <h2 className="subheading__three">Seller Ships Merchandise To Buyer Or Offer Services:</h2>
                </main>
                <div className="description">
                  <ul>
                    <li>✔Upon payment verification, seller merchandise </li> 
                    <li> ✔ Seller submits proof of shipments </li>
                  </ul>
                </div> 
            </div>
        </div>

        <div className="process__box first__row-box">  
      
      <div className="process__frame first__process "> 
        <div className="process__item">
            <main className="heading__frame process__heading">
              <h1 className="heading__4">4</h1>
              <h2 className="subheading__four">Buyer Accepts Merchandise:</h2>
            </main>
            <div className="description first__">
              <ul>
                <li>✔  Buyer accepts or rejects merchandise within an agreed-upon timeframe</li> 
              </ul>
            </div> 
        </div>
      </div>
      <div className="process__frame first__process "> 
        <div className="process__item">
            <main className="heading__frame process__heading">
              <h1 className="heading__5">5</h1>
              <h2 className="subheading__five">Blufod  Releases Fund To The Seller:</h2>
            </main>
            <div className="description">
              <ul>
                <li>✔  Blufod.com releases funds to the seller via the method selected: 
                  Transaction is complete Safely and Securely.</li> 
                
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
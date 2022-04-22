import React from 'react'
import './benefits.css'

import { Container} from "react-bootstrap"
import Image from "react-image-webp"

const Benefits = () => {
  return (
    <section className="container container__benefits">
      
        <main className="benefits__main-image">
            <Image
                  alt="blufod agent smiling"
                  src={require("../../assets/customer-care-image.png")}
                  webp={require("../../assets/customer-care-image.webp")}
                  />
        </main>
      <div className="benefits__text">
        <div className="benefits__area">
          <h5>Why use us?</h5>
              <div className="feature__text">
                <h2>BENEFITS OF USING BLUFOD</h2>
                <p>The Seller can see the payment is held in blufod escrow, 
                  boosting their confidence in the transaction, and the Buyer
                </p>
            </div>
        </div>       
    </div>
</section>
  )
}

export default Benefits
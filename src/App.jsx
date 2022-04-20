import React,{Suspense} from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Features from './components/features/Features'
import Process from './components/process/Process'
import Benefits from './components/benefits/Benefits'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

import {Helmet} from "react-helmet";



function App() {
  return (
    <Suspense fallback={null}>
      <>
      <Helmet>
        <title>blufod | Simplified payments for social commerce</title>
        <meta name="description" content="pay for anything with ease" />
       </Helmet>
        <Header/>
        <Main/>
        <Features/>
        <Process/>
        <Benefits/>
        <Services/>
        <Footer/>
    </>
    </Suspense>

  );
}

export default App;

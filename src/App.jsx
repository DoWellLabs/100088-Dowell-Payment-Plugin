
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PayPalNew from './comp/payment/PayPalNew'
import PayPalVerify from "./comp/payment/PayPalVerify";

function App() {

  return (
    <div className='container'>

      {/* <PayPal></PayPal>
      <Stripe></Stripe>
      <PayPalVerified></PayPalVerified> */}

<Router>
        <Routes>
          <Route path="/" element={<PayPalNew />} />
          <Route path="/response" element={<PayPalVerify />} />
          

          
        </Routes>
      </Router>

    </div>
     
    
  )
}

export default App

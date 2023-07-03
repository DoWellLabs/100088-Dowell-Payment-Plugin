// import "./frontend.scss"
// import React, { useState } from "react"
// import ReactDOM from "react-dom"
// import { Stripe } from "./components/Stripe"

// const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

// divsToUpdate.forEach(div => {
//   const data = JSON.parse(div.querySelector("pre").innerText)
//   ReactDOM.render(<OurComponent {...data} />, div)
//   div.classList.remove("boilerplate-update-me")
// })

// function OurComponent(props) {
//   return <Stripe />
// }


import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Stripe } from "./components/Stripe"
import { GetPaypal } from './components/GetPaypal';
import { GetStripe } from './components/GetStripe';
import { Paypal } from './components/Paypal';

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")
divsToUpdate.forEach(div => {
  ReactDOM.render(
    <OurComponent />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const [showStripe, setShowStripe] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  const handleStripeButtonClick = () => {
    setShowStripe(true);
    setShowPaypal(false);
  };

  const handlePaypalButtonClick = () => {
    setShowStripe(false);
    setShowPaypal(true);
  };

  return (
    <>
      <div className="button-container">
        <button className="button" onClick={handleStripeButtonClick}>Stripe</button>
        <button className="button" onClick={handlePaypalButtonClick}>Paypal</button>
      </div>

      {showStripe && <Stripe />}
      {showPaypal && <Paypal />}
      {showPaypal && <GetPaypal />}
      {showStripe && <GetStripe />}
    </>
  )
}












// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

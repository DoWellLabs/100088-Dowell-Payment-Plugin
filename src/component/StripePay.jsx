import { useState, useEffect } from 'react';
import './Stripe.css'
import axios from 'axios';

function App() {
  const [price, setPrice] = useState(500);
  const [product, setProduct] = useState("product name");
  const [currency, setCurrency] = useState("usd");
  const [approvalUrl, setApprovalUrl] = useState('');
  const [timeZone, setTimeZone] = useState("Asia/Calcutta")
  const [description, setDescription] = useState("credit")
  const [credit, setCredit] = useState("1000")
  const [paymentId, setPaymentId] = useState('');

  const handlePayment = async () => {
    const paymentData = {
      price: price,
      product: product,
      currency_code: currency,
      callback_url: "https://www.google.com",
      timezone: timeZone,
      description:description,
      credit:credit
    };

   
    try {
      const response = await axios.post('https://100088.pythonanywhere.com/api/stripe/initialize', paymentData);
      const { approval_url, payment_id } = response.data;
      // setApprovalUrl(approval_url);
      setPaymentId(payment_id)

      // Open the approval_url in a new window or tab
      window.open(approval_url, '_blank');
      // Verifying the payment
      // const verifyData = {
      //   // stripe_key: "sk_test_51LiKUnEJkGNthfbzNbTn7Up7EnVwyeqRWLcRX1UWyq7ABL7wn1VMmHsS4Aox3U9b2nh3HkHd32vsQRR7nItC8ybv00WChhFen4",
      //   id: payment_id
      // };
      
      // try {
      //   const verifyResponse = await axios.post('https://100088.pythonanywhere.com/api/verify/payment/stripe', verifyData);
      //   if (verifyResponse.data) {
      //     console.log("Payment Verified: ", verifyResponse.data);
      //     // Set some state indicating successful verification if needed
      //   } else {
      //     console.log("Payment verification response is empty.");
      //     // Set some state indicating failed verification if needed
      //   }
      // } catch (verifyError) {
      //   console.log("Error verifying payment: ", verifyError);
      //   // Set some state indicating failed verification if needed
      // }

       

    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };

   useEffect(() => {
    // Check if paymentId is available
    if (paymentId) {
      // Perform payment verification using the paymentId
      const verifyData = {
        // ... your verification data ...
        id: paymentId
      };

      axios.post('.../verify/payment', verifyData)
        .then((verifyResponse) => {
          if (verifyResponse.data) {
            console.log("Payment Verified: ", verifyResponse.data);
            // Update UI to show success message or take appropriate actions
          } else {
            console.log("Payment verification response is empty.");
            // Update UI to show error message or take appropriate actions
          }
        })
        .catch((verifyError) => {
          console.log("Error verifying payment: ", verifyError);
          // Update UI to show error message or take appropriate actions
        });
    }
  }, [paymentId]); // Run this effect when paymentId changes

  return (
    <div className='container'>
      <div className='main-page'>
        <h1 className="header">Stripe Payment</h1>
        <label>Price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> </label>
        <label>Product: <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} /> </label>
        <label>Currency: <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} /> </label>
        <label>Time Zone: <input type="text" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} /> </label>
        <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> </label>
        <label>Credit: <input type="text" value={credit} onChange={(e) => setCredit(e.target.value)} /> </label>
        <button onClick={handlePayment}>Initialize Payment</button>
      </div>
    </div>
  )
}

export default App;

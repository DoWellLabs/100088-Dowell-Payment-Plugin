import { useState } from 'react';
import './Stripe.css'
import axios from 'axios';


const InitializePayment = () => {
    const [price, setPrice] = useState(500);
  const [product, setProduct] = useState("product name");
  const [currency, setCurrency] = useState("usd");
  const [timeZone, setTimeZone] = useState("Asia/Calcutta")
  const [description, setDescription] = useState("credit")
  const [credit, setCredit] = useState("1000")
  const [paymentId, setPaymentId] = useState('');
  const [loading, setLoading] = useState("false")

  const handleStripePayment = async (e) => {
    e.preventDefault()
    setLoading(true)
    const paymentData = {
      price: price,
      product: product,
      currency_code: currency,
      callback_url: "http://localhost:5173/response",
      timezone: timeZone,
      description:description,
      credit:credit
    };
    try {
      const response = await axios.post('https://100088.pythonanywhere.com/api/stripe/initialize', paymentData);
      setLoading(false)
      const { approval_url, payment_id } = response.data;
      setPaymentId(payment_id)

      // Save the payment_id to local storage
      localStorage.setItem('paymentId', payment_id);
      // Open the approval_url in a new window or tab
      window.open(approval_url, '_blank');

    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };
  return (
    <div className='container'>
      <div className='main-page'>
        <h1 className="header">Stripe Payment</h1>
        <label>Price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /> </label>
        <label>Product: <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} /> </label>
        <label>Currency: <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} /> </label>
        {/* <label>Time Zone: <input type="text" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} /> </label>
        <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> </label>
        <label>Credit: <input type="text" value={credit} onChange={(e) => setCredit(e.target.value)} /> </label> */}
        <button onClick={handleStripePayment}>Initialize Payment</button>
      </div>
    </div>
  )
}

export default InitializePayment

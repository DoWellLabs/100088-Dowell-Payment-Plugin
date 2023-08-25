import  { useState } from 'react';
import axios from 'axios';
import './InitializePayment.css'

const InitializePayment = () => {
  const [price, setPrice] = useState(500);
  const [product, setProduct] = useState("product name");
  const [currency, setCurrency] = useState("usd");
  const [timeZone, setTimeZone] = useState("Asia/Calcutta");
  const [description, setDescription] = useState("credit");
  const [credit, setCredit] = useState("1000");
  const [paymentId, setPaymentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // Toggle state for form

  const handleStripePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    const paymentData = {
      price: price,
      product: product,
      currency_code: currency,
      callback_url: "http://localhost:5173/response",
      timezone: timeZone,
      description: description,
      credit: credit
    };
    
    try {
      const response = await axios.post('https://100088.pythonanywhere.com/api/stripe/initialize', paymentData);
      setLoading(false);
      const { approval_url, payment_id } = response.data;
      setPaymentId(payment_id);
      localStorage.setItem('paymentId', payment_id);
      window.open(approval_url, '_blank');
    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };

  return (
    <div className='container'>
      <div className='main-page'>
        <h1 className="header">Stripe Payment</h1>
        <button
          className="toggle-button"
          onClick={() => setShowForm(!showForm)} // Toggle showForm state
        >
          {showForm ? 'Hide Stripe Form' : 'Show Stripe Form'}
        </button>
        {showForm && (
          <form>
            <label>Price: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
            <label>Product: <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} /></label>
            <label>Currency: <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} /></label>
            <button onClick={handleStripePayment}>Initialize Payment</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default InitializePayment;

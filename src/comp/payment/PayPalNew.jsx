import  { useState } from 'react';
import './PayPalNew.css'

function PayPalNew() {
  const [approvalUrl, setApprovalUrl] = useState("");
  // const[payment_id,setPayment_id]=useState("");
  const [showForm, setShowForm] = useState(false); // New state for showing/hiding form



  // const [initialized, setInitialized] = useState(false);
  // const [approved, setApproved] = useState(false);

  const [formData, setFormData] = useState({
    price: 20,
    currency_code: 'usd',
    product: '',
    callback_url: 'https://www.google.com',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const initializePayment = async () => {
    try {
      const response = await fetch('https://100088.pythonanywhere.com/api/paypal/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer e872ab5f-f17c-4efb-b343-1d96c12a5608',
        },
        body: JSON.stringify({
          price: formData.price,
          product: formData.product,
          currency_code: formData.currency_code,
          callback_url: formData.callback_url,
          timezone: 'Asia/Calcutta',
          description: 'credit',
          credit: '1000',
        }),
      });
      const data = await response.json();
      setApprovalUrl(data.approval_url);
      // setPayment_id(data.payment_id)
      // setInitialized(true);
     window.open(approvalUrl,'_blank');
    } catch (error) {
      console.error('Error initializing payment:', error);
    }
  };

  
  return (
    <div className="PayPalNew">
      <h1>PayPal Payment</h1>
      <button
        className="toggle-button"
        onClick={() => setShowForm(!showForm)} // Toggle showForm state
      >
        {showForm ? 'Hide PayPal Form' : 'Show PayPal Form'}
      </button>
      {showForm && (
      <form>
        <label>
          Product Name:
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Currency Code:
          <input
            type="text"
            name="currency_code"
            value={formData.currency_code}
            onChange={handleChange}
            required
          />
        </label>

        
     
        <button type="button" onClick={initializePayment}>
          Initialize Payment
        </button>
      </form>
      )}
      
    </div>
  );
}

export default PayPalNew;

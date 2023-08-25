import { useState } from "react";
import "./PayPal.css"

const PayPal = () => {
  const [approvalUrl, setApprovalUrl] = useState("");
  const[payment_id,setPayment_id]=useState("")
  const [price, setPrice] = useState(500);
  const [product, setProduct] = useState("product name");
  const [currency_code, setCurrency_code] = useState("usd");

  const handleSubmit = async () => {
    const apiUrl =
      "https://100088.pythonanywhere.com/api/paypal/initialize/public/a7c3b800-f141-448d-8c33-e198cd51c1df";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paypal_client_id:
          "AVJXJddOEG7WGrLkTzg4_9ODsDNhIHrqT4ZL6gwXRz1ftQELliYtticZH-kLjoYaTZfNn_8y5onH_YP3",
        paypal_secret_key:
          "ELsNyOGLDJVZCsfuuu5AhsFRmQbgBwxEVZteB-2XLZm8RLa8cPeS_cfNi35w7bJwkOKDHOnNxyHsJKu6",
        price,
        product,
        currency_code,
      }),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      setApprovalUrl(data.approval_url);
      setPayment_id(data.payment_id)
    } catch (error) {
      console.error("Error while initializing payment:", error);
    }
  };

  return (
    <div className="home-container">
      <h2 className="h">PayPal Payment</h2>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Product:
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </label>
      <label>
        Currency:
        <input
          type="text"
          value={currency_code}
          onChange={(e) => setCurrency_code(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Initialize Payment</button>
      {approvalUrl && (
        <div>
          <p>Approval URL:</p>
          <a href={approvalUrl} target="_blank" rel="noopener noreferrer">
            {approvalUrl}

          
          </a>
          <p>payment user ID: {payment_id}</p>
        </div>
      )}
    </div>
  );
};

export default PayPal;
import  { useEffect, useState } from 'react';

import axios from 'axios';


const PayPalVerify = () => {
  const [verificationResult, setVerificationResult] = useState(null);
useEffect(() => {
    const paymentId = localStorage.getItem('paymentId');

    if (paymentId) {
      const verifyData = {
        id: paymentId
      };

      axios.post('https://100088.pythonanywhere.com/api/verify/payment/paypal', verifyData)
        .then((verifyResponse) => {
          if (verifyResponse.data) {
            setVerificationResult("success");
          } else {
            setVerificationResult("failed");
          }
        })
        .catch((verifyError) => {
          console.log(`Error verifying payment: ${paymentId}`, verifyError);
        });
    }
  }, []); // Run this effect when paymentId change

  return (
   <div>
      {verificationResult === "success" && (
        <h1>Payment Successful</h1>
      )}
      {verificationResult === "failed" && (
        <h1>Payment Failed</h1>
      )}
      {verificationResult === null && (
        <p>Verifying payment...</p>
      )}
    </div>
  );
};

export default PayPalVerify;
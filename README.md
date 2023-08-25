## 100088-Dowell-Payment-Plugin


* Stripe
* PayPal

This project initialize a stripe or paypal payment base on the user choice. When the user click on initialize payment button after filling the neccessary input, the user will be redirected to the user payment platform checkout page with the details of the payment. Here the user will input his/her card details and other information required by the payment platform so as to allow it debit the user. After completing the payment on the  platform, the user will be redirected to a callback page/verification page where the paymentID of the user will be verify to see if stripe/paypal was able to sucessfully debit the user. If the paymentID status is successfully, the user will see "Payment Succesful" on the screen with a button to go back to the home page.. And if the paymentID status failed, the user will see "Payment failed" on the screen with a button to go back to the home page to start the payment process again. 

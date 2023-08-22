import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitializePayment from "./StripePay";
import ResponsePage from "./StripeVerification";


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<InitializePayment />} />
          <Route path="/response" element={<ResponsePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

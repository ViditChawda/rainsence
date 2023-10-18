import Form from "./pages/Form.tsx";
import LandingPage from "./pages/landingpage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/predict-form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
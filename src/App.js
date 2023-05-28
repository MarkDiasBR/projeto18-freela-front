import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenWithHeader from "./components/ScreenWithHeader/ScreenWithHeader";
import Home from "./pages/Home/Home";
// import '@ionic/react/css/ionic.bundle.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenWithHeader><Home /></ScreenWithHeader>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import SingleCoinPage from "./pages/SingleCoinPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="coins" element={<CoinPage />} />
          <Route path="coins/:coinsId" element={<SingleCoinPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

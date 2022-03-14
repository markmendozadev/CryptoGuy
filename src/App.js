import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import SingleCoinPage from "./pages/SingleCoinPage";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="coins" element={<CoinPage />} />
          <Route path="coins/:coinsId" element={<SingleCoinPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

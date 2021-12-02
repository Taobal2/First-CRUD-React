import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutUsPage from "./pages/AboutUsPage";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/create-page" element={<CreatePage />}></Route>
          <Route path="/about-us" element={<AboutUsPage />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

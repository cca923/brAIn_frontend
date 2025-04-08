import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { isPageLoadingSelector } from "./store/selectors";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import MainPage from "./pages/MainPage";
import SummaryButton from "./pages/SummaryPage";
import ChatPage from "./pages/ChatPage";
import QuizPage from "./pages/QuizPage";
import PastPage from "./pages/PastPage";

function App() {
  const isLoading = useSelector(isPageLoadingSelector);

  return (
    <Layout>
      {isLoading && <Loading />}
      <ToastContainer autoClose={2000} hideProgressBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/summary" element={<SummaryButton />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/past" element={<PastPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

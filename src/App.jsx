import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { isPageLoadingSelector } from "./store/selectors";
import Loading from "./components/Loading";
import MainPage from "./pages/MainPage";
import SummaryButton from "./pages/SummaryPage";
import ChatPage from "./pages/ChatPage";
import QuizPage from "./pages/QuizPage";
import PastPage from "./pages/PastPage";

function App() {
  const isLoading = useSelector(isPageLoadingSelector);

  return (
    <div
      style={{
        maxWidth: "1200px",
        minWidth: "760px",
        minHeight: "100vh",
        margin: "0 auto",
        overflow: "auto",
      }}
    >
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/summary" element={<SummaryButton />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/past" element={<PastPage />} />
      </Routes>
    </div>
  );
}

export default App;

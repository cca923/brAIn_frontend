import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { isPageLoadingSelector } from "./store/selectors";
import Loading from "./components/Loading";
import MainPage from "./pages/MainPage";
import SummarizationPage from "./pages/SummarizationPage";
import ChatPage from "./pages/ChatPage";
import QuizPage from "./pages/QuizPage";

function App() {
  const isLoading = useSelector(isPageLoadingSelector);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/summarization" element={<SummarizationPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;

import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import Header from "../../containers/Header";
import { summarySelector } from "../../store/selectors";
import { RowButtonsContainer } from "../../styles/common";
import QuizButton from "../../containers/Buttons/QuizButton";
import ChatButton from "../../containers/Buttons/ChatButton";

import { PageContainer, Card, SummaryContainer, Summary } from "./styles";

const SummaryPage = () => {
  const { summary } = useSelector(summarySelector);

  return (
    <PageContainer>
      <Card>
        <Header />
        <SummaryContainer>
          <Summary>
            <ReactMarkdown>{summary}</ReactMarkdown>
          </Summary>
          <RowButtonsContainer width="50%" m="auto auto 0">
            <QuizButton />
            <ChatButton />
          </RowButtonsContainer>
        </SummaryContainer>
      </Card>
    </PageContainer>
  );
};

export default SummaryPage;

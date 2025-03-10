import { IoMdExit } from "react-icons/io";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { summarySelector } from "../../store/selectors";
import { RowButtonsContainer, Icon } from "../../styles/common";
import Header from "../../containers/Header";
import QuizButton from "../../containers/Buttons/QuizButton";
import ChatButton from "../../containers/Buttons/ChatButton";
import ExitButton from "../../containers/Buttons/ExitButton";

import {
  PageContainer,
  Card,
  SummaryContainer,
  Summary,
  Alert,
} from "./styles";

const SummaryPage = () => {
  const { summary } = useSelector(summarySelector);

  return (
    <PageContainer>
      <Card>
        <Header />
        <ExitButton />
        <SummaryContainer>
          <Summary>
            {summary ? (
              <ReactMarkdown>{summary}</ReactMarkdown>
            ) : (
              <Alert>Summary is not available. Please upload the file.</Alert>
            )}
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

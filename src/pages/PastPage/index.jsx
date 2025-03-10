import ReactMarkdown from "react-markdown";

import Header from "../../containers/Header";
import { RowButtonsContainer } from "../../styles/common";
import QuizButton from "../../containers/Buttons/QuizButton";
import ChatButton from "../../containers/Buttons/ChatButton";
import ExitButton from "../../containers/Buttons/ExitButton";

import {
  PageContainer,
  Card,
  RecordContainer,
  Title,
  ListContainer,
} from "./styles";
import Item from "./Item";
import { mockData } from "./mockData";

const PastPage = () => {
  return (
    <PageContainer>
      <Card>
        <Header />
        <ExitButton />
        <RecordContainer>
          <Title>
            <div>Learning Type</div>
            <div>Date</div>
            <div>Time Spending</div>
            <div>Score</div>
          </Title>
          <ListContainer>
            {mockData?.map((data, index) => (
              <Item key={index} {...data} />
            ))}
          </ListContainer>
        </RecordContainer>
      </Card>
    </PageContainer>
  );
};

export default PastPage;

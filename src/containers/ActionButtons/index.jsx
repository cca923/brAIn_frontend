import { ButtonsContainer } from "./styles";

import ActionButton from "../../components/ActionButton";

const ActionButtons = () => {
  const actions = [
    {
      route: "summarization",
      name: "View Summarization",
      icon: "🔍",
      onClick: () => {},
    },
    { route: "past", name: "Past Learning", icon: "📚", onClick: () => {} },
    { route: "chat", name: "AI Chat", icon: "🎤", onClick: () => {} },
    { route: "quiz", name: "AI Quiz", icon: "📝", onClick: () => {} },
  ];

  return (
    <ButtonsContainer>
      {actions?.map((action) => (
        <ActionButton key={action?.route} onClick={action?.onClick}>
          <span>{action?.icon}</span> {action?.name}
        </ActionButton>
      ))}
    </ButtonsContainer>
  );
};

export default ActionButtons;

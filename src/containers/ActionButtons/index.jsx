import { ActionButton, ButtonsContainer } from "./styles";

const ActionButtons = () => {
  const actions = [
    { id: "summarization", name: "View Summarization", icon: "🔍" },
    { id: "past-learning", name: "Past Learning", icon: "📚" },
    { id: "oral-learning", name: "AI Oral Learning", icon: "🎤" },
    { id: "quiz", name: "AI Quiz", icon: "📝" },
  ];

  return (
    <ButtonsContainer>
      {actions.map((action) => (
        <ActionButton
          key={action.id}
          onClick={() => console.log(`${action.name} clicked`)}
        >
          <span>{action.icon}</span> {action.name}
        </ActionButton>
      ))}
    </ButtonsContainer>
  );
};

export default ActionButtons;

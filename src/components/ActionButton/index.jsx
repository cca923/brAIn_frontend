import { ButtonContainer } from "./styles";

const ActionButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) => {
  const handleClick = () => {
    onClick?.({ type, disabled, ...rest });
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

export default ActionButton;

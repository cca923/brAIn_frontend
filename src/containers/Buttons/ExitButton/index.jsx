import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router";

import { Icon } from "../../../styles/common";

import { ButtonContainer } from "./styles";

const ExitButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <Icon>
        <IoMdExit />
      </Icon>
    </ButtonContainer>
  );
};

export default ExitButton;

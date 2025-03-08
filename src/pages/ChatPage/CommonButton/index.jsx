import { Icon } from "../../../styles/common";

import { ButtonContainer } from "./styles";

const CommonButton = ({ variant, onClick, disabled, iconComponent }) => (
  <ButtonContainer variant={variant} onClick={onClick} disabled={disabled}>
    <Icon>{iconComponent}</Icon>
  </ButtonContainer>
);

export default CommonButton;

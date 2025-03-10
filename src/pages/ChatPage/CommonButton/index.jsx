import { Icon } from "../../../styles/common";

import { ButtonContainer } from "./styles";

const CommonButton = ({ onClick, disabled, iconComponent, ...rest }) => (
  <ButtonContainer onClick={onClick} disabled={disabled} {...rest}>
    <Icon>{iconComponent}</Icon>
  </ButtonContainer>
);

export default CommonButton;

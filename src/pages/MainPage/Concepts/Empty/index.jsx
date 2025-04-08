import { MdOutlineQuiz } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { Icon } from "../../../../styles/common";

import { EmptyContainer } from "./styles";

const Empty = () => (
  <EmptyContainer>
    {`No key concepts identified yet.\nLet’s get learning!`}
    <div className="icons">
      <Icon fontSize="20px" mr="5px">
        <MdOutlineQuiz />
      </Icon>
      <Icon fontSize="20px">
        <IoChatboxEllipsesOutline />
      </Icon>
    </div>
  </EmptyContainer>
);

export default Empty;

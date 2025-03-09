import { useNavigate } from "react-router";
import { MdHistory } from "react-icons/md";

import { Icon } from "../../../styles/common";
import ActionButton from "../../../components/ActionButton";

const PastButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/past");
  };

  return (
    <ActionButton onClick={handleClick}>
      <Icon fontSize="20px" mr="5px">
        <MdHistory />
      </Icon>
      Past Learning
    </ActionButton>
  );
};

export default PastButton;

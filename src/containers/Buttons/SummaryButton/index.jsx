import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IoIosSearch } from "react-icons/io";

import ActionButton from "../../../components/ActionButton";
import { Icon } from "../../../styles/common";
import { handleLoadSummary } from "../../../store/summary/service";

const SummaryButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(handleLoadSummary());
    navigate("/summary");
  };

  return (
    <ActionButton onClick={handleClick}>
      <Icon fontSize="20px" mr="5px">
        <IoIosSearch />
      </Icon>
      View Summary
    </ActionButton>
  );
};

export default SummaryButton;

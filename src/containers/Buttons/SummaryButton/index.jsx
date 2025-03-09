import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ActionButton from "../../../components/ActionButton";
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
      <span>🔍</span> View Summary
    </ActionButton>
  );
};

export default SummaryButton;

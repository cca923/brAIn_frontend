import { FaCheckCircle } from "react-icons/fa";

import ProgressBar from "../../../../components/ProgressBar";
import { Icon } from "../../../../styles/common";
import { percentageValue } from "../../../../utils/format";

import { ItemContainer } from "./styles";

const Item = ({ concept, percentage }) => {
  const value = percentageValue(percentage);
  const isComplete = value === 100;

  return (
    <ItemContainer>
      {concept}
      <ProgressBar percentage={value} />
      {isComplete && (
        <Icon className="icon-complete" fontSize="20px">
          <FaCheckCircle color="#51ca71" />
        </Icon>
      )}
    </ItemContainer>
  );
};

export default Item;

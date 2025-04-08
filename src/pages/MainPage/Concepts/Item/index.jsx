import { FaFaceSmile } from "react-icons/fa6";
import { FaFaceFrown } from "react-icons/fa6";

import ProgressBar from "../../../../components/ProgressBar";
import { Icon } from "../../../../styles/common";
import { percentageValue } from "../../../../utils/format";

import { ItemContainer } from "./styles";

const Item = ({ name, familiarity }) => {
  const value = percentageValue(+familiarity * 100);
  const familiar = value >= 80;
  const unfamiliar = value <= 20;

  return (
    <ItemContainer>
      {name}
      <ProgressBar percentage={value} />
      {familiar && (
        <Icon className="icon-status" fontSize="20px">
          <FaFaceSmile color="#51ca71" />
        </Icon>
      )}
      {unfamiliar && (
        <Icon className="icon-status" fontSize="20px">
          <FaFaceFrown color="#e74c3c" />
        </Icon>
      )}
    </ItemContainer>
  );
};

export default Item;

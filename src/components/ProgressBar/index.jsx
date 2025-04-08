import { percentageValue } from "../../utils/format";

import { ProgressBarContainer, ProgressFill, ProgressText } from "./styles";

const ProgressBar = ({ percentage = 0 }) => {
  const value = percentageValue(percentage);

  return (
    <ProgressBarContainer>
      <ProgressFill percentage={value} />
      <ProgressText>{value}%</ProgressText>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

import { IconSettings } from "./icons";
import InfoBlock from "./InfoBlock";

const CarryBlock = () => {
  return (
    <InfoBlock
      icon={
        <div className="carry-block__icon">
          <IconSettings width="24px" height="24px" fill="white" />
        </div>
      }
      title="Support"
      subtitle="i'm carry"
      description="From design to development and deployment. No intermediaries, everything goes through me."
      className="carry-block"
    />
  );
};

export default CarryBlock;

import { IconWork } from "../assets/icons";
import InfoBlock from "./InfoBlock";

const WorkBlock = () => {
  return (
    <InfoBlock
      icon={<IconWork width="18px" height="18px" fill="white" />}
      title="Completed"
      subtitle="99%"
      description="I have worked on many projects, which you can review on my GitHub."
      className="work-block"
    />
  );
};

export default WorkBlock;

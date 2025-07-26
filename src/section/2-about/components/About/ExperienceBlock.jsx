import { IconExperience } from "./icons";
import InfoBlock from "./InfoBlock";

const ExperienceBlock = () => {
  return (
    <InfoBlock
      icon={<IconExperience width="18px" height="18px" fill="white" />}
      title="Experience"
      subtitle="4 years"
      description="I went from working as a freelancer to holding senior positions at major companies in my country."
      className="experience-block"
    />
  );
};

export default ExperienceBlock;

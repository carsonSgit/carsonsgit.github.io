import { motion } from "framer-motion";
import type React from "react";
import { SLIDE_UP_ANIMATION } from "../../../utils/animations";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  return (
    <motion.div className="experience-page" {...SLIDE_UP_ANIMATION}>
      <ExperienceTimeline />
    </motion.div>
  );
};

export default Experience;

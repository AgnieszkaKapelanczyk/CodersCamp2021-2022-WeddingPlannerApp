import MainSection from './Sections/MainSection';
import AboutSection from './Sections/AboutSection';
import FeaturesSection from './Sections/FeaturesSection';
import HowItWorksSection from './Sections/HowItWorksSection';
import SubscribeSection from './Sections/SubscribeSection';
import ThemeSection from './Sections/ThemeSection';
import PlanSection from './Sections/PlanSection';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <MainSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SubscribeSection />
      <ThemeSection />
      <PlanSection />
    </Box>
  );
};

export default HomePage;

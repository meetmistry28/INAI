import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import './App.css';
import Careers from './pages/Careers';
import Internship from './pages/Internship';
import JobDetails from './pages/JobDetails';

// Import meta configuration
import { metaConfig } from './config/metaConfig';
import AIMLExplore from './pages/AIMLExplore';
import AutomationExplore from './pages/AutomationExplore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RoboticsExplore from './pages/RoboticsExplore';
import Loader from './components/Loader';
import Box from './pages/box';
import Programs from './pages/programs';
import Contact from './pages/Contact';
import PLC from './pages/Plc';
import SCADA from './pages/Scada';
import HMI from './pages/Hmi';
import RPA from './pages/Rpa';
import BPA from './pages/Bpa';
import IPA from './pages/Ipa';
import DCS from './pages/Dcs';
import ADAS from './pages/Adas';
import Python from './pages/Python';
import Mathematics from './pages/Mathematics';
import Dl from './pages/Dl';
import Ml from './pages/Ml';
import Nlp from './pages/Nlp';
import Llm from './pages/Llm';
import Slm from './pages/Slm';
import Cv from './pages/Cv';
import Cad from './pages/Cad';
import Pcb from './pages/Pcb';
import Ros from './pages/Ros';
import Rtos from './pages/Rtos';
import Controlsystem from './pages/Controlsystem';
import Circuit from './pages/Circuit';
import Embeddedsystem from './pages/Embeddedsystem';
import Microcontroller from './pages/Microcontroller';
import CareerPath from './pages/CareerPath';
import Login from './pages/Login';
// import PLC from './pages/Plc';
// import PLC from './pages/keyarea/Plc';

// Wrapper component that includes SEO for each page
const PageWrapper = ({ children, pageKey }) => {
  const meta = metaConfig[pageKey] || metaConfig.home;
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />
      {children}
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [loading, setLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState('');

  useEffect(() => {
    // Only initialize AOS in browser environment
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-quart'
      });
    }
  }, []);

  useEffect(() => {
    // Show loader when route changes
    if (location.pathname !== prevLocation) {
      setLoading(true);
      setPrevLocation(location.pathname);
    }

    // Hide loader when component mounts
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      <Header />
      {loading && <Loader />}
      <main className="main-content">
        <Routes location={location} key={location.key}>
          <Route path="/" element={
            <PageWrapper pageKey="careers">
              <Careers />
            </PageWrapper>
          } />
          {/* <Route path="/careers" element={
            <PageWrapper pageKey="careers">
              <Careers />
            </PageWrapper>
          } /> */}
          <Route path="/contact" element={
            <PageWrapper pageKey="contact">
              <Contact />
            </PageWrapper>
          } />
          <Route path="/programs" element={
            <PageWrapper pageKey="programs">
              <Programs />
            </PageWrapper>
          } />
          <Route path="/careers/:categoryId" element={
            <PageWrapper pageKey="careers">
              <JobDetails />
            </PageWrapper>
          } />
          <Route path="/careerspath" element={
            <PageWrapper pageKey="careerPath">
              <CareerPath />
            </PageWrapper>
          } />
          <Route path="/careers/internship" element={
            <PageWrapper pageKey="internship">
              <Internship />
            </PageWrapper>
          } />
          <Route path="/careers/ai-ml-explore" element={
            <PageWrapper pageKey="aiMlExplore">
              <AIMLExplore />
            </PageWrapper>
          } />
          <Route path="/careers/automation-explore" element={
            <PageWrapper pageKey="automationExplore">
              <AutomationExplore />
            </PageWrapper>
          } />
          <Route path="/box" element={
            <PageWrapper pageKey="careers">
              <Box />
            </PageWrapper>
          } />
          <Route path="/plc" element={
            <PageWrapper pageKey="plc">
              <PLC />
            </PageWrapper>
          } />
          <Route path="/scada" element={
            <PageWrapper pageKey="scada">
              <SCADA />
            </PageWrapper>
          } />
          <Route path="/hmi" element={
            <PageWrapper pageKey="hmi">
              <HMI />
            </PageWrapper>
          } />
          <Route path="/careers/robotics-explore" element={
            <PageWrapper pageKey="roboticsExplore">
              <RoboticsExplore />
            </PageWrapper>
          } />
          <Route path="/rpa" element={
            <PageWrapper pageKey="rpa">
              <RPA />
            </PageWrapper>
          } />
          <Route path="/bpa" element={
            <PageWrapper pageKey="bpa">
              <BPA />
            </PageWrapper>
          } />
          <Route path="/ipa" element={
            <PageWrapper pageKey="ipa">
              <IPA />
            </PageWrapper>
          } />
          <Route path="/dcs" element={
            <PageWrapper pageKey="dcs">
              <DCS />
            </PageWrapper>
          } />
          <Route path="/adas" element={
            <PageWrapper pageKey="adas">
              <ADAS />
            </PageWrapper>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/python" element={
            <PageWrapper pageKey="python">
              <Python />
            </PageWrapper>
          } />
          <Route path="/mathematics" element={
            <PageWrapper pageKey="mathematics">
              <Mathematics />
            </PageWrapper>
          } />
          <Route path="/dl" element={
            <PageWrapper pageKey="dl">
              <Dl />
            </PageWrapper>
          } />
          <Route path="/ml" element={
            <PageWrapper pageKey="ml">
              <Ml />
            </PageWrapper>
          } />
          <Route path="/nlp" element={
            <PageWrapper pageKey="nlp">
              <Nlp />
            </PageWrapper>
          } />
          <Route path="/llm" element={
            <PageWrapper pageKey="llm">
              <Llm />
            </PageWrapper>
          } />
          <Route path="/cv" element={
            <PageWrapper pageKey="cv">
              <Cv />
            </PageWrapper>
          } />
          <Route path="/small-lm" element={
            <PageWrapper pageKey="smallLm">
              <Slm />
            </PageWrapper>
          } />
          <Route path="/cad" element={
            <PageWrapper pageKey="cad">
              <Cad />
            </PageWrapper>
          } />
          <Route path="/pcb" element={
            <PageWrapper pageKey="pcb">
              <Pcb />
            </PageWrapper>
          } />
          <Route path="/ros" element={
            <PageWrapper pageKey="ros">
              <Ros />
            </PageWrapper>
          } />
          <Route path="/rtos" element={
            <PageWrapper pageKey="rtos">
              <Rtos />
            </PageWrapper>
          } />
          <Route path="/controlsystem" element={
            <PageWrapper pageKey="controlsystem">
              <Controlsystem />
            </PageWrapper>
          } />
          <Route path="/circuit" element={
            <PageWrapper pageKey="circuit">
              <Circuit />
            </PageWrapper>
          } />
          <Route path="/embeddedsystem" element={
            <PageWrapper pageKey="embeddedsystem">
              <Embeddedsystem />
            </PageWrapper>
          } />
          <Route path="/microcontroller" element={
            <PageWrapper pageKey="microcontroller">
              <Microcontroller />
            </PageWrapper>
          } />

        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <>
        <AppContent />
      </>
    </Router>
  );
}

export default App;

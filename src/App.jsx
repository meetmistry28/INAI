import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/HomePage/Home";
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WebScrapping from './pages/Web-scraping';
import Data_manipulation from './pages/Data_manipulation';
import Model_training from './pages/Model_training';
import INAIWorldsBestAICompany1 from './pages/INAIWorldsBestAICompany1';
import INAIWorldsBestAICompany2 from './pages/INAIWorldsBestAICompany2';
import INAIWorldsBestAICompany3 from './pages/INAIWorldsBestAICompany3';
import What_is_AI from './pages/What_is_AI';
import What_is_ML from './pages/What_is_ML';
import What_is_web_scraping from './pages/What_is_web_scraping';
import Real_life_AI_ML_use from './pages/Real_life_AI_ML_use';
import Blog5 from './pages/Blog5';
import Inai_life from './pages/Inai_life';
import Influwket from './pages/Influwket';
import Veedket from './pages/Veedket';
import Offiket from './pages/Offiket';
import './App.css';
import Terms_and_conditions from './pages/Policy/Terms_and_conditions';
import Privacy_policy from './pages/Policy/Privacy_policy';
import NotFound from './components/NotFound';
import AIMLInternshipInSurat from './pages/AIMLInternshipInSurat';
import Blog6 from './pages/Blog6';
import Blog7 from './pages/Blog7';
import Blog8 from './pages/Blog8';
import Blog9 from './pages/Blog9';
import Blog10 from './pages/Blog10';
import Blog11 from './pages/Blog11';
import Blog12 from './pages/Blog12';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio /> } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-scraping" element={<WebScrapping />} />
            <Route path="/services/data-manipulation" element={<Data_manipulation />} />
            <Route path="/services/model-training" element={<Model_training />} />
            <Route path="/portfoilo/inai-life" element={<Inai_life />} />  
            <Route path="/portfoilo/influwket" element={<Influwket />} />
            <Route path="/portfoilo/veedket" element={<Veedket />} />
            <Route path="/portfoilo/offiket" element={<Offiket />} />
            <Route path="/blog/what-is-artificial-intelligence" element={<What_is_AI />} />
            <Route path="/blog/what-is-machine-learning" element={<What_is_ML />} />
            <Route path="/blog/what-is-web-scraping" element={<What_is_web_scraping />} />
            <Route path="/blog/ai-ml-real-life" element={<Real_life_AI_ML_use />} />
            <Route path="/blog/how-ai-ml-internship-change-career" element={<Blog5 />} />
            <Route path="/blog/inai-worlds-top-ai-company" element={<Blog6 />} />
            <Route path="/blog/ai-ml-internship-benefits-product-based-ai-company" element={<Blog7 />} />
            <Route path="/blog/ai-indian-top-industries" element={<Blog8 />} />
            <Route path="/blog/ai-companies-transforming-businesses" element={<Blog9 />} />
            <Route path="/blog/top-python-libraries-web-scraping" element={<Blog10 />} />
            <Route path="/blog/data-manipulation-powers-ai-model-training" element={<Blog11 />} />
            <Route path="/blog/ai-ml-internship-matter-more-than-certification" element={<Blog12 />} />
            <Route path="/Terms_and_conditions" element={<Terms_and_conditions />} />
            <Route path="/Privacy_policy" element={<Privacy_policy />} />
            <Route path="/best-ai-company-india" element={<INAIWorldsBestAICompany1 />} />
            <Route path="/best-ai-company-gujarat" element={<INAIWorldsBestAICompany2 />} />
            <Route path="/best-ai-company-surat" element={<INAIWorldsBestAICompany3 />} /> 
            <Route path="/best-ai-ml-internship-surat" element={<AIMLInternshipInSurat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      <ScrollToTopButton />
    </div>
  </Router>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { About,  Contact,  Hero,  Navbar, Tech,  Works, StarsCanvas, } from "./components"; 
import  MyProfiles  from "./components/MyProfiles";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <MyProfiles />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>

  
)};


export default App;

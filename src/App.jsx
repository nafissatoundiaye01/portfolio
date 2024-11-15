import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import "../src/index.css"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary full-width'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

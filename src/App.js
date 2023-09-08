import "./App.css";
import Home from "./MyCompoment/Home";
import About from "./MyCompoment/About";
import Work from "./MyCompoment/Work";
import Testimonial from "./MyCompoment/Testimonial";
import Contact from "./MyCompoment/Contact";
import Footer from "./MyCompoment/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
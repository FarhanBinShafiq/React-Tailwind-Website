import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import PricingCards from "./components/PricingCards/PricingCards";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Newsletter></Newsletter>
      <PricingCards></PricingCards>
      <Footer></Footer>
    </div>
  );
}

export default App;

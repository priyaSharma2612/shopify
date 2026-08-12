import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NewArrivalSection from "./components/NewArrivalSection";
import OfferSection from "./components/OfferSection";
import Policies from "./components/Policies";
import TrendingProducts from "./components/TrendingProducts";
function App() {
  return (
    <div>
      <Content />
      <Policies />
      <TrendingProducts />
      <OfferSection />
      <NewArrivalSection />
      <Footer />
    </div>
  );
}

export default App;

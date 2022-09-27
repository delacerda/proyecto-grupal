import Header from "./components/Header";
import Home from "./components/Home";
import Fixture from "./components/Fixture/Fixture";
import Footer from "./components/Footer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Countdown from "./components/Countdown/Countdown";
import WhatsappBtn from "./components/WhatsappBtn";
import Carrusel from "./components/Carrusel/Carrusel";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";







function App() {
  return (
    <>
      <Header />
      <Home />
      <Countdown countdownTimestampMs={1668970800000} />
      <ShoppingCart/>
      <SobreNosotros />
      <Fixture />
      <WhatsappBtn/>
      <Carrusel /> 
      <Footer />
    </>
  );
}

export default App;

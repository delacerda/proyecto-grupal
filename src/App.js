import Header from "./components/Header";
import Home from "./components/Home";
import ListaFiguritas from "./components/ListaFiguritas";
import Fixture from "./components/Fixture/Fixture";
import Footer from "./components/Footer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Countdown from "./components/Countdown/Countdown";
import WhatsappBtn from "./components/WhatsappBtn";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Countdown countdownTimestampMs={1668970800000} />
      <ListaFiguritas />
      <SobreNosotros />
      <Fixture />
      <WhatsappBtn/>
      <Footer />
    </>
  );
}

export default App;

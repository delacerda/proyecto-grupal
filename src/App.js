import Header from "./components/Header";
import Home from "./components/Home";
import ListaFiguritas from "./components/ListaFiguritas";
import Fixture from "./components/Fixture/Fixture";
import Footer from "./components/Footer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";
import Countdown from "./components/Countdown/Countdown";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Countdown countdownTimestampMs={1668970800000} />
      <ListaFiguritas />
      <SobreNosotros />
      <Fixture />
      <Footer />
    </>
  );
}

export default App;

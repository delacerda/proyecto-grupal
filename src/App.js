import Header from "./components/Header";
import Home from "./components/Home";
import ListaFiguritas from "./components/ListaFiguritas";
import Fixture from "./components/Fixture/Fixture";
import Footer from "./components/Footer";
import SobreNosotros from "./components/sobreNosotros/SobreNosotros";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ListaFiguritas />
      <SobreNosotros />
      <Fixture />
      <Footer />
    </>
  );
}

export default App;

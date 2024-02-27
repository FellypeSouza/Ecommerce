import './styles/App.scss';
import Offer from './components/Offer';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import Brands from './components/Brands';
import Products from './components/Products';
import Clothes from './components/Clothes';
import Footer from './components/Footer';


function App() {
  return (
    <section className="App">
      <Offer></Offer>
      <Nav></Nav>
      <Showcase></Showcase>
      <Brands></Brands>
      <Products></Products>
      <Clothes></Clothes>
      <Footer></Footer>
    </section>
  );
}
export default App;


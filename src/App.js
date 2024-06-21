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
        <Offer/>
        <Nav/>
        <Showcase/>
        <Brands/>
        <Products/>
        <Clothes/>
        <Footer/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          learn react
        </a>
      </section>
  );
}
export default App;


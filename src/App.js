import './styles/App.scss';
import Offer from './components/Offer';
import Nav from './components/Nav';
import Showcase from './components/Showcase';
import Brands from './components/Brands';
import Products from './components/Products';
import Clothes from './components/Clothes';
import Footer from './components/Footer';

function App() {
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtém o destino da rolagem a partir do atributo href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rola suavemente até o destino
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        });
    });
});
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


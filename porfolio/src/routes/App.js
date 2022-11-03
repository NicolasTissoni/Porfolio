import '../styles/index.scss';

import NavBarContainer from '../views/navBar/NavBarContainer';
import Proyectos from '../views/proyectos/Proyectos';
import SobreMi from '../views/sobre-mi/SobreMi';
import Tecnologias from '../views/tecnologias/Tecnologias';
import Footer from '../views/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
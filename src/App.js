
import './App.css';
import Header from './Componente-menu/Header';
import Footer from './Componente-footer/Footer';
import ItemListContainer from './Componente-body/ItemListContainer';
import ItemCount from './assets/ItemCount';

function App() {
  const productos = [
    { id:1, title: "Bidon 20 lts", precio: "550", image: "Bidon-retornable-de-agua-x-20-litros.jpg" },
    { id:2, title: "Bidon 10 lts", precio: "300", image: "Bidon-retornable-de-agua-x-10-litros.jpg" },
    { id:3, title: "Bidon 8 lts", precio: "250", image: "Bidon-retornable-de-agua-x-8-litros.jpg" },
    { id:4, title: "Sifon plastico", precio: "100", image: "Sifon-plastico-de-soda-x-1-25-litros.jpg" },
    { id:5, title: "Sifon vidrio", precio: "90", image: "Sifon-de-vidrio-de-soda-x-1-litro.jpg" },
]

const items= productos.map(items=> (
  <ItemListContainer valor={items.title}/>
));

  return (
    <div className='container-fluid fondo_oscuro'>
    <Header/>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        {items}
      </div>
    </div>
    <hr/>
    <ItemListContainer/>
    <ItemCount stock={5} initial={1} onAdd={0}/>
    
    <Footer/>
    </div>
  );
}

export default App;

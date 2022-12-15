import logo from './logo.svg';
import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PiedePagina from './componentes/Footer'
import MenuNavbar from './componentes/NavBar'

import ItemsCards_TextoCentral_DesarrolloSoftware from './componentes/ItemsCards_TextoCentral_DesarrolloSoftware'
import ItemsCards_Nosotros from './componentes/ItemsCards_Nosotros.jsx'
import ItemsCards_Portafolio from './componentes/ItemsCards_Texto_Portafolio.jsx'                
import ItemsCards_Producto1 from './componentes/ItemsCards_TextoCentral_ProductoFacturacionElectronica.jsx' 
import HomeWeb from './componentes/pages/home.jsx'


function App() {
  return (
    <div className="App">

      {/* <CartProvider> 
        <BrowserRouter>        
            <NavBar/>                        
            <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/productos' element={<ItemListContainer persona="LAS MEJORES PELICULAS EN ESPAÑOL LATINO, VEALAS AHORA" />}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListContainer persona="CATEGORIA"/>}/>
              <Route path='/carritodecompras' element={<CarritodeCompras/>}/> 
              <Route path='/CheckOut' element={<Checkout/>}/>         
            </Routes>   
            <br/>
        </BrowserRouter>
      </CartProvider>  */}

        <BrowserRouter>        
            <MenuNavbar/> 
            <Routes>
              <Route path='/' element = {<HomeWeb/>}/>
              <Route path='/DesarrolloSoftware' element ={<ItemsCards_TextoCentral_DesarrolloSoftware/>}/> 
{/* 
              <Route path='/RiegoTecnificadoFresas' element ={<ItemsCards_TextoCentral_RiegoTecnificadoFresas/>}/> 
              <Route path='/TopografiaGeodesia' element ={<ItemsCards_TextoCentral_TopografiaGeodesia/>}/> 
              <Route path='/ConstruccionObrasCiviles' element ={<ItemsCards_TextoCentral_ConstruccionObrasCiviles/>}/>
              <Route path='/NuestrosClientes' element ={<ItemsCards_NuestrosClientes/>}/>                             */}

              <Route path='/Nosotros' element ={<ItemsCards_Nosotros/>}/>
              <Route path='/Portafolio' element ={<ItemsCards_Portafolio/>}/>
              <Route path='/Producto1' element ={<ItemsCards_Producto1/>}/>              
            </Routes>   
            <PiedePagina/>                 
        </BrowserRouter>
            
      {/* <MenuNavbar/> 
      <ItemsCards_TextoSuperpuesto_ImagenPrincipal/>
      <ItemsCards_Texto_NuestrosServicios/>
       <ItemsCards_TextoCentral_IngenieriaAgricola/>
       <ItemsCards_TextoCentral_RiegoTecnificadoFresas/>
       <ItemsCards_TextoCentral_TopografiaGeodesia/>             
       <ItemsCards_TextoCentral_ConstruccionObrasCiviles/>
       <ItemsCards_TextoCentral_ClientesSatisfechos/>
       <PiedePagina/> */}



              
      {/* <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div>
  );
}

export default App;


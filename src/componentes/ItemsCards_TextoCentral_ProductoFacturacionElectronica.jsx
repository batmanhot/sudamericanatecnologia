
import React from 'react';
import { Link } from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import { GiMineWagon } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaClipboardCheck, FaWhatsapp } from "react-icons/fa";

import producto from '../imagen/FlyerPuntoVenta.png'
import wasap from '../imagen/whatsapp.png'
import ventajas from '../imagen/ventajas.png'
import caracteristicas from '../imagen/caracteristicas.png'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'
import '../css/Whatsapp.css'

export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>        
          <div class="container-fluid">        
            <div class="card-group">
              <div class='row' >    
                  <div class="card bg-dark text-white rounded-0">
                        <h2 class="card-header titulo1-text">PUNTO DE VENTA CON FACTURACION ELECTRONICA</h2>
                  </div> 
                    
                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">            
                      <div class="card-body text-card-boxshadow">

                        {/* <GiMineWagon size={50}/> */}

                        <img class="img-fluid productopresentacion border-dark" src = {producto} with="15rem" alt="Producto"/>  

                        {/* <h5 class="card-title mt-3 titulo2-text shadow-text text-white" >MINERA CARACOL S.A</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">
                              Se realizaron trabajos: Poligonal superficial y subterranea para enlazar y ajustar las labores mineras con fines de conexion de labores y explotación minera, ademas de exploraciones.
                              Se realizo poligonales subterraneas por piques, chimeneas, galerias , tajos para proyectar la vetas en los niveles inferiores y superiores.                    
                        </p> */}

                      </div>              
                    </div>

                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="card-body text-card-boxshadow">
                      {/* <GrServices size={50}/> */}
                        <img class="img-fluid productopresentacion border-dark icono" src = {caracteristicas} alt="Producto"/>  
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">CARACTERISTICAS</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">                            
                            FACTURACIÓN ELECTRÓNICA <br/>
                            ✅ Emite facturas, boletas, notas de crédito y débito <br/>
                            ✅ Cotizaciones <br/>
                            ✅ Guías de remisión <br/>
                            ✅ Notas de venta <br/>
                            ✅ Reportes de ventas, compras y contable <br/>
                            ✅ Envíos de documentos por WhatsApp y correo <br/><br/>
                            
                            CONTROL DE INVENTARIO<br/>
                            ✅ Control de Stock<br/>
                            ✅ Ingresos, salidas, traslados y ajustes de almacén<br/>
                            ✅ Combos, variantes y promociones<br/>
                            ✅ Productos más vendidos, ganancias y perdidas<br/>
                            ✅ Alertas de stock y caducidad de producto<br/><br/>
                            
                            PUNTO DE VENTA<br/>
                            ✅ Códigos de barras<br/>
                            ✅ Múltiples precios por producto (x mayor, x menor, etc)<br/>
                            ✅ Tipos de pago (efectivo, tarjetas)<br/>
                            ✅ Tipos de venta (en local, por páginas web)<br/>
                            ✅ Controla y supervisa tus cajas y/o cajeros<br/>
                            ✅ Registro de clientes con solo digitar el DNI o RUC<br/>
                            ✅ Ventas anuladas, gastos, ingresos.
                        </p>              
                      </div>              
                    </div>
                    

                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">          
                      <div class="card-body text-card-boxshadow">                        

                        {/* <GrServices size={50}/> */}
                      <img class="img-fluid productopresentacion border-dark icono" src = {ventajas} alt="Producto"/>  
                      <h5 class="card-title mt-3 titulo2-text shadow-text text-white">VENTAJAS Y BENEFICIOS </h5>

                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">                                      
                            ✅ MultiNegocios (Bodegas, Ferreterias, Panaderias, Markets, Galerias, <br/>
                                Lubricentros, Pizzerias, Hoteles etc)<br/>
                            ✅ Capacitacion y Asesoría remota<br/>
                            ✅ Tienda Virtual (ecommerce)<br/>
                            ✅ Somos especialistas en facturacion electronica<br/>
                            ✅ Manejo de Codigo de Barras<br/>
                            ✅ Envio directo a la Sunat<br/>
                            ✅ Soporte Tecnico 24/7<br/><br/>
                            📌 Activación en menos de 24 horas<br/>

                            💪¡Haz Crecer tu Negocio! <br/>

                            👉 Calidad y Garantía.<br/>
                            👉 Atención Personalizada.<br/><br/>

                        
                            GRATIS<br/>
                            🔐 Certificado Digital - Sunat<br/>
                            🛍️ Tienda OnLine<br/>
                            📱  Aplicación móvil (android).<br/>
                            👨‍🏫 Capacitación y Asesoría remota.<br/><br/>
                            {/* 🔧 Soporte Técnico.<br/><br/> */}

                            
                            ATENDEMOS A NIVEL NACIONAL✈️<br/>

                            💳 Aceptamos todo medio de pago (Efectivo, transferencias, yape)<br/>
                        </p>                                                     
                              <a href="https://api.whatsapp.com/send?phone=51951655295&text=Estoy%20interesado%20en%20tener%20m%C3%A1s%20informaci%C3%B3n%20del%20su%20sistema%20de%20Punto%20de%20Ventas%20con%20Facturaci%C3%B3n%20Electronica%20e%20Inventarios" target="_blank"> 
                                <FaWhatsapp size= {'3rem'}/>Mas información
                                {/* <img class="boton" src ={wasap} /> */}
                              </a>
                              <br/>                              

                      </div>             
                    </div>

                    {/* <div class="card p-2 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">     
                      <div class="card-body">
                        <GiMineWagon size={48}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">ASESORÍA TÉCNICA EN PRODUCCIÓN DE CULTIVOS FRUTALES</h5>
                        <p class="card-text titulo4-text shadow-text text-white">
                            Le acompañamos y asesoramos en todo el proceso productivo para que su negocio logre alcanzar los certificados de exportación para llegar a los mercados internacionales.
                            De todas las cosas necesarias para cultivar árboles frutales, o cualquier otra cosa, para el caso, el suelo es quizás uno de los más pasados ​​​​por alto y menospreciados. El suelo juega un papel fundamental en la salud y la cantidad de frutos que producirán.
                        </p> 
                      </div> 
                    </div> */}
              </div>
            </div>      
            </div>
          </div>
      </>
      );
    }
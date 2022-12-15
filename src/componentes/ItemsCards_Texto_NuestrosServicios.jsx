import React from 'react';
import { Link } from 'react-router-dom';
import { MdAgriculture, MdConstruction } from  'react-icons/md'
import { BsFillDropletFill } from  'react-icons/bs'
import { GiPencilRuler } from  'react-icons/gi'
import { AiTwotoneContainer } from  'react-icons/ai'

import Desarrollo from '../imagen/DesarrollodeSoftware.jpg'
import Productividad from '../imagen/AplicacionesPymes.jpg'
import Soporte from '../imagen/AtencionCliente.jpg'
import Cableado from '../imagen/cableado-estructurado.jpg'
import licencia from '../imagen/Licencia-software.png'
import tercerizacion from '../imagen/OutSourcing.jpg'

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'


export default function ItemsCards_TextoCircular() {
   return (
    <>         
      <div class="container-fluid">                  

        {/* /* Medidas de BreakPoint para el uso en col bootstrap
        Breakpoint	Class infix	Dimensions
        X-Small	None	        <576px
        Small	sm	            ≥576px
        Medium md	            ≥768px
        Large	lg       	      ≥992px
        Extra large	xl	      ≥1200px
        Extra extra large	xxl	≥1400px
        */ }

        <div class="card-group"> 

            {/* ----1  */}
          <div class='row'>
              <div class="card bg-dark text-white rounded-0">
                <h2 class="card-header titulo1-text">NUESTROS SERVICIOS</h2>
              </div> 

              <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">

              <img class="img-fluid redondearimagen border-dark text-center" src={Desarrollo} alt="Card image cap"/> 
             


                <div class="card-body ColorFondoCard">                                    
                   <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">DESARROLLO DE SOFTWARE</h5> 

                  <div >  
                    <p class="card-text titulo4-text shadow-text texto-justificado">                       
                      Diseñamos y desarrollamos paginas web responsive para todo tipo de empresas y software de aplicaciones a medida que permitan optimizar los procesos de nuestros clientes y supongan un importante ahorro de costes por el uso de la tecnología. <br/><br/>
                      Asesoramos sobre la tecnología a utilizar, diseñamos e inmplementamos las aplicaciones siguiendo los requerimientos que el cliente nos indica.<br/><br/>
                      Utilizamos las mas modernas herramientas y metodologias con altos standares en las diversas etapas del diseño, desarrollo, QA , implementacion.
                    </p>
                  </div>

                </div>
                <div class="card-footer text-primary  ">                                        
                    {/* <Link className="nav-link demo-text text-white pl-3" to='/IngenieriaAgricola'><MdAgriculture size= {'2rem'}/> Ver mas </Link>  */}
                  </div>              
              </div>

              {/* ----2  */}
              <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <img class="img-fluid redondearimagen border-5 border-dark" src={Productividad} with="50%" height="30%" alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">PRODUCTIVIDAD Y APLICACIONES PYMES</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                       Somos proveedores de aplicaciones de software ya implementadas totalmente operativas y consolidadas orientadas para su negocio.<br/><br/>
                       Disponemos software de productividad desarrollados en modo web, escritorio con base datos y tambien en la nube. <br/><br/>
                       Productos tales como Puntos de Ventas, Inventarios, Restaurantes, Monitor de Cocina, Gestion Mozos, Colegio, Farmacias, Notarias incluyen Facturacion Electronica con conexion directa a la SUNAT
                    </p>                              
                  </div>
                  <div class="card-footer">
                    {/* <Link className="nav-link demo-text text-white pl-2" to='/RiegoTecnificadoFresas'><BsFillDropletFill size= {'2rem'}/> Ver mas </Link>  */}
                    {/* <a href="#" class="card-link">Link al Grupo de Noticias</a> */}
                  </div>              
              </div>

              {/* ----3  */}
              <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <img class="img-fluid redondearimagen border-5 border-dark" src={Cableado} with="50%" height="30%" alt="Card image cap"/>                
                <div class="card-body">
                  <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">REDES Y CABLEADO ESTRUCTURADO</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">                
                     Realizamos instalaciones de Cableado para Redes Informáticas en Pequeñas, Medianas empresas e Instalaciones de Cableado de gran envergadura.<br/><br/>
                     Le asesoramos en la instalación de cableado estructurado, adaptándonos a sus necesidades y a las condiciones de su espacio. <br/><br/>
                     Le aconsejamos tanto en los materiales como en la disposición de mobiliarios: armarios para informática (racks), paneles, bandejas, cables de parcheo, tomas de usuario, cables de usuario <br/><br/>
                     Le ofrecemos un gran abanico de posibilidades para que pueda implementar con éxito su infraestructura de comunicaciones o Red Informática. 
                  </p>
                </div>
                 <div class="card-footer">
                    {/* <Link className="nav-link demo-text text-white pl-2" to='/TopografiaGeodesia'><GiPencilRuler size= {'2rem'}/> Ver mas </Link>  */}
                    {/* <a href="#" class="card-link">Link al Grupo de Noticias</a> */}
                  </div>              
                </div>                              

                {/* ---- 4  */}
                {/* col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 */}
                <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">     
                  <img class="img-fluid redondearimagen border-5 border-dark" src={Soporte} with="50%" height="30%" alt="Card image cap"/>                  
                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">SOPORTE TECNICO DE APLICACIONES Y PCS</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                        Disponemos de sistemas de soporte técnico remoto que nos permiten conectarnos a tu negocio de manera inmediata para poder ofrecerte ayuda lo más rápidamente posible, de esta forma minimizarás el tiempo que tu empresa no puede trabajar debido a un problema técnico o el ataque de un virus informático.<br/><br/>
                        Haciendo hincapié en una correcta realización de las copias de seguridad, por esa razón te ofrecemos además de la posibilidad de gestionar la realización de tus copias de seguridad, un servicio de respaldo de tus copias en la nube.<br/><br/>
                        Te ayudamos a mantener de manera adecuada y segura la infraestructura informática de su empresa, ofreciendo un servicio garantizado, profesional y de calidad.
                    </p>                    
                  </div>

                  <div class="card-footer">                      
                      {/* <Link className="nav-link demo-text text-white pl-2" to='/'><AiTwotoneContainer size= {'2rem'}/> Ver mas </Link>                        */}
                  </div>              
                </div>
                
                {/* ----5  */}        
                <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">     
                  <img class="img-fluid redondearimagen border-5 border-dark" src={tercerizacion} with="50%" height="30%" alt="Card image cap"/>                  
                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">OUTSOURCING EN TECNOLOGIA</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      Ayudamos a nuestros clientes a transformar y mejorar su actividad empresarial con herramientas innovadoras adaptadas a sus necesidades. <br/><br/>
                      Nuestros servicios de consultoría tienen como finalidad mejorar la eficiencia y productividad mediante soluciones tecnológicas adaptadas a sus necesidades. Nuestra experiencia multisectorial nos permite aportar soluciones totalmente confiables a los complejos retos que el mercado actual presenta a las empresas.<br/><br/>
                      Nuestros profesionales son expertos en la gestión de sistemas. Con más de 10 años de experiencia gestionando proyectos de consultoría exitosos, utilizamos metodologias agiles con la finalidad de realizar una adecuada planificacion de su proyecto para minimizar lo tiempos de implantación, facilitando la aceptación del cambio por todo el personal de la organización.
                    </p>                    
                  </div>

                  <div class="card-footer">                      
                      {/* <Link className="nav-link demo-text text-white pl-2" to='/'><AiTwotoneContainer size= {'2rem'}/> Ver mas </Link>                        */}
                  </div>              
                </div>
                {/* ------------------------------  */}        


                {/* ----6  */}        

                <div class="card p-2 colorfondocard text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <img class="img-fluid redondearimagen border border-5 border-dark" src= {licencia} with="50%" height="30%" alt="Card image cap"/>

                  <div class="card-body">
                    <h5 class="card-title shadow-lg p-3 mb-4 rounded shadow-text titulo2-text">LICENCIAS DIGITALES DE SOFTWARE</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      Tenemos las Mejores Ofertas de Licencias Originales en Marcas como Office, Windows, Nod32, Karspersky, Avast. Siempre Alta Calidad y Garantía Total <br/><br/>
                      Ofrecemos un producto confiable, seguro para cubrir sus necesidades de software. <br/><br/>
                      Aqui puede encontrar una amplia variedad de sistemas operativos, software de oficina y antivirus para su negocio. <br/><br/>
                      Nos esforzamos en ofrecer los precios más competitivos y brindar el mejor servicio post-venta al cliente.
                    </p>                            
                  </div>
                  <div class="card-footer">
                      {/* <Link className="nav-link demo-text text-white pl-2" to='/ConstruccionObrasCiviles'><MdConstruction size= {'2rem'}/> Ver mas </Link>                  */}
                    </div>              
                  </div>
                </div>                 
                

          </div>
      </div>
      </>
      );
    }
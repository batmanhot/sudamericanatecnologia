
import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { GiMineWagon } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { GrServices } from "react-icons/gr";

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_TextoCentral() {
   return (
    <>   
      <div>        
          <div class="container-fluid">        
            <div class="card-group">
              <div class='row' >    
                  <div class="card bg-dark text-white rounded-0">
                        <h2 class="card-header titulo1-text">CLIENTES SATISFECHOS</h2>
                  </div> 
                    
                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">            
                      <div class="card-body text-card-boxshadow">

                        <GiMineWagon size={50}/>

                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white" >MINERA CARACOL S.A</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">
                              Se realizaron trabajos: Poligonal superficial y subterranea para enlazar y ajustar las labores mineras con fines de conexion de labores y explotación minera, ademas de exploraciones.
                              Se realizo poligonales subterraneas por piques, chimeneas, galerias , tajos para proyectar la vetas en los niveles inferiores y superiores.                    
                        </p>
                      </div>              
                    </div>

                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="card-body text-card-boxshadow">
                        <MdAgriculture size={50}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">AGRICOLA TAMBILLO SRL</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">
                          Levantamiento topografico de parcelas con fines para proyectos de riego tecnificado a goteo del cultivo de fresas, realizar diseño y planos de distribucion de red de agua y areas de sembrio, por consiguiente la distribucion del H2O sera uniforme.<br/>
                          Al aplicar la ingenieria en el riego tecnificado perfite una mejor fertilizacion, riego y control de plagas y malesas.<br/>
                          En resumen levantamiento topográfico y planos de diseño para instalaciones de riego tecnificado  goteo en el cultivo de fresas.
                        </p>              
                      </div>              
                    </div>
                    

                    <div class="card p-4 colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">          
                      <div class="card-body text-card-boxshadow">
                        <GrServices size={50}/>
                        <h5 class="card-title mt-3 titulo2-text shadow-text text-white">FAM HOLDING PERU SAC.</h5>
                        <p class="card-text mt-3 mb-3 titulo4-text shadow-text text-white texto-justificado">              
                          Replanteo de ejes y perímetro  para la instalación de módulos de cortes en almacén metal mecánica, montajes de estructurar metálicas.
                        </p>
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
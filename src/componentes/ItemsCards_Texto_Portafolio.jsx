import React from 'react';
import { Link } from 'react-router-dom';
import { MdAgriculture, MdConstruction } from  'react-icons/md'
import { BsFillDropletFill } from  'react-icons/bs'
import { GiPencilRuler } from  'react-icons/gi'
import { AiTwotoneContainer } from  'react-icons/ai'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_Portafolio.jsx'

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

              <ImagenPrincipalSeccion /> 

              <div class="card bg-dark text-white rounded-0">
                <h2 class="card-header titulo1-text">PORTAFOLIO</h2>
              </div>
              {/* colorfondocardservicios_portafolio */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">              
                <div class="card-body text-card-boxshadow">                    
                {/* shadow-lg */}
                {/* ColorFondoCard */}
                  <h5 class="card-title p-1 rounded shadow-text titulo1-text">2012</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">
                      - Topografía Minera,  Poligonales y levantamiento topográficos de labores subterráneas: piques, chimeneas, galerías, tajos, sub niveles, cruceros y control de proyectos mineros (gradientes, dirección) y replanteos.
                      MINERA CARACOL SAC / BARRANCA  <br/><br/>

	      		          - Levantamiento Topográfico Catastral Urbano, Toma de datos y levantamiento topográfico de viviendas, calles, alumbrado público y otros detalles técnicos que se representan en el plano y su aprobación en el sector competente.
                      CENTRO POBLADO TAMBILLO / AUCALLAMA <br/><br/>

                      - Levantamiento Topográfico de Parcelas, Toma de datos, procesamiento y replanteo del proyecto para la instalación del riego tecnificado en el cultivo de fresas. 
                      AGRICOLA TAMBILLO SRL / HUARAL, HUACHO, CANTA <br/><br/>
                  </p>
                </div>
              </div> 

              {/* ----2  */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2019</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                       - Topografía en Edificaciones y replanteo de ejes y perímetro  para la instalación de módulos de cortes en almacén metal mecánica, montajes de estructurar metálicas. 
                       FAM HOLDING PERU S.A.C. / LIMA <br/><br/>
                           
			                 - Lotizaciones y Habilitación Urbana, levantamiento Topográfico de Terrenos y Elaboración de Proyectos y Expedientes Técnicos, Planos de Independización, Lotizaciones, Perimétricos, Asesoramientos y Trámites Administrativos.
                       ASOCIACION DE POBLADORES VALLE VERDE – AUCALLAMA – HUARAL <br/><br/>                      
                    </p>                              
                  </div>
                  
              </div>

              {/* ----3  */}
              <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">              
                <div class="card-body text-card-boxshadow">
                  <h5 class="card-title p-1 rounded shadow-text titulo1-text">2020</h5>
                  <p class="card-text titulo4-text shadow-text texto-justificado">                
                        - Peritaje Topográfico y Revision de expedientes técnicos, propiedades o de parcelas, denuncios mineros,  para su replanteo en el campo los linderos, perímetros y áreas con equipos topográficos de precisión ( Estación Total y GPS diferencial)
                        En AUCALLAMA y HUARAL<br/>
                  </p>
                </div>
                </div>                              

                {/* ---- 4  */}
                <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">                  
                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2021</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">                    
                    Peritaje Topográfico y Revision de expedientes técnicos, propiedades o de parcelas, denuncios mineros,  para su replanteo en el campo los linderos, perímetros y áreas con equipos topográficos de precisión ( Estación Total y GPS diferencial)	
                    En AUCALLAMA Y HUARAL   2021 <br/><br/>

                    Riego Tecnificado y Cultivo de Fresas y Levantamiento topográfico e instalación de tuberías para riego tecnificado por goteo, cultivo y producción de fresas en el valle de Huaral, Huaura y Chancay.
                    HUARAL, HUAURA, CHANCAY 2021 <br/><br/>

                    Servicio Técnico Agrícola:	Asesoramiento y soporte técnico en injertos, cultivos de tubérculos, frutas y verduras( papa, fresas, naranjas, manzana, mandarina, lechugas, zanahoria, etc.)	HUARAL,
                    HUAURA, CHANCAY 2021.<br/><br/>

                    Levantamiento Topográfico de Parcelas, Toma de datos, procesamiento y replanteo del proyecto para la instalación del riego tecnificado en el cultivo de fresas 2021, 
                    AGRICOLA TAMBILLO SRL / HUARAL, HUACHO, CANTA <br/><br/>
                    </p>                    
                  </div>
                  
                </div>

                {/* ----5  */}
                <div class="card p-3 colorfondocardservicios_portafolio text-white border-0 rounded-0 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  {/* <img class="img-fluid redondearimagen border border-5 border-dark" src="https://i.postimg.cc/wjDqYrrc/CONSTRUCCION-CIVIL.jpg" with="50%" height="30%" alt="Card image cap"/>                   */}

                  <div class="card-body text-card-boxshadow">
                    <h5 class="card-title p-1 rounded shadow-text titulo1-text">2022</h5>
                    <p class="card-text titulo4-text shadow-text texto-justificado">
                      
                    </p>                            
                  </div>
                  </div>
                </div>                

          </div>
      </div>
      </>
      );
    }
import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import maiz from '../imagen/maiz2.jpg'
import Agronoma from '../imagen/Agronoma-cultivo-supervisora.jpg'
import controldeplagas from '../imagen/control de plagas en los cultivos.jpg'
import injertos from '../imagen/injertos.jpg'
import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_IngenieriaAgricola.jsx'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_IngenieriaAgricola() {
   return (
    <>          
         <div class="container-fluid">
    
          <div class="card-group">

            <div class='row' >       

            <ImagenPrincipalSeccion /> 
            
            <div class="card bg-dark text-white rounded-0">
               <h2 class="card-header titulo1-text">INGENIERIA AGRICOLA</h2>
            </div>   

              {/* --1 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">                
                <img className="card-img-fluid encuadrarimagen" src={Agronoma}  with='50%' height='50%' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title titulo2-text text-white shadow-text">INGENIERIA AGRICOLA</h5>            
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">                  
                      La ingeniería agrícola es aquella en la que se aplica la ciencia y tecnología en los ámbitos de las explotaciones relacionadas con la agricultura, tanto extensivas como intensivas, la industria agroalimentaria, el desarrollo de maquinaria, motores y tecnología agrícola, la jardinería y el paisajismo, procurando las mejores condiciones sociales, económicas, ecológicas, cuidado del medio ambiente y sobre todo apuntando a la alta produccion de productos y riqueza del suelo.
                  </p> 
                  
                </div>
                <div className="card-footer">
                    <Button variant="primary">Mas detalles </Button>
                  </div>              
              </div>

              {/* --2 */}
              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <img className="card-img-fluid encuadrarimagen" src={injertos} with='50%' height='50%' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title titulo2-text text-white shadow-text">INJERTOS</h5>
                  
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">
                      Los injertos de árboles frutales se utilizan como métodos de multiplicación y reproducción en gran variedad de plantas y árboles, resultando muy efectivos en este tipo de árboles. 
                      <br />
                      En general, el proceso de realizar un injerto consiste en hacer un corte en una rama e insertarla en otro árbol. 
                      <br />
                      Sin embargo, en la práctica, este proceso es mucho más complejo y existen diferentes técnicas para lograr que el árbol frutal siga creciendo, dé frutos y sobre todo apuntando a la alta producción.
                  </p>                            
                </div>
                <div className="card-footer">
                    <Button variant="primary">Mas detalles</Button>
                  </div>              
              </div>
              
              {/* --3 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0  col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <img className="card-img-fluid encuadrarimagen" src={controldeplagas} with='50%' height='50%' alt="Card image cap"/>

                <div className="card-body">
                  <h5 className="card-title titulo2-text shadow-text text-white">CONTROL DE PLAGAS Y ENFERMEDADES EN LOS CULTIVOS</h5>
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">              
                      Las plagas y enfermedades en los cultivos son muy frecuentes. 
                      <br />
                      Por ello, se han modernizado los métodos de prevención de estos problemas a lo largo del tiempo. 
                      <br />
                      Si usted se dedica al sector agrario, puede seguir unas recomendaciones para evitarlos.                  
                      <br />
                      Este sector es fundamental ya que miles de personas se sustentan de esta actividad. Por esta razón desde hace algunos años ha cobrado gran importancia la prevención. 
                  </p>
                </div>
                <div className="card-footer">
                    <Button variant="primary">Mas detalles </Button>
                  </div>              
              </div>

              {/* --4 */}

              <div className="card text-card-padding colorfondocardservicios_agricola border-0 rounded-0 col-xs-12 col-sm-6 col-md-6 col-lg-12 col-xl-3">
                <img className="card-img-fluid encuadrarimagen" src={maiz} with='50%' height='50%' alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title titulo2-text shadow-text text-white">ASESORÍA TÉCNICA EN PRODUCCIÓN DE CULTIVOS FRUTALES</h5>
                  <p className="card-text titulo4-text shadow-text text-white texto-justificado">
                      Le acompañamos y asesoramos en todo el proceso productivo para que su negocio logre alcanzar los certificados de exportación para llegar a los mercados internacionales.
                      <br />
                      De todas las cosas necesarias para cultivar árboles frutales, o cualquier otra cosa, para el caso, el suelo es quizás uno de los más pasados ​​​​por alto y menospreciados. 
                      <br />
                      El suelo juega un papel fundamental en la salud y la cantidad de frutos que producirán.
                  </p>              
                </div>

                <div class="card-footer">
                    <Button variant="primary">Mas detalles </Button>
                  </div>              
              </div>
            </div>    
          </div> 
        </div>
      </>
      );
    }
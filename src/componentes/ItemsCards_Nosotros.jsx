import React from 'react';
import '../css/imagenprincipal.css'

 {/* /* Medidas de BreakPoint para el uso en col bootstrap
        Breakpoint	Class infix	Dimensions
        X-Small	None	        <576px
        Small	sm	            ≥576px
        Medium md	            ≥768px
        Large	lg       	      ≥992px
        Extra large	xl	      ≥1200px
        Extra extra large	xxl	≥1400px
        */ }


export default function ImagenPrincipalSeccion() {
    return (
     <>              
          <div class="container-fluid"> 
            <div class='row'> 
              <div class="overlay-dark bg-cover bg-center p-2 imagenprin_nosotros">
                  <div class="overlay-content text-white text-center p-1">
                        <div class="card rounded-0 col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-4">
                          <div class="card-body bg-dark">
                            <h3>NOSOTROS</h3>
                            <h6>SOMOS UN STAFF MULTIDISCIPLINARIO</h6>                                                              
                                <p class="texto-justificado">
                                  Somos una compañía multidisciplinaria comprometida con la innovación y la calidad. <br/><br/>
                                  Ofrecemos al cliente los servicios necesarios para solucionar sus necesidades tecnológicas. Nuestro objetivo no es ser su proveedor sino su socio tecnológico para que se centre en su negocio, y nosotros hacerle ser más eficiente en sus procesos. <br/><br/>
                                  Trabajamos en un entorno puntero en innovación dentro del sector de las TI, donde la preocupación por la innovación tecnológica es una constante en los planes estratégicos de la compañía.<br/><br/>
                                  En sintesis somos una empresa especializada en el diseño, desarrollo, gestion e implementacion de infraestructura de tecnologias de informacion.
                                </p>



                          </div>                             
                        </div>                                                                     
                  </div>
              </div>
            </div>
        </div>
      </>
    );
}

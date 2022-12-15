import React from 'react';
import '../css/imagenprincipal.css'
import producto from '../imagen/FlyerPuntoVenta.png'

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
              <div class="overlay-dark bg-cover bg-center p-5 imagenprin_nosotros">                                  
              
                    {/* <div class="overlay-content text-white p-1">                      */}
                        
                             <div class="card rounded-10 col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6">                                
                                <div class="card-body bg-dark">                                         
                                    <img class="img-fluid productopresentacion border-dark" src = {producto} alt="Producto"/>                              
                                </div>      
                                <div class="card-body bg-dark">                                         
                                    <img class="img-fluid productopresentacion border-dark" src = {producto} alt="Producto"/>                              
                                </div>                                                  
                            </div>                                                                      
                    {/* </div> */}
              </div>
            </div>
        </div>
      </>
    );
}


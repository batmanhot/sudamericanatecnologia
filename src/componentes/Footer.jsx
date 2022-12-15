import React from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation, ImInstagram } from "react-icons/im";
import { FaServicestack, FaSuitcase, FaUserTie } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";


import '../css/Footer.css'


const PiedePagina = () => {
  return (  
  <div>
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              {/* --Column1--> */}
              <div class="footer-pad">
                <h4>NOSOTROS</h4>
                <p class='footer-nosotros'>Empresa peruana formada con vision de negocio, desarrollo y proactividad para cubrir las necesidades de nuestros clientes en los diferentes rubros y servicios que brindamos y de esta manera fomentamos el crecimiento de nuestro pais.</p>           
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>UBICACION</h4>
                <div class='footer-ubicacion'>                
                  <p><AiFillPhone size={22} class='footer-icono-ubicacion'/> Telefonos: <br /> 951655295</p>  
                  <p><MdEmail  size={22} class='footer-icono-ubicacion'/> Correo Electronico <br /> sudintec.contacto@gmail.com <br />sudintec.helpdesk@gmail.com</p>
                  <p><ImLocation size={22} class='footer-icono-ubicacion'/>Ubicacion : LIMA - PERU </p>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              {/* <!--Column1--> */}
              <div class="footer-pad">
                <h4>CONTACTO</h4>
                <ul class="list-unstyled">
                  <div class='footer-contacto'>                    
                    <li><FaUserTie size={22} class='footer-icono-contacto'/> <a href="/Nosotros"> Nosotros</a></li>
                    <li><FaSuitcase size={22} class='footer-icono-contacto'/> <a href="/Portafolio"> Portafolio</a></li>
                    <li><FaServicestack size={22} class='footer-icono-contacto'/> <a href="/"> Servicios</a></li>
                    <li><RiContactsFill size={22} class='footer-icono-contacto'/> <a href="#"> Contacto</a></li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>SIGUENOS EN NUESTRAS REDES SOCIALES</h4>
                  {/* <ul class="social-network social-circle"> */}
                  <ul class="social-network social-circle">
                    <li><a href="https://www.facebook.com/JBLASPERU/" class="icoFacebook" title="Facebook"><BsFacebook size={28}/> </a></li>                    
                    <li><a href="https://www.youtube.com/channel/UCN9I8mz5bhpNL3Nuv0CV_Zw" class="icoLinkedin" title="Linkedin"><AiFillLinkedin size={28}/> </a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=51951655295&text=Quisiera%20informacion%20mas%20detallada%20al%20respecto%20" target="_blank"  class="icoLinkedin" title="WhatApp - Comuniquese sin compromiso"><BsWhatsapp size={28}/> </a></li>
                  </ul>               
          </div>
          </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Derechos de Autor 2022 - SUDINTEC</p>
          </div>
        </div>

      </div>
      </div>
    </footer>
  

  </div>

  );
}
 
export default PiedePagina;
  
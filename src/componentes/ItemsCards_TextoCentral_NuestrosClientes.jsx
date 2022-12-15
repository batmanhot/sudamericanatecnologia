import React from 'react';

import ImagenPrincipalSeccion from './ItemsCards_ImagenPrincipal_NuestrosClientes.jsx'
import NuestrosClientes from './ItemsCards_TextoCentral_ClientesSatisfechos.jsx'

import '../css/NuestroServicio.css'
import '../css/imagenprincipal.css'

export default function ItemsCards_NuestrosClientes() {
   return (
    <>
        <div>
          <ImagenPrincipalSeccion />
          <NuestrosClientes />
        </div>
      </>
      );
    }
import React from 'react';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import maiz1 from '../imagen/maiz1.jpg'

export default function ItemsCards_TextoIzquierda() {
   return (
    <>
    <div class='d-flex m-10'>      
      <Card style={{ width: '50%' }}>        
        <Row className='no-gutters'>
            <Col md={7}>
                <Card.Img variant="top" src={maiz1}/>
            </Col>
            <Col>
                <Card.Body>                  
                    <Card.Title>SERVICIO TECNICO AGRICOLA</Card.Title>
                    <br />
                    <br />
                    <Card.Text>
                        <h5>
                           Asesoramiento tecnico y soporte en injernos , tuberculos, frutas y verdura (papa,fresa, naranja, manzana, mandarina, lechugas, zanahorias etc.)
                        </h5>
                    </Card.Text>                                
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Col>
        </Row>        
        </Card>

        <Card style={{ width: '50%' }}>
        <Row className='no-gutters'>
            <Col md={7}>
                <Card.Img variant="top" src={maiz1}/>                
            </Col>
            <Col>
                <Card.Body>                  
                    <Card.Title>SERVICIO TECNICO AGRICOLA</Card.Title>
                    <br />
                    <br />
                    <Card.Text>
                        <h5>
                           Asesoramiento tecnico y soporte en injernos , tuberculos, frutas y verdura (papa,fresa, naranja, manzana, mandarina, lechugas, zanahorias etc.)
                        </h5>
                    </Card.Text>                                
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Col>
        </Row>        
        </Card>
      </div>



  
    {/* <Card className="bg-dark text-white">      
      <Card.Img class="card-img-top" src="https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632__340.jpg" with="150px"  height="50%" alt="Card image" /> 
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>

    </Card> */}


  </>
  );
  }

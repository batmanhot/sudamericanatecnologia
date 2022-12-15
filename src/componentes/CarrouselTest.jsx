import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import fresa1  from '../img/fresa1.jpg'
import fresa2  from '../img/fresa2.jpg'
import fresa3  from '../img/fresa3.jpg'


const items = [
  {        
    src: (fresa1),
    altText: 'Slide 1',
    caption: 'SEMBRIO DE FREBSA',
    caption_2: 'TRATAMIENTO DE LA SEMILLA'
  },
  {    
    src: (fresa2),
    altText: 'Slide 2',
    caption: 'SEMBRIO DE FRESA',
    caption_2: 'MANEJO DEL CRECIMIENTO DE FRESA'
  },
  {   
    src: (fresa3),
    altText: 'Slide 3',
    caption: 'SEMBRIO DE FRESA',
    caption_2: 'MANEJO DEL CULTIVO DE LA FRESA'
  }
];

class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem 
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>                    

            {/* <img src={item.src} alt={item.altText}  style={{display: 'flex', width: '25rem', height: '30%', margin: '0 auto', overflow: 'hidden',  justifycontent: 'center'}}/> */}

            {/* // Carrousel de Varias Imagenes */}
            <div className="col-sm-12">
                <div className="card bg-dark text-white" >
                    <h5 className="card-header text-center bg-secondary text-white">LAS MEJORES CRITICAS DEL AÑO</h5>
                    <div className="card-body" >    
                        
                        <div className="m-0 row justify-content-center">
                            {/* bg-warning text-dark p-2 text-center */}
                            <div className="col-auto text-dark p-2 text-center ">                          
                                <img className="imgCuadrado img-thumbnail img-responsive" 
                                     src={fresa1} alt="Primer slide"></img> 
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>TOP GUN 2 - MAVERICK</div> 
                            </div>
                            <div className="col-auto text-dark p-2 text-center ">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                src = {fresa2} alt="Segundo Slide"></img>                                                            
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>LUCIFER</div>                    
                            </div>                            
                            <div className="col-auto text-dark p-2 text-center">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                 src={fresa3}  alt="Tercer slide"></img>                                
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>SANDMAN</div>
                            </div>
                            <div className="col-auto text-dark p-2 text-center">
                                <img className="imgCuadrado img-fluid card-img img-thumbnail" 
                                 src={fresa1}  alt="Tercer slide"></img>                                
                                <div className="col-sm-13" style={{fontWeight:'bold'}}>LA MUJER MARAVILLA</div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
   
            {/* <img src={item.src} alt={item.altText} width="30%" height="760px" /> */}

          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption_2} /> */}
          <CarouselCaption/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Carrousel;

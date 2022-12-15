
import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


import sembriodefresa  from '../imagen/sembriodefresas.jpg'
import produccion  from '../imagen/maiz2.jpg'
import agronoma  from '../imagen/ingenieria-agropecuaria.jpg'
import edificaciones  from '../imagen/edificaciones.jpg'
import riegoporgoteo from '../imagen/instalacion de riego por goteo.jpg'
import topografia  from '../imagen/topografia.jpg'

const items = [
  {
    src: (sembriodefresa),
    altText: 'SEMBRIO DE FRESA',    
    caption: 'SEMBRIO DE FRESAS CON RIEGO TECNIFICADO',
    caption_2: 'ASESORIA EN LA PRODUCCION DE CULTIVOS'
  },
  {
    src: (produccion),
    altText: 'SEMBRIO DE FRESA',
    caption: 'ALTA PRODUCCION DE CULTIVOS DE CANTIDAD Y CALIDAD',
    caption_2: 'ASESORIA PARA LA EXPORTACION'    
  },
  {
    src: (agronoma),
    altText: 'SEMBRIO DE FRESA',
    caption: 'SERVICIOS DE INGENIERIA AGRICOLA',
    caption_2: 'TECNICAS DE MEJORAS DE CULTIVOS'    
  },
  {
    src: (edificaciones),
    altText: 'SEMBRIO DE FRESA',
    caption: 'CONSTRUCCION CIVIL / OBRAS CIVILES',
    caption_2: 'EDIFICACIONES'    
  },
  {
    src: (riegoporgoteo),
    altText: 'SEMBRIO DE FRESA',
    caption: 'RIEGO POR GOTEO',
    caption_2: 'SERVICIO Y ASESORIA EN TECNICAS DE RIEGO POR GOTEO'    
  },
  {
    src: (topografia),
    altText: 'TOPOGRAFIA',
    caption: 'MEDICIONES TOPOGRAFICAS',
    caption_2: 'TOPOGRAFIA SUPERFICIAL Y SUBTERRANEO'    
  }
];

class Example extends Component {
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
          key={item.src}
          

        //   <div className="col-sm-12">
        //         <div className="card bg-dark text-white" >
        //             <h5 className="card-header text-center bg-secondary text-white">LAS MEJORES CRITICAS DEL AÑO</h5>
        //             <div className="card-body" >
        //                 <img src={item.src} alt={item.altText} />
        //             </div>
        //          </div>
        //    </div>

        >
          <div class="container-fluid">
            <div className="col-sm-12 xl-8 md-8 lg-6">
                <div className="card bg-dark text-white">
                    <div className="card-body">
                      <img src={item.src} alt={item.altText} width = "830px" height="490px"/>
                      <CarouselCaption captionText={item.caption_2} captionHeader={item.caption} /> 
                    </div>
                </div>
            </div>
          </div>
          {/* <img src={item.src} alt={item.altText} /> */}
          {/* <CarouselCaption captionText={item.altText} captionHeader={item.caption} /> */}
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


export default Example;
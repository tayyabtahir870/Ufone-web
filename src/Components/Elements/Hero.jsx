import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
  return (
    <div>
         <Carousel 
                  responsive={responsive}
                  autoPlay="true"
                  interval={2000}
                  infinite="true"
                  rewind={true}
                  axis="horizontal"
                  labels={true}
                  arrows={false}
                  showStatus={true}
                  showIndicators={true}
                  showThumbs={true}
                  showDots={true}
                >
                  <div>
                   
                  <img className='img-fluid' src="Assests/multi2.png" alt="" width={1550}  />
                
                  </div>
                  <div>
                    
                    <img className='img-fluid' src="Assests/multi2.png" alt="" width={1550}  />
                   
                  </div>
                  <div>
                  <img className='img-fluid' src="Assests/multi2.png" alt="" width={1550}  />

                  
                  </div>
                </Carousel>
    
    </div>
  )
}

export default Hero
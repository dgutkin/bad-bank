
import Carousel from 'react-bootstrap/Carousel';

import '../styles/Home.css';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src="/money.jpeg" className="carousel-img"/>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="/stock_chart.jpeg" className="carousel-img"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;